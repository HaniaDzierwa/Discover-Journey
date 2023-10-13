package pl.blog.blogJourney.restControlers.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import pl.blog.blogJourney.model.JourneyEntity;
import pl.blog.blogJourney.model.JourneyTag;

import java.util.Set;

@Data
@AllArgsConstructor
public class JourneyRequest {
    private String name;
    private String description;
    private String month;
    private Set<JourneyTag> tags;

    public JourneyEntity toJourneyEntity() {
        return JourneyEntity.builder()
                .id(null)
                .name(name)
                .description(description)
                .month(month)
                .build();
    }
}