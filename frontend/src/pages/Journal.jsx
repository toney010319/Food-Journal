// import { useState } from "react";
// import Addmeal from "../components/Addmeal";
// import Modal from "../Modal";
// import { createPortal } from 'react-dom';
import { Link } from "react-router-dom";
const Journal = () => {

    return (
        <>
            <div className="border-2 border-black">

                <div className="grid grid-cols-3 grid-rows-1 gap-4 border-2 border-black">
                    <div >Meal 1</div>
                    <div >Meal 2</div>
                    <div >Meal 3</div>
                </div>
                <Link to="/addmeal"
                    className="cursor-pointer text-white px-2 py-1 bg-gray-700 rounded-md hover:bg-gray-950 mb-2 ml-3"

                >Add meal</Link>
            </div>
        </>
    )
}

export default Journal
