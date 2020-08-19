package Distribuidos.Distribuidos.Controller;

import Distribuidos.Distribuidos.Dto.FormDto;
import Distribuidos.Distribuidos.Dto.ValidForm;
import Distribuidos.Distribuidos.Service.FormService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;

@CrossOrigin
@RestController
@RequestMapping("/form")
public class FormController {

    @Autowired
    private FormService formService;

    @GetMapping(value = "")
    @ResponseBody
    public ResponseEntity<ArrayList<FormDto>> getAllForm() {
        try {
            return ResponseEntity.ok(formService.getAllForm());
        } catch (Exception e) {
            return ResponseEntity.badRequest().build();
        }
    }

    @GetMapping(value = "/{id}")
    @ResponseBody
    public ResponseEntity<FormDto> getAllFormById(@PathVariable("id") Long id_form) {
        try {
            return ResponseEntity.ok(formService.getFormById(id_form));
        } catch (Exception e) {
            return ResponseEntity.badRequest().build();
        }
    }

    @GetMapping(value = "/{id}/valid")
    @ResponseBody
    public ResponseEntity<ValidForm> validForm(@PathVariable("id") Long id_form) {
        try {
            return ResponseEntity.ok(formService.validForm(id_form));
        } catch (Exception e) {
            return ResponseEntity.status(404).build();
        }
    }

    @PostMapping(value = "")
    @ResponseBody
    public ResponseEntity<FormDto> createForm(@RequestBody FormDto formDto) {
        try {
            return ResponseEntity.ok(formService.createForm(formDto));
        } catch (Exception e) {
            return ResponseEntity.badRequest().build();
        }
    }

    @PutMapping(value = "/{id}")
    @ResponseBody
    public ResponseEntity<FormDto> updateForm(@PathVariable("id") Long id_form,@RequestBody FormDto formDto) {
        try {
            return ResponseEntity.ok(formService.updateForm(id_form,formDto));
        } catch (Exception e) {
            return ResponseEntity.badRequest().build();
        }
    }

    @DeleteMapping(value = "/{id}")
    @ResponseBody
    public ResponseEntity deleteForm(@PathVariable("id") Long id_form) {
        try {
            formService.deleteForm(id_form);
            return ResponseEntity.ok().build();
        } catch (Exception e) {
            return ResponseEntity.badRequest().build();
        }
    }
}
