package pl.blog.blogJourney.restControlers.model;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class JourneyResponse {
    private String name;
    private String description;
    private String month;

}
