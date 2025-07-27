import React from 'react';
import './Home.css';
import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();

  return (
    <div className="split-screen">
      <div className="half travel" onClick={() => navigate('/travel')}>
        <div className="overlay">
          <h2>Explore Travels</h2>
        </div>
      </div>
      <div className="half recipe" onClick={() => navigate('/recipes')}>
        <div className="overlay">
          <h2>Discover Recipes</h2>
        </div>
      </div>
    </div>
  );
}

export default Home;