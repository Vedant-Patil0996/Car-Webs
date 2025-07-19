package com.example.demo.Repository;

import com.example.demo.Model.*;
import org.springframework.stereotype.Repository;
import org.springframework.data.jpa.repository.JpaRepository;

@Repository
public interface BookingRepository extends JpaRepository<Bookings,Long>
{

}
