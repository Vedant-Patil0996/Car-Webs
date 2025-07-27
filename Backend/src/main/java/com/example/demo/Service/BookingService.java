package com.example.demo.Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.Model.*;
import com.example.demo.Repository.BookingRepository;
import java.util.*;

@Service
public class BookingService {
    @Autowired
    private BookingRepository bookingRepository;

    public List<Bookings> getBookingsByUserId(Long userId) {
        return bookingRepository.findByUserId(userId);
    }
}
