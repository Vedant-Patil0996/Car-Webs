package com.example.demo.Service;

import com.example.demo.Model.*;
import com.example.demo.Repository.*;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.*;
@Service
public class CarService {
    @Autowired
    private CarRepository cr;

    public List<Cars> getAllCars()
    {
        return cr.findAll();
    }
    public Cars getCarById(Long id) {
        return cr.findById(id).orElse(null);
    }

    public Cars saveCar(Cars car) {
        return cr.save(car);
    }

    public void deleteCar(Long id) {
        cr.deleteById(id);
    }

    public List<Cars> searchCars(String brand, String fuelType, Double minPrice, Double maxPrice) {
       return cr.findByBrandAndFuelTypeAndPriceBetween(brand, fuelType, minPrice, maxPrice);
    }
    public List<Cars> searchCars(String brand, String fuelType, Double minPrice, Double maxPrice, String model, Integer year) {
        return cr.findByFilters(
            brand == null ? "" : brand,
            fuelType == null ? "" : fuelType,
            minPrice == null ? 0 : minPrice,
            maxPrice == null ? Double.MAX_VALUE : maxPrice,
            model == null ? "" : model,
            year == null ? 0 : year
    );
    }

}
