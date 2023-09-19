package pl.blog.blogJourney.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import pl.blog.blogJourney.model.JourneyEntity;
import pl.blog.blogJourney.model.JourneyTag;

import java.util.Set;

@Repository
public interface JourneyRepository extends JpaRepository <JourneyEntity,Long>{
     //@Query("SELECT j FROM JourneyEntity j WHERE :tags MEMBER OF j.tags")
     Set<JourneyEntity> findByJourneyTagsIn(Set<JourneyTag> tags);

     JourneyEntity findById (long id);




}

