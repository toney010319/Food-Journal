// import { useState } from "react";
// import Addmeal from "../components/Addmeal";
// import Modal from "../Modal";
// import { createPortal } from 'react-dom';
import { Link } from "react-router-dom";
import AccordionC from "../components/Accordion";
const Journal = () => {

    return (
        <>
            <div className=" pt-10  bg-background w-full h-full">

                <div className="grid grid-cols-3 grid-rows-1 gap-10  m-5 ">
                    <div ><h1>Breakfast</h1><AccordionC /></div>
                    <div ><h1>Lunch</h1><AccordionC /></div>
                    <div ><h1>Dinner</h1><AccordionC /></div>
                </div>
                <Link to="/addmeal"
                    className="cursor-pointer text-white px-2 py-1 bg-gray-700 rounded-md hover:bg-gray-950 mb-2 ml-3"

                >Add meal</Link>
            </div>
        </>
    )
}

export default Journal
