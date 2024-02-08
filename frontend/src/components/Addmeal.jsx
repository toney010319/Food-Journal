import { useEffect, useState } from "react";
import { PostJournalEntry, getSaveRecipes } from "../lib/api"
import Loading from "./Loading";
import CardRecipe from "./CardRecipe";
import { Button } from 'flowbite-react';
import Ingredients from "./Ingredients";
import { createPortal } from "react-dom";
import Modal from "./Modal";

import Nutrients from "./Micronutrients";

const Addmeal = () => {
    const [recipes, setRecipes] = useState([])
    const [openIngredients, setOpenIngredients] = useState(false)

    const user_id = JSON.parse(sessionStorage.getItem("user")).id


    const fetchSaveRecipes = async () => {
        let saveRecipes = await getSaveRecipes(user_id);
        setRecipes(saveRecipes)
    }
    useEffect(() => {
        fetchSaveRecipes();
    }, []);
    console.log("recipes", recipes)
    return (
        <div className=" overflow-scroll   bg-background">
            <h1 className="text-3xl font-bold text-center ">Choose Meal</h1>
            <div className="  shadow-md border-md rounded-md flex flex-row flex-wrap   justify-center items-center gap-5 bg-background m-2 p-5 ">


                {recipes.length > 0 ? (
                    recipes.map((recipe) => {
                        return (
                            <>

                                <div className="text-align items-align flex flex-col  text-gray-900 dark:text-white">
                                    <CardRecipe

                                        key={recipe.id}
                                        label={recipe?.label}
                                        image={recipe.image}
                                        dietLabels={recipe.dietLabels}
                                        healthLabels={[recipe.healthLabels.map((healthlabel, index) => (
                                            <li key={index} className="float-left w-auto pr-5 ">{healthlabel}</li>
                                        ))
                                        ]}

                                    />
                                    <div className="bg-[#f1f1f1e3] rounded-b-lg border-b-2 border-x-2 p-5   ">

                                        <Nutrients recipe={recipe} />
                                        <div className="flex flex-row justify-center gap-5">
                                            <Button label="2" onClick={() => setOpenIngredients(true)}>Ingredients</Button>
                                            {openIngredients &&
                                                createPortal(
                                                    <Modal
                                                    >
                                                        <Ingredients ingredient={recipe.ingredientLines} onClose={() => setOpenIngredients(false)} />
                                                    </Modal>,
                                                    document.body
                                                )}
                                            <Button label="2" >Add</Button>
                                        </div>

                                    </div>

                                </div >

                            </>
                        );
                    })
                ) : (
                    <Loading />
                )
                }

            </div>
        </div >
    )
}




export default Addmeal
