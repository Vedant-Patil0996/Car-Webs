package com.example.demo.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

import com.example.demo.Model.Cars;
import com.example.demo.Service.RentalService;

@RestController
@RequestMapping("/api/rental")
@CrossOrigin(origins = "*")
public class RentalController {

    @Autowired
    private RentalService rentalService;

    @GetMapping("/user/{userid}")
    public ResponseEntity<List<Cars>> getRentalByUser(@PathVariable Long userid) {
        List<Cars> cars = rentalService.getRentalByListedId(userid);
        return ResponseEntity.ok(cars);
    }
}
