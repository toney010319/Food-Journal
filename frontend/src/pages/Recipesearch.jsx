import React, { useState } from 'react';
import axios from 'axios';

const RecipeSearch = () => {
  const [query, setQuery] = useState('');
  const [recipes, setRecipes] = useState([]);

  const handleSearch = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.get(`http://localhost:3000/api/recipe`, { params: {query} });
      // Extract only image and label from each recipe
      const filteredRecipes = response.data.hits.map(hit => ({
        image: hit.recipe.image,
        label: hit.recipe.label
      }));
      setRecipes(filteredRecipes);
    } catch (error) {
      console.error('Error fetching recipes:', error);
    }
  };

  return (
    <div style={{ textAlign: 'center' }}>
      <h1>Recipe Search</h1>
      <div>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Enter your search query"
          style={{ width: '80%', padding: '10px', fontSize: '16px' }}
        />
        <button onClick={handleSearch}>Search</button>
      </div>
      <div>
        {recipes.map((recipe, index) => (
          <div key={index}>
            <h3>{recipe.label}</h3>
            <img src={recipe.image} alt={recipe.label} style={{ maxWidth: '200px' }} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecipeSearch;
