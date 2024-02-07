 
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

