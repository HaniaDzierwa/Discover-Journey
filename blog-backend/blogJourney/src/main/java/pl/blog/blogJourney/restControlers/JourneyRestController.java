package pl.blog.blogJourney.restControlers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import pl.blog.blogJourney.model.JourneyTag;
import pl.blog.blogJourney.restControlers.model.*;
import pl.blog.blogJourney.services.JourneyService;

import java.util.Arrays;
import java.util.List;
import java.util.Set;
import java.util.stream.Collectors;

@RestController
@RequestMapping("api/v1/journey")
@CrossOrigin(origins = "http://localhost:4200")

public class JourneyRestController {
    @Autowired
    JourneyService journeyService;

    @GetMapping("journeys")
    public Set<JourneyResponse> getAllJourneys() {
        return journeyService.getAllJourneys();
    }

    @PostMapping("journeys/create")
    public JourneyResponse createJourney(@RequestBody JourneyRequest journey) {
        return journeyService.createJourney(journey);
    }

    @PostMapping("journeys/tagsRequest")
    public Set<JourneyResponse> getAllJourneysWithTag(@RequestBody Set<TagDto> tagsRequest) {
        return journeyService.getAllJourneysWithTag(tagsRequest);
    }

    @GetMapping("tags")
    public List<String> getAllTags() {
        return Arrays.stream(JourneyTag.values())
                .map(JourneyTag::toString)
                .collect(Collectors.toList());
    }

    @GetMapping("journey/{journeyId}")
    public List<JourneyPointResponse> getJourneyPoints(@PathVariable(name = "journeyId") long journeyId) {
        return journeyService.getJourneyPoints(journeyId);
    }

    @GetMapping("journey-point-photo/{journeyPointId}")
    public PhotoResponse getJourneyPointPhoto(@RequestParam long journeyPointId) {
        return journeyService.getJourneyPointPhoto(journeyPointId);
    }
}