import React, { useState, useEffect } from "react";
import { useOutletContext } from "react-router-dom";
import FilterForm from "./filterlist";
import { fetchCars } from "../Services/carService";
import "./findcar.css";
export default function FindCarPage() {
  const { searchQuery, showFilters } = useOutletContext();
  const [cars, setCars] = useState([]);

  const handleFilterSearch = async (filters) => {
    try {
      const data = await fetchCars(filters);
      setCars(data);
    } catch (err) {
      console.error("Error fetching cars:", err);
    }
  };

  useEffect(() => {
    if (searchQuery) {
      fetchCars({ query: searchQuery }).then(setCars);
    }
  }, [searchQuery]);

  return (
    <div style={{ padding: "20px" }}>
      {showFilters && (
        <div style={{ marginBottom: "20px" }}>
          <FilterForm onSearch={handleFilterSearch} />
        </div>
      )}

      <div className="car-results">
        {cars.length === 0 ? (
          <p>No cars found.</p>
        ) : (
          cars.map((car) => (
            <div key={car.id} className="car-card">
              <h3>{car.brand} - {car.model}</h3>
              <p>Year: {car.year} | ₹{car.price}</p>
              <p>Fuel: {car.fuelType} | Transmission: {car.transmission}</p>
              <p>Mileage: {car.mileage} km | Color: {car.color}</p>
              <p>Description: {car.description}</p>
              <p>Available: {car.available ? "✅ Yes" : "❌ No"}</p>
              <p>Listed By: {car.listedBy?.name || "Unknown"}</p>
              <button
                className="book-btn"
                onClick={() => handleBookNow(car.id)}
              >
                Book Now
              </button>
            </div>
            
          ))
        )}
      </div>
    </div>
  );
}
