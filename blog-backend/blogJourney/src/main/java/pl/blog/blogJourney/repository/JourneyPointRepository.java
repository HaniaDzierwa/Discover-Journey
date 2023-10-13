package pl.blog.blogJourney.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import pl.blog.blogJourney.model.JourneyEntity;
import pl.blog.blogJourney.model.JourneyPointEntity;

import java.util.List;

public interface JourneyPointRepository extends JpaRepository<JourneyPointEntity, Long> {

    List<JourneyPointEntity> findByJourneyId(JourneyEntity journey);
}
