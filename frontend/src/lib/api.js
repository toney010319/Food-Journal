import axios from "axios";

export const getSaveRecipes = async (userId) => {
  try {
    const response = await axios.get(
      `https://food-journal-36a1fc0aa4ba.herokuapp.com/api/users/${userId}/recipe`
    );
    const saveUris = response.data.map((item) => item.uri);
    const recipes = await Promise.all(
      saveUris.map((uri) =>
        axios.get(`https://food-journal-36a1fc0aa4ba.herokuapp.com/api/recipebyuri`, { params: { uri } })
      )
    );
    return recipes.map((recipeResponse) => recipeResponse.data);
  } catch (error) {
    console.error(error);
  }
};

export const PostJournalEntry = async (userId, entry) => {
  try {
    const response = await axios.post(
      `https://food-journal-36a1fc0aa4ba.herokuapp.com/api/users/${userId}/journals`,
      entry
    );

    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const getJournalEntries = async (userId) => {
  try {
    const response = await axios.get(
      `http://localhost:3000/api/users/${userId}/journals`
    );

    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const getRecipeByUri = async (uri) => {
  try {
    const response = await axios.get(`https://food-journal-36a1fc0aa4ba.herokuapp.com/api/recipebyuri`, {
      params: { uri },
    });
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const searchRecipes = async (query) => {
  try {
    const response = await axios.get(`https://food-journal-36a1fc0aa4ba.herokuapp.com/api/recipe`, {
      params: { query },
    });
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const postSaveRecipe = async (userId, uri) => {
  try {
    const response = await axios.post(
      `https://food-journal-36a1fc0aa4ba.herokuapp.com/api/users/${userId}/recipe`,
      uri
    );
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const journalFilterDate = async (userId, date) => {
  try {
    const response = await axios.get(
      `https://food-journal-36a1fc0aa4ba.herokuapp.com/api/users/${userId}/filter_by_date`,
      {
        params: {
          date: date,
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error(`HTTP error! status: ${error.response.status}`);
    throw error;
  }
};
