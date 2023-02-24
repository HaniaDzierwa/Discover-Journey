package pl.blog.blogJourney.entity;

import jakarta.persistence.*;
import pl.blog.blogJourney.repository.PhotoRepository;

@Entity
@Table(name = "journey_point")
public class JourneyPointEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name ="id")
    private Long id;

    private String name;
    private String description;
    private String locationName;
    private int coordinateX;
    private int coordinateY;


    @ManyToOne()
    @JoinColumn(name = "journey_id", referencedColumnName = "id")
    private JourneyEntity journeyId;

    @OneToOne(mappedBy = "journeyPoint")
    private PhotoEntity photoId;

}
