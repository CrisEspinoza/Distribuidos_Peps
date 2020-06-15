package Distribuidos.Distribuidos.Dto;

import lombok.Builder;
import lombok.Data;

import java.util.Date;

@Data
@Builder
public class FormDto {
    private Long id;
    private String rut;
    private String name;
    private String adress;
    private String goal;
    private Date startDate;
    private Date finishDate;
}
