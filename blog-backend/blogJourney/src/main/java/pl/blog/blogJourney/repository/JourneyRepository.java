package pl.blog.blogJourney.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import pl.blog.blogJourney.entity.JourneyEntity;

public interface JourneyRepository extends JpaRepository <JourneyEntity,Long>{
}
