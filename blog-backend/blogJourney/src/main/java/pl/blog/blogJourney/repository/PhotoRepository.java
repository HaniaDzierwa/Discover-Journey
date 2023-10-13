package pl.blog.blogJourney.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import pl.blog.blogJourney.model.PhotoEntity;

import java.util.Optional;


public interface PhotoRepository extends JpaRepository<PhotoEntity, Long> {

    //@Query(value = "SELECT p FROM PhotoEntity p WHERE p.journeyPoint.id = :journeyPoint")
    Optional<PhotoEntity> findByJourneyPointId(long journeyPoint);
}
