package pl.blog.blogJourney.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
@Table(name = "photo")
public class PhotoEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;
    private String type;
    private String filePath;

    @OneToOne()
    @JoinColumn( name ="journey_point_id" , referencedColumnName= "id")
    private JourneyPointEntity journeyPoint;

}

