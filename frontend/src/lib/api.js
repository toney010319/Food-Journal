 
import axios from 'axios';

export const getSaveRecipes = async (userId) => {
    try {
        const response = await axios.get(`http://127.0.0.1:3000/api/users/${userId}/recipe`);
        const saveUris = response.data.map(item => item.uri);
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