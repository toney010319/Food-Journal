import { useEffect, useState } from "react";
import { getSaveRecipes } from "../lib/api"
import Loading from "./Loading";


const Addmeal = ({ onClose }) => {
    const [recipes, setRecipes] = useState([])


    const fetchSaveRecipes = async () => {
        let saveRecipes = await getSaveRecipes();
        console.log(saveRecipes)
        setRecipes(saveRecipes)

    }
    useEffect(() => {
        fetchSaveRecipes();
    }, []);
    console.log(recipes)
    return (
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
                            <div key={recipe.id}>
                                <div className=" pt-2 text-xl  text-accent   w-full">
                                    <img
                                        src={recipe.images[0]}
                                        width="100"
                                        alt="image"
                                    />
                                </div>
                                <p className=" pt-2 text-xl  text-accent font-extrabold w-full">{recipe.label}</p>
                                <div className="flex w-full flex-row justify-center">
                                    <ul className="  pl-5">
                                        {recipe.ingredientsLines.map((ingredient, index) => (
                                            <li key={index}>{ingredient}</li>
                                        ))}
                                    </ul>

                                </div>

                            </div>

                        )
                    })
                ) : (
                    <Loading />
                )
                }
            </div>
        </div>
    )
}




export default Addmeal
