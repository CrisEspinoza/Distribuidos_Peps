package Distribuidos.Distribuidos.Model;

import lombok.Data;

import javax.persistence.*;
import java.util.Date;

@Data
@Entity()
@Table(name = "form")
public class Form {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;

    @Column
    private String rut;

    @Column
    private String name;

    @Column
    private String adress;

    @Column
    @Lob
    private String goal;

    @Column
    private Date startDate;

    @Column
    private Date finishDate;
}
