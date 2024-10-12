# How to view and update past graph state

Once you start [checkpointing](./persistence.ipynb) your graphs, you can easily
**get** or **update** the state of the agent at any point in time. This permits
a few things:

1. You can surface a state during an interrupt to a user to let them accept an
   action.
2. You can **rewind** the graph to reproduce or avoid issues.
3. You can **modify** the state to embed your agent into a larger system, or to
   let the user better control its actions.

The key methods used for this functionality are:

- [getState](https://bsorrentino.github.io/langgraph4j/apidocs/org/bsc/langgraph4j/CompiledGraph.html#getState-org.bsc.langgraph4j.RunnableConfig-):
  fetch the values from the target config
- [updateState](https://bsorrentino.github.io/langgraph4j/apidocs/org/bsc/langgraph4j/CompiledGraph.html#updateState-org.bsc.langgraph4j.RunnableConfig-java.util.Map-java.lang.String-):
  apply the given values to the target state

**Note:** this requires passing in a checkpointer.

This works for [StateGraph](https://bsorrentino.github.io/langgraph4j/apidocs/org/bsc/langgraph4j/StateGraph.html)

Below is an example.

<!-- 
```java
String userHomeDir = System.getProperty("user.home");
String localRespoUrl = "file://" + userHomeDir + "/.m2/repository/";
String langchain4jVersion = "0.35.0"
```


```java
%dependency /add-repo local \{localRespoUrl} release|never snapshot|always
%dependency /list-repos
```


```java
%dependency /add org.slf4j:slf4j-jdk14:2.0.9
%dependency /add org.bsc.langgraph4j:langgraph4j-core-jdk8:1.0-SNAPSHOT
%dependency /add org.bsc.langgraph4j:langgraph4j-langchain4j:1.0-SNAPSHOT
%dependency /add dev.langchain4j:langchain4j:\{langchain4jVersion}
%dependency /add dev.langchain4j:langchain4j-open-ai:\{langchain4jVersion}

%dependency /resolve
```

### Initialize logger


```java
try( var file = new java.io.FileInputStream("./logging.properties")) {
    var lm = java.util.logging.LogManager.getLogManager();
    lm.checkAccess(); 
    lm.readConfiguration( file );
}

var log = org.slf4j.LoggerFactory.getLogger("time-travel");

```
 -->

## Define the state

State is an (immutable) data class, inheriting from [AgentState], shared with all nodes in our graph. A state is basically a wrapper of a `Map<String,Object>` that provides some enhancers:

1. Schema (optional), that is a `Map<String,Channel>` where each [Channel] describe behaviour of the related property
1. `value()` accessors that inspect Map an return an Optional of value contained and cast to the required type

[Channel]: https://bsorrentino.github.io/langgraph4j/apidocs/org/bsc/langgraph4j/state/Channel.html
[AgentState]: https://bsorrentino.github.io/langgraph4j/apidocs/org/bsc/langgraph4j/state/AgentState.html


```java
import org.bsc.langgraph4j.state.AgentState;
import org.bsc.langgraph4j.state.Channel;
import org.bsc.langgraph4j.state.AppenderChannel;
import dev.langchain4j.data.message.AiMessage;
import dev.langchain4j.data.message.ChatMessage;

public class MessageState extends AgentState {

    static Map<String, Channel<?>> SCHEMA = Map.of(
            "messages", AppenderChannel.<ChatMessage>of(ArrayList::new)
    );

    public MessageState(Map<String, Object> initData) {
        super( initData  );
    }

    List<? extends ChatMessage> messages() {
        return this.<List<? extends ChatMessage>>value( "messages" )
                .orElseThrow( () -> new RuntimeException( "messages not found" ) );
    }

    // utility method to quick access to last message
    Optional<? extends ChatMessage> lastMessage() {
        List<? extends ChatMessage> messages = messages();
        return ( messages.isEmpty() ) ? 
            Optional.empty() :
            Optional.of(messages.get( messages.size() - 1 ));
    }
}
```

## Register Serializers

Every object that should be stored into State **MUST BE SERIALIZABLE**. If the object is not `Serializable` by default, Langgraph4j provides a way to build and associate a custom [Serializer] to it. 

In the example, we use  [`Serializer`] for [ToolExecutionRequest] and [ChatMesssager] provided by langgraph4j integration module with langchain4j .

[Serializer]: https://bsorrentino.github.io/langgraph4j/apidocs/org/bsc/langgraph4j/serializer/Serializer.html
[ChatMesssager]: https://docs.langchain4j.dev/apidocs/dev/langchain4j/data/message/ChatMesssager.html
[ToolExecutionRequest]: https://docs.langchain4j.dev/apidocs/dev/langchain4j/data/message/ToolExecutionRequest.html


```java
import dev.langchain4j.data.message.AiMessage;
import dev.langchain4j.data.message.SystemMessage;
import dev.langchain4j.data.message.UserMessage;
import dev.langchain4j.data.message.ToolExecutionResultMessage;
import dev.langchain4j.agent.tool.ToolExecutionRequest;
import org.bsc.langgraph4j.serializer.std.ObjectStreamStateSerializer;
import org.bsc.langgraph4j.langchain4j.serializer.std.ChatMesssageSerializer;
import org.bsc.langgraph4j.langchain4j.serializer.std.ToolExecutionRequestSerializer;
import org.bsc.langgraph4j.langchain4j.serializer.std.UserMessageSerializer;

var stateSerializer = new ObjectStreamStateSerializer<MessageState>( MessageState::new );
stateSerializer.mapper()
    // Setup custom serializer for Langchain4j ToolExecutionRequest
    .register(ToolExecutionRequest.class, new ToolExecutionRequestSerializer() )
    // Setup custom serializer for Langchain4j AiMessage
    .register(ChatMessage.class, new ChatMesssageSerializer() )

```




    org.bsc.langgraph4j.serializer.std.SerializerMapper@1a2f5781



## Set up the tools

Using [langchain4j], We will first define the tools we want to use. For this simple example, we will
use create a placeholder search engine. However, it is really easy to create
your own tools - see documentation
[here][tools] on how to do
that.

[langchain4j]: https://docs.langchain4j.dev
[tools]: https://docs.langchain4j.dev/tutorials/tools


```java
import dev.langchain4j.agent.tool.P;
import dev.langchain4j.agent.tool.Tool;

import java.util.Optional;

import static java.lang.String.format;

public class SearchTool {

    @Tool("Use to surf the web, fetch current information, check the weather, and retrieve other information.")
    String execQuery(@P("The query to use in your search.") String query) {

        // This is a placeholder for the actual implementation
        return "Cold, with a low of 13 degrees";
    }
}
```

## Set up the model

Now we will load the
[chat model].

1. It should work with messages. We will represent all agent state in the form of messages, so it needs to be able to work well with them.
2. It should work with [tool calling],meaning it can return function arguments in its response.

Note:
   >
   > These model requirements are not general requirements for using LangGraph4j - they are just requirements for this one example.
   >

[chat model]: https://docs.langchain4j.dev/tutorials/chat-and-language-models
[tool calling]: https://docs.langchain4j.dev/tutorials/tools   



```java
import dev.langchain4j.model.openai.OpenAiChatModel;
import dev.langchain4j.agent.tool.ToolSpecification;
import dev.langchain4j.agent.tool.ToolSpecifications;

OpenAiChatModel llm = OpenAiChatModel.builder()
    .apiKey( System.getenv("OPENAI_API_KEY") )
    .modelName( "gpt-4o" )
    .logResponses(true)
    .maxRetries(2)
    .temperature(0.0)
    .maxTokens(2000)
    .build()  

```

## Test function calling


```java
import dev.langchain4j.agent.tool.ToolSpecification;
import dev.langchain4j.agent.tool.ToolSpecifications;
import dev.langchain4j.data.message.UserMessage;
import dev.langchain4j.data.message.AiMessage;
import dev.langchain4j.model.output.Response;
import dev.langchain4j.model.openai.OpenAiChatModel;
import dev.langchain4j.service.tool.DefaultToolExecutor;
import org.bsc.langgraph4j.langchain4j.tool.ToolNode;

var toolNode = ToolNode.of( new SearchTool() );

var tools = toolNode.toolSpecifications();

UserMessage userMessage = UserMessage.from("What will the weather be like in London tomorrow?");

Response<AiMessage> response = llm.generate(Collections.singletonList(userMessage), tools );

AiMessage aiMessage = response.content();

var result = toolNode.execute( aiMessage.toolExecutionRequests() );

result;

```

    2024-10-11 13:21:15 FINEST org.bsc.langgraph4j.langchain4j.tool.ToolNode execute execute: execQuery





    Optional[ToolExecutionResultMessage { id = "call_0qE7Umcc6NaoIUJj10lrec6j" toolName = "execQuery" text = "Cold, with a low of 13 degrees" }]



## Define the graph

We can now put it all together. We will run it first without a checkpointer:



```java
import static org.bsc.langgraph4j.StateGraph.START;
import static org.bsc.langgraph4j.StateGraph.END;
import static org.bsc.langgraph4j.action.AsyncEdgeAction.edge_async;
import static org.bsc.langgraph4j.action.AsyncNodeAction.node_async;
import org.bsc.langgraph4j.StateGraph;
import org.bsc.langgraph4j.action.EdgeAction;
import org.bsc.langgraph4j.action.NodeAction;
import dev.langchain4j.data.message.AiMessage;
import dev.langchain4j.data.message.ChatMessage;
import dev.langchain4j.service.tool.DefaultToolExecutor;
import org.bsc.langgraph4j.checkpoint.MemorySaver; 
import org.bsc.langgraph4j.CompileConfig; 
import java.util.stream.Collectors;
// Route Message 
EdgeAction<MessageState> routeMessage = state -> {
  
  var lastMessage = state.lastMessage();
  
  if ( !lastMessage.isPresent()) return "exit";

  if( lastMessage.get() instanceof AiMessage message  ) {

    // If tools should be called
    if ( message.hasToolExecutionRequests() ) return "next";
    
  }
  
  // If no tools are called, we can finish (respond to the user)
  return "exit";
};

// Call Model
NodeAction<MessageState> callModel = state -> {
  var tools = ToolSpecifications.toolSpecificationsFrom( SearchTool.class );

  var response = llm.generate( (List<ChatMessage>)state.messages(), tools );

  return Map.of( "messages", response.content() );
};

// Invoke Tool 
NodeAction<MessageState> invokeTool = state -> {
  var lastMessage = (AiMessage)state.lastMessage()
                          .orElseThrow( () -> ( new IllegalStateException( "last message not found!")) );

  var toolNode = ToolNode.of( new SearchTool() );
  
  var result = toolNode.execute( lastMessage.toolExecutionRequests() )
                    .orElseThrow( () -> ( new IllegalStateException( "tool execution failed!")));

  return Map.of( "messages", result );
};

// Define Graph
var workflow = new StateGraph<MessageState> ( MessageState.SCHEMA, stateSerializer )
  .addNode("agent", node_async(callModel) )
  .addNode("tools", node_async(invokeTool) )
  .addEdge(START, "agent")
  .addConditionalEdges("agent", edge_async(routeMessage), Map.of( "next", "tools", "exit", END ))
  .addEdge("tools", "agent");

// Here we only save in-memory
var memory = new MemorySaver();

var compileConfig = CompileConfig.builder()
                    .checkpointSaver(memory)
                    .build();

var graph = workflow.compile(compileConfig);
```

## Interacting with the Agent

We can now interact with the agent. Between interactions you can get and update state.


```java
import org.bsc.langgraph4j.RunnableConfig;

var runnableConfig =  RunnableConfig.builder()
                .threadId("conversation-num-1" )
                .build();

Map<String,Object> inputs = Map.of( "messages", UserMessage.from("Hi I'm Bartolo.") );

var result = graph.stream( inputs, runnableConfig );

for( var r : result ) {
  System.out.println( r.node() );
  System.out.println( r.state() );
  
}
```

    2024-10-11 13:21:16 FINEST org.bsc.langgraph4j.CompiledGraph$AsyncNodeGenerator <init> START


    __START__
    {messages=[UserMessage { name = null contents = [TextContent { text = "Hi I'm Bartolo." }] }]}
    agent
    {messages=[UserMessage { name = null contents = [TextContent { text = "Hi I'm Bartolo." }] }, AiMessage { text = "Hello Bartolo! How can I assist you today?" toolExecutionRequests = null }]}
    __END__
    {messages=[UserMessage { name = null contents = [TextContent { text = "Hi I'm Bartolo." }] }, AiMessage { text = "Hello Bartolo! How can I assist you today?" toolExecutionRequests = null }]}


Here you can see the "`agent`" node ran, and then our edge returned `__END__` so the graph stopped execution there.

Let's check the current graph state.


```java
import org.bsc.langgraph4j.checkpoint.Checkpoint;

var checkpoint = graph.getState(runnableConfig);

System.out.println(checkpoint);

```

    StateSnapshot{node=agent, state={messages=[UserMessage { name = null contents = [TextContent { text = "Hi I'm Bartolo." }] }, AiMessage { text = "Hello Bartolo! How can I assist you today?" toolExecutionRequests = null }]}, config=RunnableConfig(threadId=conversation-num-1, checkPointId=7fd9e8fe-6d99-40ae-9b04-9d98a84dbd6b, nextNode=__END__, streamMode=VALUES)}


The current state is the two messages we've seen above, 1. the Human Message we sent in, 2. the AIMessage we got back from the model.

The next value is `__END__`  since the graph has terminated.


```java
checkpoint.getNext()
```




    __END__



## Let's get it to execute a tool

When we call the graph again, it will create a checkpoint after each internal execution step. Let's get it to run a tool, then look at the checkpoint.


```java

Map<String,Object> inputs = Map.of( "messages", UserMessage.from("What's the weather like in SF currently?") );

var state = graph.invoke( inputs, runnableConfig ).orElseThrow( () ->(new IllegalStateException()) ) ;

System.out.println( state.lastMessage().orElse(null) );
  
```

    2024-10-11 13:21:17 FINEST org.bsc.langgraph4j.CompiledGraph$AsyncNodeGenerator <init> START
    2024-10-11 13:21:18 FINEST org.bsc.langgraph4j.langchain4j.tool.ToolNode execute execute: execQuery


    AiMessage { text = "The current weather in San Francisco is cold, with a low of 13 degrees Celsius. If you need more details or have any other questions, feel free to ask!" toolExecutionRequests = null }


## Pause before tools

If you notice below, we now will add interruptBefore=["action"] - this means that before any actions are taken we pause. This is a great moment to allow the user to correct and update the state! This is very useful when you want to have a human-in-the-loop to validate (and potentially change) the action to take.



```java
var memory = new MemorySaver();

var compileConfig = CompileConfig.builder()
                    .checkpointSaver(memory)
                    .interruptBefore( "tools")
                    .build();

var graphWithInterrupt = workflow.compile(compileConfig);

var runnableConfig =  RunnableConfig.builder()
                .threadId("conversation-2" )
                .build();

Map<String,Object> inputs = Map.of( "messages", UserMessage.from("What's the weather like in SF currently?") );

var result = graphWithInterrupt.stream( inputs, runnableConfig );

for( var r : result ) {
  System.out.println( r.node() );
  System.out.println( r.state() );
  
}

```

    2024-10-11 13:21:20 FINEST org.bsc.langgraph4j.CompiledGraph$AsyncNodeGenerator <init> START


    __START__
    {messages=[UserMessage { name = null contents = [TextContent { text = "What's the weather like in SF currently?" }] }]}
    agent
    {messages=[UserMessage { name = null contents = [TextContent { text = "What's the weather like in SF currently?" }] }, AiMessage { text = null toolExecutionRequests = [ToolExecutionRequest { id = "call_cbfLB4QWv76KmI4gwTxzWEz6", name = "execQuery", arguments = "{"query":"current weather in San Francisco"}" }] }]}


## Get State

You can fetch the latest graph checkpoint using `getState(config)`.


```java
var snapshot = graphWithInterrupt.getState(runnableConfig);
snapshot.getNext();

```




    tools



## Resume

You can resume by running the graph with a null input. The checkpoint is loaded, and with no new inputs, it will execute as if no interrupt had occurred.


```java
var result = graphWithInterrupt.stream( null, snapshot.getConfig() );

for( var r : result ) {
  log.trace( "RESULT:\n{}\n{}", r.node(), r.state() );
}
```

    2024-10-11 13:21:21 FINEST org.bsc.langgraph4j.CompiledGraph$AsyncNodeGenerator <init> RESUME REQUEST
    2024-10-11 13:21:21 FINEST org.bsc.langgraph4j.CompiledGraph$AsyncNodeGenerator <init> RESUME FROM agent
    2024-10-11 13:21:21 FINEST org.bsc.langgraph4j.langchain4j.tool.ToolNode execute execute: execQuery
    2024-10-11 13:21:22 FINEST REPL.$JShell$97 do_it$ RESULT:
    tools
    {messages=[UserMessage { name = null contents = [TextContent { text = "What's the weather like in SF currently?" }] }, AiMessage { text = null toolExecutionRequests = [ToolExecutionRequest { id = "call_cbfLB4QWv76KmI4gwTxzWEz6", name = "execQuery", arguments = "{"query":"current weather in San Francisco"}" }] }, ToolExecutionResultMessage { id = "call_cbfLB4QWv76KmI4gwTxzWEz6" toolName = "execQuery" text = "Cold, with a low of 13 degrees" }]}
    2024-10-11 13:21:22 FINEST REPL.$JShell$97 do_it$ RESULT:
    agent
    {messages=[UserMessage { name = null contents = [TextContent { text = "What's the weather like in SF currently?" }] }, AiMessage { text = null toolExecutionRequests = [ToolExecutionRequest { id = "call_cbfLB4QWv76KmI4gwTxzWEz6", name = "execQuery", arguments = "{"query":"current weather in San Francisco"}" }] }, ToolExecutionResultMessage { id = "call_cbfLB4QWv76KmI4gwTxzWEz6" toolName = "execQuery" text = "Cold, with a low of 13 degrees" }, AiMessage { text = "The current weather in San Francisco is cold, with a low of 13 degrees Celsius." toolExecutionRequests = null }]}
    2024-10-11 13:21:22 FINEST REPL.$JShell$97 do_it$ RESULT:
    __END__
    {messages=[UserMessage { name = null contents = [TextContent { text = "What's the weather like in SF currently?" }] }, AiMessage { text = null toolExecutionRequests = [ToolExecutionRequest { id = "call_cbfLB4QWv76KmI4gwTxzWEz6", name = "execQuery", arguments = "{"query":"current weather in San Francisco"}" }] }, ToolExecutionResultMessage { id = "call_cbfLB4QWv76KmI4gwTxzWEz6" toolName = "execQuery" text = "Cold, with a low of 13 degrees" }, AiMessage { text = "The current weather in San Francisco is cold, with a low of 13 degrees Celsius." toolExecutionRequests = null }]}


## Check full history

Let's browse the history of this thread, from newest to oldest.




```java
RunnableConfig toReplay = null;
var states = graphWithInterrupt.getStateHistory(runnableConfig);
for( var state: states ) {
  
  log.trace( "\n---\n{}\n---",state);

  if (state.getState().messages().size() == 3) {
     toReplay = state.getConfig();
  }
}
if (toReplay==null) {
  throw new IllegalStateException("No state to replay");
}
```

    2024-10-11 13:21:22 FINEST REPL.$JShell$98 do_it$ 
    ---
    StateSnapshot{node=agent, state={messages=[UserMessage { name = null contents = [TextContent { text = "What's the weather like in SF currently?" }] }, AiMessage { text = null toolExecutionRequests = [ToolExecutionRequest { id = "call_cbfLB4QWv76KmI4gwTxzWEz6", name = "execQuery", arguments = "{"query":"current weather in San Francisco"}" }] }, ToolExecutionResultMessage { id = "call_cbfLB4QWv76KmI4gwTxzWEz6" toolName = "execQuery" text = "Cold, with a low of 13 degrees" }, AiMessage { text = "The current weather in San Francisco is cold, with a low of 13 degrees Celsius." toolExecutionRequests = null }]}, config=RunnableConfig(threadId=conversation-2, checkPointId=ede4f7e7-90d1-4228-8444-8bca38c00125, nextNode=__END__, streamMode=VALUES)}
    ---
    2024-10-11 13:21:22 FINEST REPL.$JShell$98 do_it$ 
    ---
    StateSnapshot{node=tools, state={messages=[UserMessage { name = null contents = [TextContent { text = "What's the weather like in SF currently?" }] }, AiMessage { text = null toolExecutionRequests = [ToolExecutionRequest { id = "call_cbfLB4QWv76KmI4gwTxzWEz6", name = "execQuery", arguments = "{"query":"current weather in San Francisco"}" }] }, ToolExecutionResultMessage { id = "call_cbfLB4QWv76KmI4gwTxzWEz6" toolName = "execQuery" text = "Cold, with a low of 13 degrees" }]}, config=RunnableConfig(threadId=conversation-2, checkPointId=e2e9fce2-4efe-4765-9455-d5a8a91d37db, nextNode=agent, streamMode=VALUES)}
    ---
    2024-10-11 13:21:22 FINEST REPL.$JShell$98 do_it$ 
    ---
    StateSnapshot{node=agent, state={messages=[UserMessage { name = null contents = [TextContent { text = "What's the weather like in SF currently?" }] }, AiMessage { text = null toolExecutionRequests = [ToolExecutionRequest { id = "call_cbfLB4QWv76KmI4gwTxzWEz6", name = "execQuery", arguments = "{"query":"current weather in San Francisco"}" }] }, ToolExecutionResultMessage { id = "call_cbfLB4QWv76KmI4gwTxzWEz6" toolName = "execQuery" text = "Cold, with a low of 13 degrees" }, AiMessage { text = "The current weather in San Francisco is cold, with a low of 13 degrees Celsius." toolExecutionRequests = null }]}, config=RunnableConfig(threadId=conversation-2, checkPointId=2737139d-ef86-42a5-bb6b-9f9b9c66ddf3, nextNode=tools, streamMode=VALUES)}
    ---
    2024-10-11 13:21:22 FINEST REPL.$JShell$98 do_it$ 
    ---
    StateSnapshot{node=__START__, state={messages=[UserMessage { name = null contents = [TextContent { text = "What's the weather like in SF currently?" }] }]}, config=RunnableConfig(threadId=conversation-2, checkPointId=5d4b5698-1cf7-4dbe-8c23-b55f37079e91, nextNode=agent, streamMode=VALUES)}
    ---


## Replay a past state

To replay from this place we just need to pass its config back to the agent.


```java
var results = graphWithInterrupt.stream(null, toReplay ); 

for( var r : results ) {
  log.trace( "RESULT:\n{}\n{}\n---", r.node(), r.state() );
}

```

    2024-10-11 13:21:22 FINEST org.bsc.langgraph4j.CompiledGraph$AsyncNodeGenerator <init> RESUME REQUEST
    2024-10-11 13:21:22 FINEST org.bsc.langgraph4j.CompiledGraph$AsyncNodeGenerator <init> RESUME FROM tools
    2024-10-11 13:21:23 FINEST REPL.$JShell$100 do_it$ RESULT:
    agent
    {messages=[UserMessage { name = null contents = [TextContent { text = "What's the weather like in SF currently?" }] }, AiMessage { text = null toolExecutionRequests = [ToolExecutionRequest { id = "call_cbfLB4QWv76KmI4gwTxzWEz6", name = "execQuery", arguments = "{"query":"current weather in San Francisco"}" }] }, ToolExecutionResultMessage { id = "call_cbfLB4QWv76KmI4gwTxzWEz6" toolName = "execQuery" text = "Cold, with a low of 13 degrees" }, AiMessage { text = "The current weather in San Francisco is cold, with a low of 13 degrees Celsius." toolExecutionRequests = null }]}
    ---
    2024-10-11 13:21:23 FINEST REPL.$JShell$100 do_it$ RESULT:
    __END__
    {messages=[UserMessage { name = null contents = [TextContent { text = "What's the weather like in SF currently?" }] }, AiMessage { text = null toolExecutionRequests = [ToolExecutionRequest { id = "call_cbfLB4QWv76KmI4gwTxzWEz6", name = "execQuery", arguments = "{"query":"current weather in San Francisco"}" }] }, ToolExecutionResultMessage { id = "call_cbfLB4QWv76KmI4gwTxzWEz6" toolName = "execQuery" text = "Cold, with a low of 13 degrees" }, AiMessage { text = "The current weather in San Francisco is cold, with a low of 13 degrees Celsius." toolExecutionRequests = null }]}
    ---
