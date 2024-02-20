import { useState } from "react";
import FormAction from "../components/FormAction";
import { searchRecipes } from "../lib/api";
import CardSearch from "../components/CardSearch";

const RecipeSearch = () => {
  const [query, setQuery] = useState("");
  const [recipes, setRecipes] = useState([]);

  const handleSearch = async (event) => {
    event.preventDefault();
    try {
      const response = await searchRecipes(query);

      setRecipes(response.hits);
    } catch (error) {
      console.error("Error fetching recipes:", error);
    }
  };

  return (
    <div className="w-full h-full flex flex-col overflow-y-scroll ">
      <div className="text-center flex flex-col h-1/5">
        <h1 className="text-bold text-2xl font-heading">Recipe Search</h1>
        <div className="w-full flex justify-around items-center p-6">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Enter your search query"
            style={{ width: "90%", padding: "10px", fontSize: "16px" }}
          />
          <button
            onClick={handleSearch}
            className="underline font-body text-xl"
          >
            Search
          </button>
        </div>
      </div>
      <div className="w-full h-4/5">
        <CardSearch recipes={recipes} />
      </div>
    </div>
  );
};

export default RecipeSearch;
