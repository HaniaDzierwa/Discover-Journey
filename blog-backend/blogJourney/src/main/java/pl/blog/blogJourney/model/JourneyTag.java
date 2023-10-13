package pl.blog.blogJourney.model;

import java.util.Arrays;
import java.util.Set;
import java.util.stream.Collectors;

public enum JourneyTag {
    LEISURE,
    ADVENTURE,
    RELIGIOUS,
    CULINARY,
    SPORT,
    EXTREME_SPORT,
    KIDS,
    ITINERARY,
    CHILL,
    ENTERTAINMENT;

    public static Set<String> getStringValues() {
        return Arrays.stream(JourneyTag.values())
                .map(Enum::toString)
                .collect(Collectors.toSet());
    }
}