import React from "react";
import "./css/sidebar.css";
import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div className="sidebar">
      <h2 className="sidebar-logo">CarZone</h2>
      <nav className="sidebar-nav">
        <Link to="/find-car">Find Car</Link>
        <Link to="/rentals">My Rentals</Link>
        <Link to="/bookings">Bookings</Link>
        <Link to="/profile">Profile</Link>
        <Link to="/">Logout</Link>
      </nav>
    </div>
  );
}
export default Sidebar;
