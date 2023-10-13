package pl.blog.blogJourney.services;

import pl.blog.blogJourney.restControlers.model.*;

import java.util.List;
import java.util.Set;


public interface JourneyService {
    Set<JourneyResponse> getAllJourneys();

    Set<JourneyResponse> getAllJourneysWithTag(Set<TagDto> tagsRequest);

    JourneyResponse createJourney(JourneyRequest journey);

    List<JourneyPointResponse> getJourneyPoints(long journeyId);

    PhotoResponse getJourneyPointPhoto(long journeyPointId);
}
