package pl.blog.blogJourney.startup;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;
import pl.blog.blogJourney.model.JourneyEntity;
import pl.blog.blogJourney.model.JourneyPointEntity;
import pl.blog.blogJourney.model.PhotoEntity;
import pl.blog.blogJourney.repository.*;
import java.util.Set;

@Component
public class TestDbDataInitializer {
    private final JourneyRepository journeyRepository;
    private final JourneyPointRepository journeyPointRepository;
    private final PhotoRepository photoRepository;
    private final boolean doSeedData;

    public TestDbDataInitializer(
            JourneyRepository journeyRepository,
            JourneyPointRepository journeyPointRepository,
            PhotoRepository photoRepository,
            @Value("${seed-data}") boolean doSeedData
    ) {
        this.journeyRepository = journeyRepository;
        this.journeyPointRepository = journeyPointRepository;
        this.photoRepository = photoRepository;
        this.doSeedData = doSeedData;
        if (doSeedData) {
            seedDbData();
        }
    }

    private void seedDbData() {
        var journeyEntity = JourneyEntity.builder()
                .name("Tour Chrzanów")
                .description("description of city")
                .month(Month.APRIL.name())
                .journeyTags(Set.of(JourneyTag.SPORT, JourneyTag.CHILL))
                .build();
        journeyRepository.save(journeyEntity);


        var journeyEntity2 = JourneyEntity.builder()
                .name("Tour Krakow")
                .description("description of city")
                .month(Month.MARCH.name())
                .journeyTags(Set.of(JourneyTag.ENTERTAINMENT))
                .build();
        journeyRepository.save(journeyEntity2);


        var pointEntity = JourneyPointEntity.builder()
                .name("House")
                .description("description of house")
                .journeyId(journeyEntity)
                .coordinateX(50.126917622981566)
                .coordinateY(19.399811381730178)
                .build();
        journeyPointRepository.save(pointEntity);


        var pointEntity2 = JourneyPointEntity.builder()
                .name("Lidl")
                .description("description of shop")
                .journeyId(journeyEntity)
                .coordinateX(50.135523553896874)
                .coordinateY(19.407900309908186)
                .build();
        journeyPointRepository.save(pointEntity2);


        var pointEntity3 = JourneyPointEntity.builder()
                .name("Market")
                .description("description of market")
                .journeyId(journeyEntity2)
                .coordinateX(50.0623222146786)
                .coordinateY(19.93676705247513)
                .build();
        journeyPointRepository.save(pointEntity3);


        var photoEntity = PhotoEntity.builder()
                .type(".jpg")
                .filePath("c/xxx/cdf/")
                .journeyPoint(pointEntity)
                .build();
        photoRepository.save(photoEntity);

        var photoEntity2 = PhotoEntity.builder()
                .type(".jpg")
                .filePath("c/xxx/dugft/")
                .journeyPoint(pointEntity2)
                .build();
        photoRepository.save(photoEntity2);


        var photoEntity3 = PhotoEntity.builder()
                .type(".png")
                .filePath("c/gguxx/chff/")
                .journeyPoint(pointEntity3)
                .build();
        photoRepository.save(photoEntity3);

    }
}
