package pl.blog.blogJourney.restControlers.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.NonNull;

@AllArgsConstructor
@Data
@NoArgsConstructor
public class TagDto {
    @NonNull
    private String name;
}
