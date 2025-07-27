import React, { useEffect, useState } from "react";
import { fetchMyBookings } from "../Services/carService";

export default function BookingPage() {
  const [bookings, setBookings] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchMyBookings();
        setBookings(data);
      } catch (err) {
        console.error(err);
        setError("Failed to load bookings. Please try again later.");
      }
    };

    fetchData();
  }, []);

  return (
    <div className="booking-page">
      <h2>My Bookings</h2>

      {error && <p className="error">{error}</p>}

      {bookings.length === 0 && !error ? (
        <p>You haven’t booked any cars yet.</p>
      ) : (
        <div className="car-results">
          {bookings.map((booking) => (
            <div key={booking.id} className="car-card">
              <h3>{booking.car.brand} - {booking.car.model}</h3>
              <p><strong>Start:</strong> {new Date(booking.startDate).toLocaleDateString()}</p>
              <p><strong>End:</strong> {new Date(booking.endDate).toLocaleDateString()}</p>
              <p>
                <strong>Status:</strong>{" "}
                <span style={{ color: booking.status === "booked" ? "green" : "red" }}>
                  {booking.status}
                </span>
              </p>
              <p><strong>Price:</strong> ₹{booking.car.price}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
