export const getSaveRecipes = async () => {
    try {
        const response = await fetch("http://127.0.0.1:3000/api/recipe");
        const data = await response.json();
        return data;
    } catch (error) {
        console.error(error);
    }
}