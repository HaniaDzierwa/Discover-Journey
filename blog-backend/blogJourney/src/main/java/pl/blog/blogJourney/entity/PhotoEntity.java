package pl.blog.blogJourney.entity;

import jakarta.persistence.*;

@Entity
@Table(name = "photo")
public class PhotoEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;
    private String type;
    private String filePath;

    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn( name ="journey_point_id" , referencedColumnName= "id")
    private JourneyPointEntity journeyPoint;

}

