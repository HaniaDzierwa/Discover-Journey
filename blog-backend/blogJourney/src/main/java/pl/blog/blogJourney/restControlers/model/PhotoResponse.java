package pl.blog.blogJourney.restControlers.model;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;

@Data
@AllArgsConstructor
@Builder
public class PhotoResponse {
    private Long id;
    private String type;
    private String filePath;
}
