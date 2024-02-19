import { useState } from 'react';

import { searchRecipes } from '../lib/api';
import CardSearch from '../components/CardSearch';
import { useStateContext } from '../states/StateContext';



const RecipeSearch = () => {
  const [query, setQuery] = useState('');
  const [recipes, setRecipes] = useState([]);

  const handleSearch = async (event) => {
    event.preventDefault();
    try {
      const response = await searchRecipes(query);


      setRecipes(response.hits);
    } catch (error) {
      console.error('Error fetching recipes:', error);
    }
  };

  return (
    <>
      <div style={{ textAlign: 'center' }}>
        <h1>Recipe Search</h1>
        <div>
          <form onSubmit={handleSearch}>
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Enter your search query"
              style={{ width: '80%', padding: '10px', fontSize: '16px' }}
            />
            <button onClick={handleSearch}>Search</button>
          </form>
        </div>
      </div>
      <CardSearch recipes={recipes} />
    </>);
};

export default RecipeSearch;
