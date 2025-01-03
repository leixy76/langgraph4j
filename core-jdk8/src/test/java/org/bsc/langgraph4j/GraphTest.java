package org.bsc.langgraph4j;


import org.bsc.langgraph4j.state.AgentState;
import org.junit.jupiter.api.Test;

import java.util.Map;
import java.util.concurrent.CompletableFuture;

import static org.bsc.langgraph4j.StateGraph.END;
import static org.bsc.langgraph4j.StateGraph.START;
import static org.bsc.langgraph4j.utils.CollectionsUtils.mapOf;
import static org.junit.jupiter.api.Assertions.assertEquals;

public class GraphTest {

    CompletableFuture<Map<String,Object>> dummyNodeAction(AgentState state ) {
        return CompletableFuture.completedFuture(mapOf());
    }
    CompletableFuture<String> dummyCondition(AgentState state ) {
        return CompletableFuture.completedFuture("");
    }

    @Test
    public void testSimpleGraph() throws Exception {

        StateGraph<AgentState> workflow = new StateGraph<>(AgentState::new)
            .addNode("agent_3", this::dummyNodeAction)
            .addNode("agent_1", this::dummyNodeAction)
            .addNode("agent_2", this::dummyNodeAction)
            .addEdge( START, "agent_1")
            .addEdge("agent_2", END)
            .addEdge( "agent_1",  "agent_3")
            .addEdge( "agent_3",  "agent_2")
            ;

        CompiledGraph<AgentState> app = workflow.compile();

        GraphRepresentation result = app.getGraph(GraphRepresentation.Type.PLANTUML);
        assertEquals( GraphRepresentation.Type.PLANTUML, result.getType() );

        assertEquals( "@startuml Graph_Diagram\n" +
                "skinparam usecaseFontSize 14\n" +
                "skinparam usecaseStereotypeFontSize 12\n" +
                "skinparam hexagonFontSize 14\n" +
                "skinparam hexagonStereotypeFontSize 12\n" +
                "title \"Graph Diagram\"\n" +
                "footer\n" +
                "\n" +
                "powered by langgraph4j\n" +
                "end footer\n" +
                "circle start<<input>> as __START__\n" +
                "circle stop as __END__\n" +
                "usecase \"agent_3\"<<Node>>\n" +
                "usecase \"agent_1\"<<Node>>\n" +
                "usecase \"agent_2\"<<Node>>\n" +
                "\"__START__\" -down-> \"agent_1\"\n" +
                "\"agent_2\" -down-> \"__END__\"\n" +
                "\"agent_1\" -down-> \"agent_3\"\n" +
                "\"agent_3\" -down-> \"agent_2\"\n" +
                "@enduml\n", result.getContent() );

        // System.out.println( result.getContent() );
    }

    @Test
    public void testCorrectionProcessGraph() throws Exception {

        StateGraph<AgentState> workflow = new StateGraph<>(AgentState::new)
            .addNode( "evaluate_result", this::dummyNodeAction)
            .addNode( "agent_review", this::dummyNodeAction )
            .addEdge( "agent_review", "evaluate_result" )
            .addConditionalEdges(
                    "evaluate_result",
                    this::dummyCondition,
                    mapOf(  "OK", END,
                            "ERROR", "agent_review",
                            "UNKNOWN", END )
            )
            .addEdge( START, "evaluate_result")
                ;

        CompiledGraph<AgentState> app = workflow.compile();

        GraphRepresentation result = app.getGraph(GraphRepresentation.Type.PLANTUML);
        assertEquals( GraphRepresentation.Type.PLANTUML, result.getType() );

        assertEquals( "@startuml Graph_Diagram\n" +
                        "skinparam usecaseFontSize 14\n" +
                        "skinparam usecaseStereotypeFontSize 12\n" +
                        "skinparam hexagonFontSize 14\n" +
                        "skinparam hexagonStereotypeFontSize 12\n" +
                        "title \"Graph Diagram\"\n" +
                        "footer\n" +
                        "\n" +
                        "powered by langgraph4j\n" +
                        "end footer\n" +
                        "circle start<<input>> as __START__\n" +
                        "circle stop as __END__\n" +
                        "usecase \"evaluate_result\"<<Node>>\n" +
                        "usecase \"agent_review\"<<Node>>\n" +
                        "hexagon \"check state\" as condition1<<Condition>>\n" +
                        "\"__START__\" -down-> \"evaluate_result\"\n" +
                        "\"agent_review\" -down-> \"evaluate_result\"\n" +
                        "\"evaluate_result\" -down-> \"condition1\"\n" +
                        "\"condition1\" -down-> \"agent_review\": \"ERROR\"\n" +
                        "'\"evaluate_result\" -down-> \"agent_review\": \"ERROR\"\n" +
                        "\"condition1\" -down-> \"__END__\": \"UNKNOWN\"\n" +
                        "'\"evaluate_result\" -down-> \"__END__\": \"UNKNOWN\"\n" +
                        "\"condition1\" -down-> \"__END__\": \"OK\"\n" +
                        "'\"evaluate_result\" -down-> \"__END__\": \"OK\"\n" +
                        "@enduml\n",
                result.getContent() );

        // System.out.println( result.getContent() );


    }
    @Test
    public void GenerateAgentExecutorGraph() throws Exception {
        StateGraph<AgentState> workflow = new StateGraph<>(AgentState::new)
            .addNode( "agent", this::dummyNodeAction)
            .addNode( "action", this::dummyNodeAction)
            .addEdge(START, "agent")
            .addConditionalEdges(
                    "agent",
                    this::dummyCondition,
                    mapOf("continue", "action", "end", END)
            )
            .addEdge("action", "agent")
            ;

        CompiledGraph<AgentState> app = workflow.compile();

        GraphRepresentation result = app.getGraph(GraphRepresentation.Type.PLANTUML);
        assertEquals( GraphRepresentation.Type.PLANTUML, result.getType() );

        assertEquals( "@startuml Graph_Diagram\n" +
                        "skinparam usecaseFontSize 14\n" +
                        "skinparam usecaseStereotypeFontSize 12\n" +
                        "skinparam hexagonFontSize 14\n" +
                        "skinparam hexagonStereotypeFontSize 12\n" +
                        "title \"Graph Diagram\"\n" +
                        "footer\n" +
                        "\n" +
                        "powered by langgraph4j\n" +
                        "end footer\n" +
                        "circle start<<input>> as __START__\n" +
                        "circle stop as __END__\n" +
                        "usecase \"agent\"<<Node>>\n" +
                        "usecase \"action\"<<Node>>\n" +
                        "hexagon \"check state\" as condition1<<Condition>>\n" +
                        "\"__START__\" -down-> \"agent\"\n" +
                        "\"agent\" -down-> \"condition1\"\n" +
                        "\"condition1\" -down-> \"action\": \"continue\"\n" +
                        "'\"agent\" -down-> \"action\": \"continue\"\n" +
                        "\"condition1\" -down-> \"__END__\": \"end\"\n" +
                        "'\"agent\" -down-> \"__END__\": \"end\"\n" +
                        "\"action\" -down-> \"agent\"\n" +
                        "@enduml\n",
                result.getContent() );

        // System.out.println( result.getContent() );
    }

    @Test
    public void GenerateImageToDiagramGraph() throws Exception {
        StateGraph<AgentState> workflow = new StateGraph<>(AgentState::new)
            .addNode("agent_describer", this::dummyNodeAction )
            .addNode("agent_sequence_plantuml", this::dummyNodeAction )
            .addNode("agent_generic_plantuml", this::dummyNodeAction )
            .addConditionalEdges(
                    "agent_describer",
                    this::dummyCondition,
                    mapOf( "sequence", "agent_sequence_plantuml",
                            "generic", "agent_generic_plantuml" )
            )
            .addNode( "evaluate_result", this::dummyNodeAction )
            .addEdge("agent_sequence_plantuml", "evaluate_result")
            .addEdge("agent_generic_plantuml", "evaluate_result")
            .addEdge(START, "agent_describer")
            .addEdge("evaluate_result", END)
        ;

        CompiledGraph<AgentState> app = workflow.compile();

        GraphRepresentation result = app.getGraph( GraphRepresentation.Type.PLANTUML);
        assertEquals( GraphRepresentation.Type.PLANTUML, result.getType() );

        assertEquals( "@startuml Graph_Diagram\n" +
                        "skinparam usecaseFontSize 14\n" +
                        "skinparam usecaseStereotypeFontSize 12\n" +
                        "skinparam hexagonFontSize 14\n" +
                        "skinparam hexagonStereotypeFontSize 12\n" +
                        "title \"Graph Diagram\"\n" +
                        "footer\n" +
                        "\n" +
                        "powered by langgraph4j\n" +
                        "end footer\n" +
                        "circle start<<input>> as __START__\n" +
                        "circle stop as __END__\n" +
                        "usecase \"agent_describer\"<<Node>>\n" +
                        "usecase \"agent_sequence_plantuml\"<<Node>>\n" +
                        "usecase \"agent_generic_plantuml\"<<Node>>\n" +
                        "usecase \"evaluate_result\"<<Node>>\n" +
                        "hexagon \"check state\" as condition1<<Condition>>\n" +
                        "\"__START__\" -down-> \"agent_describer\"\n" +
                        "\"agent_describer\" -down-> \"condition1\"\n" +
                        "\"condition1\" -down-> \"agent_sequence_plantuml\": \"sequence\"\n" +
                        "'\"agent_describer\" -down-> \"agent_sequence_plantuml\": \"sequence\"\n" +
                        "\"condition1\" -down-> \"agent_generic_plantuml\": \"generic\"\n" +
                        "'\"agent_describer\" -down-> \"agent_generic_plantuml\": \"generic\"\n" +
                        "\"agent_sequence_plantuml\" -down-> \"evaluate_result\"\n" +
                        "\"agent_generic_plantuml\" -down-> \"evaluate_result\"\n" +
                        "\"evaluate_result\" -down-> \"__END__\"\n" +
                        "@enduml\n",
                result.getContent() );

        result = app.getGraph( GraphRepresentation.Type.MERMAID, "Graph Diagram", false );
        assertEquals( GraphRepresentation.Type.MERMAID, result.getType() );

        // System.out.println( result.getContent() );

        assertEquals( "---\n" +
                        "title: Graph Diagram\n" +
                        "---\n" +
                        "flowchart TD\n" +
                        "\t__START__((start))\n" +
                        "\t__END__((stop))\n" +
                        "\tagent_describer(\"agent_describer\")\n" +
                        "\tagent_sequence_plantuml(\"agent_sequence_plantuml\")\n" +
                        "\tagent_generic_plantuml(\"agent_generic_plantuml\")\n" +
                        "\tevaluate_result(\"evaluate_result\")\n" +
                        "\t%%\tcondition1{\"check state\"}\n" +
                        "\t__START__:::__START__ --> agent_describer:::agent_describer\n" +
                        "\t%%\tagent_describer:::agent_describer --> condition1:::condition1\n" +
                        "\t%%\tcondition1:::condition1 -->|sequence| agent_sequence_plantuml:::agent_sequence_plantuml\n" +
                        "\tagent_describer:::agent_describer -->|sequence| agent_sequence_plantuml:::agent_sequence_plantuml\n" +
                        "\t%%\tcondition1:::condition1 -->|generic| agent_generic_plantuml:::agent_generic_plantuml\n" +
                        "\tagent_describer:::agent_describer -->|generic| agent_generic_plantuml:::agent_generic_plantuml\n" +
                        "\tagent_sequence_plantuml:::agent_sequence_plantuml --> evaluate_result:::evaluate_result\n" +
                        "\tagent_generic_plantuml:::agent_generic_plantuml --> evaluate_result:::evaluate_result\n" +
                        "\tevaluate_result:::evaluate_result --> __END__:::__END__\n" +
                        "\n" +
                        "\tclassDef ___START__ fill:black,stroke-width:1px,font-size:xx-small;\n" +
                        "\tclassDef ___END__ fill:black,stroke-width:1px,font-size:xx-small;\n",
                result.getContent() );
    }
}
