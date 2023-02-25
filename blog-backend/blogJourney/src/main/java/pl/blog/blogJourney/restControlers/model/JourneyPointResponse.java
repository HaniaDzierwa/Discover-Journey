package pl.blog.blogJourney.restControlers.model;


import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;

@Data
@AllArgsConstructor
@Builder
public class JourneyPointResponse {

    private String name;
    private String description;
    private String locationName;
    private double coordinateX;
    private double coordinateY;
}
