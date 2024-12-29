package dev.langchain4j.image_to_diagram.actions;

import dev.langchain4j.image_to_diagram.DiagramCorrectionProcess;
import dev.langchain4j.image_to_diagram.ImageToDiagram;
import dev.langchain4j.model.openai.OpenAiChatModel;
import lombok.NonNull;
import lombok.extern.slf4j.Slf4j;
import org.bsc.langgraph4j.NodeOutput;
import org.bsc.langgraph4j.action.AsyncNodeAction;

import java.util.ArrayList;
import java.util.Map;
import java.util.concurrent.CompletableFuture;

/**
 * The EvaluateResult class is designed to evaluate and process results asynchronously,
 * specifically targeting the conversion of image data to diagram data using an AI chat model.
 * It implements the AsyncNodeAction interface, which allows for asynchronous processing
 * of a State object into a Map. The class leverages the OpenAiChatModel for its operations.
 */
@Slf4j
public class EvaluateResult implements AsyncNodeAction<ImageToDiagram.State> {

    /** Final field for storing an instance of OpenAiChatModel. */
    final OpenAiChatModel model;

    /**
     * Constructor for initializing the EvaluateResult with an OpenAiChatModel.
     *
     * @param model The instance of OpenAiChatModel to be used for processing.
     */
    public EvaluateResult(OpenAiChatModel model) {
        this.model = model;
    }

    /**
     * Overrides the apply method from AsyncNodeAction, which takes an ImageToDiagram.State object
     * and processes it asynchronously using a DiagramCorrectionProcess. The method returns a {@code CompletableFuture<Map<String, Object>>}
     * that represents the result of the asynchronous processing.
     *
     * @param state The ImageToDiagram.State object containing the data to be processed.
     * @return A {@code CompletableFuture<Map<String, Object>>} representing the outcome of the asynchronous operation.
     */
    @Override
    public CompletableFuture<Map<String, Object>> apply(ImageToDiagram.State state) {
        CompletableFuture<Map<String, Object>> result = new CompletableFuture<>();

        DiagramCorrectionProcess diagramCorrectionProcess = new DiagramCorrectionProcess();

        ArrayList<NodeOutput<ImageToDiagram.State>> list = new ArrayList<NodeOutput<ImageToDiagram.State>>();
        try {
            return diagramCorrectionProcess.workflow().compile().stream(state.data())
                    .collectAsync(list, (l,v) -> log.info(v.toString()))
                    .thenApply(v -> {
                        if (list.isEmpty()) {
                            throw new RuntimeException("no results");
                        }
                        NodeOutput<ImageToDiagram.State> last = list.get(list.size() - 1);
                        return last.state().data();
                    });
        } catch (Exception e) {
            result.completeExceptionally(e);
        }
        return result;
    }
}
