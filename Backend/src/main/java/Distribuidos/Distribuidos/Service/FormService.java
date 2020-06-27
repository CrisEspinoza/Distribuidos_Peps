package Distribuidos.Distribuidos.Service;

import Distribuidos.Distribuidos.Dao.FormDao;
import Distribuidos.Distribuidos.Dto.FormDto;
import Distribuidos.Distribuidos.Dto.ValidForm;
import Distribuidos.Distribuidos.Mapper.FormMapper;
import Distribuidos.Distribuidos.Model.Form;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Calendar;
import java.util.Date;
import java.util.List;

@Service
public class FormService {

    @Autowired
    private FormMapper formMapper;

    @Autowired
    private FormDao formDao;

    public FormDto createForm(FormDto formDto) {
        Calendar calendar = Calendar.getInstance();
        Form form = formMapper.ToForm(formDto);
        form.setStartDate(new Date());
        calendar.setTime(form.getStartDate());
        calendar.add(Calendar.DAY_OF_WEEK,1);
        form.setFinishDate(calendar.getTime());
        formDao.save(form);
        return formMapper.ToFormDto(form);
    }

    public FormDto updateForm(Long id_form, FormDto formDto) {
        Form form = formMapper.ToForm(formDto);
        form.setId(id_form);
        formDao.save(form);
        return formMapper.ToFormDto(form);
    }

    public ArrayList<FormDto> getAllForm (){
        return formMapper.generateFormDTOS(formDao.findAll());
    }

    public FormDto getFormById (Long id_form){
        return formMapper.ToFormDto(formDao.findById(id_form).get());
    }

    public void deleteForm (Long id_form){
        formDao.delete(formDao.findById(id_form).get());
    }

    public ValidForm validForm (Long id_form){
        ValidForm validForm = ValidForm.builder().build();
        Form form = formDao.findById(id_form).get();
        if (form.getFinishDate().compareTo(new Date()) > 0)
            validForm.setValid(Boolean.TRUE);
        else
            validForm.setValid(Boolean.FALSE);
        return validForm;
    }
}
