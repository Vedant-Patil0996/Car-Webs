import React from "react";
import Carousel from "../components/carslide";
import { useNavigate } from "react-router-dom";

const LandingPage = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/login");
  };

  return (
    <div style={{ textAlign: "center" }}>
      <h1>Welcome to CarZone</h1>
      <Carousel />
      <button
        onClick={handleLogin}
        style={{
          marginTop: "30px",
          padding: "10px 20px",
          fontSize: "18px",
          backgroundColor: "#007bff",
          color: "white",
          border: "none",
          borderRadius: "8px",
          cursor: "pointer"
        }}
      >
        Login
      </button>
    </div>
  );
};

export default LandingPage;
