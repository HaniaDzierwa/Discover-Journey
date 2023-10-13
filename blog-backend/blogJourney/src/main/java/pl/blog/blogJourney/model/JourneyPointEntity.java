package pl.blog.blogJourney.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import pl.blog.blogJourney.restControlers.model.JourneyPointResponse;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
@Table(name = "journey_point")
public class JourneyPointEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;

    private String name;
    private String description;
    private String locationName;
    private double coordinateX;
    private double coordinateY;


    @ManyToOne()
    @JoinColumn(name = "journey_id", referencedColumnName = "id")
    private JourneyEntity journeyId;

    @OneToOne(mappedBy = "journeyPoint")
    private PhotoEntity photoId;

    public JourneyPointResponse toJourneyPointResponse() {
        return new JourneyPointResponse(
                name,
                description,
                locationName,
                coordinateX,
                coordinateY
        );
    }

}
