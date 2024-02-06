// RecipeSearch.jsx

import React, { useState } from 'react';
import axios from 'axios';

const RecipeSearch = () => {
  const [query, setQuery] = useState('');
  const [recipes, setRecipes] = useState([]);

  const handleSearch = async () => {
    try {
      const response = await axios.get(`/api/recipes?query=${query}`);
      setRecipes(response.data.hits);
    } catch (error) {
      console.error('Error fetching recipes:', error);
    }
  };

  return (
    <div>
      <h1>Recipe Search</h1>
      <div>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Enter your search query"
        />
        <button onClick={handleSearch}>Search</button>
      </div>
      <div>
        {recipes.map((recipe) => (
          <div key={recipe.recipe.uri}>
            <h3>{recipe.recipe.label}</h3>
            <p>URL: {recipe.recipe.url}</p>
            {/* Display other recipe details as needed */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecipeSearch;
