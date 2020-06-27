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
    private String address;
    private String reason;
    private Date startDate;
    private Date finishDate;
}
