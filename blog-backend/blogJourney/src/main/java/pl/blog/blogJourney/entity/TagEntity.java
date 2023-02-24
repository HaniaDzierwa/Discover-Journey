package pl.blog.blogJourney.entity;

import jakarta.persistence.*;

import java.util.Set;


@Entity
@Table(name = "tag")
public class TagEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String name;

    @ManyToMany
    @JoinTable(
            name = "journey_with_tag",
            joinColumns = @JoinColumn(name = "journey_id"),
            inverseJoinColumns = @JoinColumn(name = "tag_id")
    )
    Set<JourneyEntity> journeys;

}
