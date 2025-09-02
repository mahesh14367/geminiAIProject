package or.ai.geminiai;

import lombok.AllArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@CrossOrigin
@AllArgsConstructor
@RequestMapping("/api")
public class AIController {


    private final QnAService qnAService;

    @PostMapping("/ans")
    public ResponseEntity<String> askQuestions(@RequestBody Map<String, String> payload) {
        String question = payload.get("question");
        String answer = qnAService.getAnswer(question);
        return ResponseEntity.ok(answer);
    }
}
