import { useState } from "react";
import { getRecipeByUri, postSaveRecipe } from "../lib/api";
import { createPortal } from "react-dom";
import Modal from "./Modal";
import More from "./More";


const CardSearch = ({ recipes }) => {
    const [data, setData] = useState([])
    const [openMore, setOpenMore] = useState(false)
    const user_id = JSON.parse(sessionStorage.getItem("user")).id
    const handleMoreButton = async (label) => {
        try {
            let choosenMeal = recipes.find((recipe) => recipe.recipe.label === label)
            console.log(choosenMeal, "choosen")
            let uri = choosenMeal.recipe.uri
            console.log(uri, "uri")
            let response = await getRecipeByUri(uri);

            setData(response)
            setOpenMore(true)

        } catch (error) {
            console.error(error);
        }
    }

    const handleAddButton = async (label) => {
        try {
            let choosenMeal = recipes.find((recipe) => recipe.recipe.label === label)
            console.log(choosenMeal, "choosen")
            let uri = {
                "uri": `${choosenMeal.recipe.uri}`,
            }
            console.log(uri, "uri")
            let response = await postSaveRecipe(user_id, uri);

            console.log(response, "response")

        } catch (error) {
            console.error(error);
        }
    }




    if (recipes.length === 0) {
        return (
            <div className='flex justify-center items-center h-screen w-screen'>
                <h1 className='text-3xl font-bold'>No Recipes Found</h1>
            </div>
        )
    }
    return (
        <div className='flex flex-row flex-wrap ml-5    justify-start items-stretch '>
            {recipes.map((recipe, index) => (

                <div key={index} className='flex  flex-col h-full w-full max-w-sm m-5     border-2 rounded-3xl border-black text-center   ' >

                    <div className='p-8 pb-20 bg-white rounded-t-3xl  ' ><img src={recipe.recipe.image} className='rounded-2xl ' /></div>
                    <div className='bg-green-400  p-8  flex justify-between items-center flex-col   min-h-[15rem] -mt-10 rounded-3xl font-bold text-2xl  '>{recipe.recipe.label}
                        <div className='text-base pt-5 flex gap-10 items-end '>
                            <button onClick={() => { handleMoreButton(recipe.recipe.label) }} className='bg-[#ffcd29] p-3  rounded-3xl ' >
                                More Details
                            </button>

                            {openMore && createPortal(
                                <Modal>
                                    <More data={data} onClose={() => setOpenMore(false)} />
                                </Modal>,
                                document.body
                            )}
                            <button className='bg-[#ffcd29] p-3  rounded-3xl ' onClick={() => handleAddButton(recipe.recipe.label)} >Add to Menu</button>
                        </div>
                    </div>
                </div>


            ))}

        </div>
    )
}

export default CardSearch
