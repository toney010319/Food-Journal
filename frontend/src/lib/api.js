 
import axios from 'axios';

export const getSaveRecipes = async (userId) => {
    try {
        const response = await axios.get(`http://127.0.0.1:3000/api/users/${userId}/recipe`);
        console.log(response.data,"response")
        const saveUris = response.data.map(item => item.uri);
        console.log(saveUris,"saveUris")
        const recipes = await Promise.all(saveUris.map(uri => axios.get(`http://127.0.0.1:3000/api/recipebyuri`, { params: { uri } })));
        return recipes.map(recipeResponse => recipeResponse.data);
    } catch (error) {
        console.error(error);
    }
}


export const PostJournalEntry = async (userId, entry) => {
    try {
        const response = await axios.post(`http://127.0.0.1:3000/api/users/${userId}/journals`, entry);
        
        return response.data;
    } catch (error) {
        console.error(error);
    }
}


export const getJournalEntries = async (userId) => {
    try {
        const response =  await axios.get(`http://localhost:3000/api/users/${userId}/journals`)
        
        return response.data

    } catch (error) {
         console.error(error);
    }
}
    
export const getRecipeByUri = async (uri) => {
    try {
        const response = await axios.get(`http://127.0.0.1:3000/api/recipebyuri`, { params: { uri } });
        return response.data;
    } catch (error) {
        console.error(error);
    }
}

export const searchRecipes = async (query) => {
    try {
        const response = await axios.get(`http://127.0.0.1:3000/api/recipe`, { params: { query } });
        return response.data;
    } catch (error) {
        console.error(error);
    }
}

export const postSaveRecipe = async (userId, uri) => {
    try {
        const response = await axios.post(`http://127.0.0.1:3000/api/users/${userId}/recipe`, uri);
        return response.data;
    } catch (error) {
        console.error(error);
    }
}


 

export const journalFilterDate = async (userId, date) => {
  try {
    const response = await axios.get(`http://127.0.0.1:3000/api/users/${userId}/filter_by_date`, {
      params: {
        date: date
      }
    });
    return response.data;
  } catch (error) {
    console.error(`HTTP error! status: ${error.response.status}`);
    throw error;
  }
};