package pl.blog.blogJourney.restControlers;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import pl.blog.blogJourney.model.PhotoEntity;
import pl.blog.blogJourney.repository.JourneyPointRepository;
import pl.blog.blogJourney.repository.JourneyRepository;
import pl.blog.blogJourney.repository.JourneyTag;
import pl.blog.blogJourney.repository.PhotoRepository;
import pl.blog.blogJourney.restControlers.model.JourneyPointResponse;
import pl.blog.blogJourney.restControlers.model.JourneyResponse;
import pl.blog.blogJourney.restControlers.model.PhotoResponse;
import pl.blog.blogJourney.restControlers.model.TagDto;

import java.util.Arrays;
import java.util.List;
import java.util.Set;
import java.util.stream.Collectors;

@RestController
@RequestMapping("api/v1/journey")
@CrossOrigin(origins = "http://localhost:4200")

public class JourneyRestControler {

    @Autowired
    JourneyRepository journeyRepository;

    @Autowired
    JourneyPointRepository journeyPointRepository;

    @Autowired
    PhotoRepository photoRepository;

    @GetMapping("journeys")
    public Set<JourneyResponse> getAllJourneys() {


        return journeyRepository.findAll()
                .stream()
                .map(p -> new JourneyResponse(p.getName(), p.getDescription(), p.getMonth(), p.getJourneyTags()))
                .collect(Collectors.toSet());
    }


    @GetMapping("journeys/{tagsRequest}")
    public Set<JourneyResponse> getAllJourneysWithTag(@PathVariable(name="tagsRequest") Set<TagDto> tagsRequest) {

        var tags = tagsRequest.stream().map(e -> JourneyTag.valueOf(e.getName())).collect(Collectors.toSet());
        //var a = journeyRepository.findByJourneyTagsIn(tags); -> powinni byc tak ale nie dziala trzeba zrobic query

        return journeyRepository.findAll()
                .stream()
                .filter(e ->
                        e.getJourneyTags().containsAll(tags))
                .map(p ->
                        new JourneyResponse(p.getName(), p.getDescription(), p.getMonth(), p.getJourneyTags()))
                .collect(Collectors.toSet());
    }

    @GetMapping("tags")
    public List<String> getAllTags() {
        return Arrays.stream(JourneyTag.values())
                .map(JourneyTag::toString)
                .collect(Collectors.toList());
    }

    @GetMapping("journey/{journeyId}")
    public List<JourneyPointResponse> getJourneyPoints(@PathVariable(name ="journeyId") long journeyId) {

        var journey = journeyRepository.findById(journeyId);
        return journeyPointRepository.findByJourneyId(journey)
                .stream()
                .map(
                        e -> JourneyPointResponse.builder()
                                .name(e.getName())
                                .coordinateX(e.getCoordinateX())
                                .coordinateY(e.getCoordinateY())
                                .description(e.getDescription())
                                .build())
                .collect(Collectors.toList());
    }

    @GetMapping("journey-point-photo/{journeyPointId}")
    public PhotoResponse getPhoto(@RequestParam long journeyPointId) {

        var photo = photoRepository.findByJourneyPointId(journeyPointId);
        return PhotoResponse.builder()
                .id(photo.getId())
                .type(photo.getType())
                .filePath(photo.getFilePath())
                .build();

    }
}