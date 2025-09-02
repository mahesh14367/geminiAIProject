package or.ai.geminiai;


import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.reactive.function.client.WebClient;

import java.util.HashMap;
import java.util.Map;

@Service
public class QnAService {

    @Value("${gemini.api.url}")
    private String geminiApiUrl;

    @Value("${gemini.api.key}")
    private String geminiApiKey;

    private final WebClient webClient;

    public QnAService(WebClient.Builder webClient) {
        this.webClient = webClient.build();
    }

    public String getAnswer(String question) {

        Map<String,Object> requestBody = Map.of("contents",new Object[]{Map.of("parts",new Object[]{Map.of("text",question)})});

        return webClient.post()// this method initiate the process of building the HTTP Post request.it tells the webclient that the operation will send the data to the server.
                .uri(geminiApiUrl+geminiApiKey)//this specifies the destination url for the request.it combines the base API endpoint url with the unique api key.
                .header("Content-Type","application/json")//this header method tells the server that i'm sending the content in the body of this request in the json format
                .bodyValue(requestBody)//this bodyValue method converts the requestBody java object into the json format as specified in the header.
                .retrieve()//this the command to execute the request.it sends the constructed request to the server and prepares to receive the response.
                .bodyToMono(String.class)//this method will only takes the chunk of bytes from the response body and aggregates the collected byte buffers into one complete byte array and then it uses the delegate(HTTPMessageConverter) that converts from bytes into the specified type(here String in this case).after conversion the String is placed into the mono<String>(a mono<String> is like a box that will eventually give you one piece of data,here in this case is String) and mono will not provide String until we subscribe to it.
                .block();
    }
}


//{
//        "contents": [
//        {
//        "parts": [
//        {
//        "text": "when is your birthday"
//        }
//        ]
//        }
//        ]
// }