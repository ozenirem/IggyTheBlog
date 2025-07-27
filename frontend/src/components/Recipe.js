import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Recipe() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    axios.get('/api/recipes')
      .then(res => setRecipes(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="container mt-4">
      <h2>Recipes</h2>
      <ul className="list-group">
        {recipes.map(recipe => (
          <li key={recipe.id} className="list-group-item">
            <h5>{recipe.title}</h5>
            <p><strong>Type:</strong> {recipe.type}</p>
            <p><strong>Ingredients:</strong> {recipe.ingredients}</p>
            <p><strong>Instructions:</strong> {recipe.instructions}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Recipe;