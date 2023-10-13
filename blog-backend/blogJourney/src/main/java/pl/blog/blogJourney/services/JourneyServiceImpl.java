package pl.blog.blogJourney.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import pl.blog.blogJourney.model.JourneyEntity;
import pl.blog.blogJourney.model.JourneyPointEntity;
import pl.blog.blogJourney.model.JourneyTag;
import pl.blog.blogJourney.model.PhotoEntity;
import pl.blog.blogJourney.repository.JourneyPointRepository;
import pl.blog.blogJourney.repository.JourneyRepository;
import pl.blog.blogJourney.repository.PhotoRepository;
import pl.blog.blogJourney.restControlers.model.*;

import java.util.List;
import java.util.Set;
import java.util.stream.Collectors;

@Service
public class JourneyServiceImpl implements JourneyService {
    @Autowired
    JourneyRepository journeyRepository;

    @Autowired
    JourneyPointRepository journeyPointRepository;

    @Autowired
    PhotoRepository photoRepository;

    @Override
    public Set<JourneyResponse> getAllJourneys() {
        return journeyRepository.findAll()
                .stream()
                .map(JourneyEntity::toJourneyResponse)
                .collect(Collectors.toSet());
    }

    @Override
    public Set<JourneyResponse> getAllJourneysWithTag(Set<TagDto> tagsRequest) {
        final var allTagsSetString = JourneyTag.getStringValues();

        final var tagsRequestsSetStrings = tagsRequest.stream()
                .map(TagDto::getName)
                .collect(Collectors.toSet());

        final var journeysEntities =
                !tagsRequestsSetStrings.isEmpty() && allTagsSetString.containsAll(tagsRequestsSetStrings)
                        ? journeyRepository.findByJourneyTagsIn(tagsRequestsSetStrings)
                        : journeyRepository.findJourneysWithoutTags();

        return journeysEntities
                .stream()
                .map(JourneyEntity::toJourneyResponse)
                .collect(Collectors.toSet());
    }

    @Override
    public JourneyResponse createJourney(JourneyRequest journey) {
        final var journeyEntity = journeyRepository.save(journey.toJourneyEntity());
        return journeyEntity.toJourneyResponse();
    }

    @Override
    public List<JourneyPointResponse> getJourneyPoints(long journeyId) {
        var journey = journeyRepository.findById(journeyId);

        return journey.map(
                        journeyEntity ->
                                journeyPointRepository.findByJourneyId(journeyEntity)
                                        .stream()
                                        .map(JourneyPointEntity::toJourneyPointResponse)
                                        .collect(Collectors.toList())
                )
                .orElse(List.of());
    }

    @Override
    public PhotoResponse getJourneyPointPhoto(long journeyPointId) {
        return photoRepository.findByJourneyPointId(journeyPointId)
                .map(PhotoEntity::toPhotoResponse)
                .orElse(null);
    }
}
