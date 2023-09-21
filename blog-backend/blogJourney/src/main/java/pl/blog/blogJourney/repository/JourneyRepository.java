package pl.blog.blogJourney.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import pl.blog.blogJourney.model.JourneyEntity;


@Repository
public interface JourneyRepository extends JpaRepository<JourneyEntity, Long> {
    JourneyEntity findById(long id);
}

