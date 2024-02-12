import { useState } from 'react';
import axios from 'axios';



const RecipeSearch = () => {
  const [query, setQuery] = useState('');
  const [recipes, setRecipes] = useState([]);

  const handleSearch = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.get(`http://localhost:3000/api/recipe`, { params: { query } });

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
    <>
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
      </div>
      <div className='flex flex-row flex-wrap ml-5    justify-start items-stretch '>
        {recipes.map((recipe, index) => (

          <div key={index} className='flex  flex-col h-full w-full max-w-sm m-5     border-2 rounded-3xl border-black text-center   ' >

            <div className='p-8 pb-20 bg-white rounded-t-3xl  ' ><img src={recipe.image} className='rounded-2xl ' /></div>
            <div className='bg-green-400  p-8  flex justify-between items-center flex-col   min-h-[15rem] -mt-10 rounded-3xl font-bold text-2xl  '>{recipe.label}
              <div className='text-base pt-5 flex gap-10 items-end '>
                <button className='bg-[#ffcd29] p-3 rounded-3xl'>View Details</button>
                <button className='bg-[#ffcd29] p-3  rounded-3xl ' >Add to Menu</button>
              </div>
            </div>
          </div>


        ))}

      </div>
    </>);
};

export default RecipeSearch;
