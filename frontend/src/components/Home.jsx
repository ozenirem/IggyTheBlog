import React from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";
import travelImage from "./assets/travel-illustration.jpeg";
import cookingImage from "./assets/cooking-illustration.jpg";

function Home() {
  const navigate = useNavigate();

  return (
    <div className="home-root">

      <div className="top-bar">
        <div className="nav-buttons">
          <button onClick={() => navigate("/info")}>Information</button>
          <button onClick={() => navigate("/whoami")}>Who am I?</button>
          <button className="login-btn" onClick={() => navigate("/login")}>Login</button>
        </div>
      </div>


      <div className="split-container">
        <div
          className="split-section left"
          style={{ backgroundImage: `url(${travelImage})` }}
          onClick={() => navigate("/travel")}
        >
          <h2>Travel</h2>
        </div>
        <div
          className="split-section right"
          style={{ backgroundImage: `url(${cookingImage})` }}
          onClick={() => navigate("/recipes")}
        >
          <h2>Recipes</h2>
        </div>
      </div>
    </div>
  );
}

export default Home;