import { useEffect, useState } from "react";
import { getSaveRecipes } from "../lib/api"
import Loading from "./Loading";
import CardRecipe from "./CardRecipe";


const Addmeal = ({ onClose }) => {
    const [recipes, setRecipes] = useState([])
    const user_id = JSON.parse(sessionStorage.getItem("user")).id

    const fetchSaveRecipes = async () => {
        let saveRecipes = await getSaveRecipes(user_id);

        setRecipes(saveRecipes)

    }
    useEffect(() => {
        fetchSaveRecipes();
    }, []);
    console.log("recipes", recipes)
    return (<>
        <div className="bg-background relative">
            <button
                onClick={onClose}
                className="  absolute top-0 right-0 "
            >
                <img
                    src="https://www.svgrepo.com/show/380138/x-close-delete.svg"
                    width="20"
                    alt="close" />
            </button>
            <h1 className="text-3xl font-bold text-center ">Choose Meal</h1>
            <div className="   justify-center flex flex-row gap-4 text-center align-center shadow-md border-md rounded-md  bg-background m-2 p-5 pl-8 pr-8">

                {recipes.length > 0 ? (

                    recipes.map((recipe) => {
                        return (
                            <CardRecipe
                                key={recipe.id}
                                label={recipe?.label}
                                image={recipe.image}
                                ingredients={[
                                    recipe?.ingredientLines.map((ingredient, index) => (
                                        <li key={index} className="text-left">{ingredient}</li>
                                    ))
                                ]}
                            />
                        );
                    })

                ) : (
                    <Loading />
                )
                }
            </div>
        </div>
    </>
    )
}




export default Addmeal
