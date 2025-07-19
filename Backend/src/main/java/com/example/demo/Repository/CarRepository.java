package com.example.demo.Repository;

import com.example.demo.Model.*;
import org.springframework.stereotype.Repository;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.*;
@Repository
public interface CarRepository extends JpaRepository<Cars,Long>
{
    List<Cars> findByBrandAndFuelTypeAndPriceBetween(String brand, String fuelType, Double minPrice, Double maxPrice);
    @Query("SELECT c FROM Cars c WHERE " +
       "(:brand = '' OR c.brand LIKE %:brand%) AND " +
       "(:fuelType = '' OR c.fuelType LIKE %:fuelType%) AND " +
       "(:model = '' OR c.model LIKE %:model%) AND " +
       "(:year = 0 OR c.year = :year) AND " +
       "c.price BETWEEN :minPrice AND :maxPrice")
    List<Cars> findByFilters(@Param("brand") String brand,
                            @Param("fuelType") String fuelType,
                            @Param("minPrice") Double minPrice,
                            @Param("maxPrice") Double maxPrice,
                            @Param("model") String model,
                            @Param("year") Integer year);

}
