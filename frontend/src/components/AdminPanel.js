import React, { useEffect, useState } from 'react';
import axios from 'axios';

function AdminPanel() {
  const [recipes, setRecipes] = useState([]);
  const [travels, setTravels] = useState([]);

  useEffect(() => {
    axios.get('/api/recipes').then(res => setRecipes(res.data));
    axios.get('/api/travel').then(res => setTravels(res.data));
  }, []);

  const deleteRecipe = (id) => {
    axios.delete(`/api/recipes/${id}`).then(() => setRecipes(prev => prev.filter(r => r.id !== id)));
  };

  const deleteTravel = (id) => {
    axios.delete(`/api/travel/${id}`).then(() => setTravels(prev => prev.filter(t => t.id !== id)));
  };

  return (
    <div className="container mt-4">
      <h2>Admin Panel</h2>
      <h4>Manage Recipes</h4>
      <ul className="list-group mb-4">
        {recipes.map(recipe => (
          <li key={recipe.id} className="list-group-item d-flex justify-content-between">
            {recipe.title}
            <button className="btn btn-danger btn-sm" onClick={() => deleteRecipe(recipe.id)}>Delete</button>
          </li>
        ))}
      </ul>
      <h4>Manage Travels</h4>
      <ul className="list-group">
        {travels.map(travel => (
          <li key={travel.id} className="list-group-item d-flex justify-content-between">
            {travel.title}
            <button className="btn btn-danger btn-sm" onClick={() => deleteTravel(travel.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AdminPanel;