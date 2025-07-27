package com.example.demo.Controller;

import java.util.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import com.example.demo.Service.*;
import com.example.demo.Model.*;
import org.springframework.http.ResponseEntity;
@RestController
@RequestMapping("/api/cars")
@CrossOrigin(origins = "*") // Allows frontend access
public class CarController {

    @Autowired
    private CarService carService;

    @GetMapping("/all")
    public List<Cars> getAllCarsWithoutFilters() {
        return carService.getAllCars(); // call repository.findAll()
    }

    @GetMapping
    public List<Cars> getAllCars(
        @RequestParam(required = false) String brand,
        @RequestParam(required = false) String fuelType,
        @RequestParam(required = false) Double minPrice,
        @RequestParam(required = false) Double maxPrice,
        @RequestParam(required = false) String model,
        @RequestParam(required = false) Integer year
    ) {
        return carService.searchCars(brand, fuelType, minPrice, maxPrice, model, year);
    }


    @GetMapping("/{id}")
    public ResponseEntity<Cars> getCarById(@PathVariable Long id) {
        Cars car = carService.getCarById(id);
        return (car != null) ? ResponseEntity.ok(car) : ResponseEntity.notFound().build();
    }

    @PostMapping("/add")
    public ResponseEntity<Cars> addCar(@RequestBody Cars car) {
        Cars savedCar = carService.saveCar(car);
        return ResponseEntity.ok(savedCar);
}
    
    @DeleteMapping("/{id}")
    public ResponseEntity<?> deleteCar(@PathVariable Long id) {
        carService.deleteCar(id);
        return ResponseEntity.ok().build();
    }
}
