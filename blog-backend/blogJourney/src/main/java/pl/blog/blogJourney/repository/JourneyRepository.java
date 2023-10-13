package pl.blog.blogJourney.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import pl.blog.blogJourney.model.JourneyEntity;

import java.util.List;
import java.util.Optional;
import java.util.Set;

@Repository
public interface JourneyRepository extends JpaRepository<JourneyEntity, Long> {
    Optional<JourneyEntity> findById(long id);

    @Query(value = """
            SELECT j.*
            FROM journey j
            LEFT JOIN journey_entity_journey_tags jt ON jt.journey_entity_id = j.id
            WHERE jt.tag IN :journeyTags
            GROUP BY j.id
            HAVING COUNT(DISTINCT tag) = :#{#journeyTags.size()}
            """,
            nativeQuery = true)
    List<JourneyEntity> findByJourneyTagsIn(@Param("journeyTags") Set<String> journeyTags);

    @Query(value = """
            SELECT j.*
            FROM journey j
            LEFT JOIN journey_entity_journey_tags jt ON jt.journey_entity_id = j.id
            WHERE jt.tag IS NULL
            """,
            nativeQuery = true)
    List<JourneyEntity> findJourneysWithoutTags();
}

