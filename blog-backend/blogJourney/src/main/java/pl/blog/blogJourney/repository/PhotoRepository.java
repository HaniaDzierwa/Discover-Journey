package pl.blog.blogJourney.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import pl.blog.blogJourney.model.PhotoEntity;



public interface PhotoRepository extends JpaRepository<PhotoEntity, Long> {

    @Query("SELECT p FROM PhotoEntity p WHERE p.journeyPoint.id = ?1")
    PhotoEntity findByJourneyPointId(long journeyPoint);
}
