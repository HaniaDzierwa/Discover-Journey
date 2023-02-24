package pl.blog.blogJourney.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import java.util.Set;


@Entity
@Data
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

  @ManyToMany (mappedBy = "journeys")
  Set<TagEntity> tags;

}
