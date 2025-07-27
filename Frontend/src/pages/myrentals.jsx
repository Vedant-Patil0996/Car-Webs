// src/pages/MyRentalsPage.jsx
import React, { useEffect, useState } from "react";
import { fetchMyRentals } from "../Services/carService";
import { createRental } from "../Services/carService"; // We'll define this
export default function MyRentalsPage() {
  const [rentals, setRentals] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const userId = localStorage.getItem("userId");
      if (!userId) {
        setError("User not logged in.");
        return;
      }

      try {
        const data = await fetchMyRentals(userId);
        setRentals(data);
      } catch (err) {
        console.error(err);
        setError("Failed to load your listed cars. Please try again later.");
      }
    };

    fetchData();
  }, []);
  const [newCar, setNewCar] = useState({
    brand: "",
    model: "",
    year: "",
    fuelType: "",
    mileage: "",
    price: "",
    color: "",
    transmission: "",
    description: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewCar((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const userId = localStorage.getItem("userId");

    try {
      const payload = { 
        ...newCar, 
        listedBy: { id: parseInt(userId) } 
      };

      await createRental(payload);
      alert("Car listed successfully!");
      window.location.reload(); // to refresh the rentals list
    } catch (err) {
      console.error(err);
      alert("Failed to list car.");
    }
  };

  return (
    <div className="rental-page">
      <form onSubmit={handleSubmit} className="rental-form">
        <h3>Add a New Car</h3>
        <input name="brand" placeholder="Brand" onChange={handleChange} required />
        <input name="model" placeholder="Model" onChange={handleChange} required />
        <input name="year" placeholder="Year" type="number" onChange={handleChange} required />
        <input name="fuelType" placeholder="Fuel Type" onChange={handleChange} required />
        <input name="mileage" placeholder="Mileage" type="number" onChange={handleChange} required />
        <input name="price" placeholder="Price" type="number" onChange={handleChange} required />
        <input name="color" placeholder="Color" onChange={handleChange} />
        <input name="transmission" placeholder="Transmission" onChange={handleChange} />
        <textarea name="description" placeholder="Description" onChange={handleChange}></textarea>
        <button type="submit">List Car</button>
      </form>

      <h2>My Listed Cars</h2>

      {error && <p className="error">{error}</p>}

      {rentals.length === 0 && !error ? (
        <p>You haven’t listed any cars yet.</p>
      ) : (
        <div className="car-results">
          {rentals.map((car) => (
            <div key={car.id} className="car-card">
              <h3>{car.brand} - {car.model}</h3>
              <p><strong>Year:</strong> {car.year}</p>
              <p><strong>Fuel:</strong> {car.fuelType}</p>
              <p><strong>Price:</strong> ₹{car.price}</p>
              <p>
                <strong>Status:</strong>{" "}
                <span style={{ color: car.bookedBy ? "orange" : "green" }}>
                  {car.bookedBy ? `Booked by ${car.bookedBy.name}` : "Available"}
                </span>
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
