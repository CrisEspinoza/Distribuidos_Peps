package Distribuidos.Distribuidos.Mapper;

import Distribuidos.Distribuidos.Dto.FormDto;
import Distribuidos.Distribuidos.Model.Form;
import org.springframework.beans.BeanUtils;
import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.List;

@Component
public class FormMapper {

    public FormDto ToFormDto(Form form) {
        FormDto historyDto = FormDto.builder().build();
        BeanUtils.copyProperties(form, historyDto);
        return historyDto;
    }

    public ArrayList<FormDto> generateFormDTOS(List<Form> forms) {
        int i;
        ArrayList<FormDto> usersDto = new ArrayList<>();
        for (i = 0; i < forms.size(); i++) {
            usersDto.add(ToFormDto(forms.get(i)));
        }
        return usersDto;
    }

    public Form ToForm(FormDto formDto) {
        Form form = new Form();
        BeanUtils.copyProperties(formDto, form);
        return form;
    }
}
