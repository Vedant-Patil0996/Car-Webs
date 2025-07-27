package com.example.demo.Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.*;

import com.example.demo.Model.*;
import com.example.demo.Repository.*;

@Service
public class RentalService {

    @Autowired
    private CarRepository carRepository;

    @Autowired
    private UserRepository userRepository;

    public List<Cars> getRentalByListedId(Long userId) {
        Optional<User> userOptional = userRepository.findById(userId);
        if (userOptional.isEmpty()) {
            return new ArrayList<>(); // or throw custom exception
        }

        User user = userOptional.get();
        return carRepository.findByListedBy(user); // pass User object
    }
}
