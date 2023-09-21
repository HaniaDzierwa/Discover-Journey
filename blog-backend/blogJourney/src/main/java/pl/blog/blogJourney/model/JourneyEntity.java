package pl.blog.blogJourney.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Set;


@Entity
@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "journey")
public class JourneyEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="id")
    private Long id;
    private String name;
    private String description;
    private String month;


  @OneToMany(mappedBy = "journeyId")
  Set<JourneyPointEntity> journeyPoints;

  @ElementCollection(targetClass = JourneyTag.class)
  @Column(name = "tag")
  @Enumerated(EnumType.STRING)
  Set<JourneyTag> journeyTags;

}
