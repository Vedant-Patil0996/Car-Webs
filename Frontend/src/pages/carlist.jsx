import React, { useState } from "react";
import { fetchCars } from "../Services/carService";
import FilterForm from "./filterlist";

function CarListPage() {
  const [cars, setCars] = useState([]);

  const handleSearch = async (filters) => {
    try {
      const data = await fetchCars(filters);
      setCars(data);
    } catch (err) {
      console.error("Error fetching cars:", err);
    }
  };

  return (
    <div className="container">
      <h2>Select Your Car</h2>
      
      <FilterForm onSearch={handleSearch} />

      <div className="car-results">
        {cars.length === 0 && (
          <p style={{ marginTop: "1rem", color: "#555" }}>No cars found. Try adjusting filters.</p>
        )}

        {cars.map((car) => (
          <div key={car.id} className="car-card">
            <h3>{car.brand} - {car.model} ({car.year})</h3>
            <p><strong>Fuel:</strong> {car.fuelType}</p>
            <p><strong>Transmission:</strong> {car.transmission}</p>
            <p><strong>Color:</strong> {car.color}</p>
            <p><strong>Mileage:</strong> {car.mileage} km</p>
            <p><strong>Description:</strong> {car.description}</p>
            <p><strong>Available:</strong> {car.available ? "✅ Yes" : "❌ No"}</p>
            <p><strong>Price:</strong> ₹{car.price}</p>
            <p><strong>Listed By:</strong> {car.listedBy?.name || "Unknown"}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CarListPage;
