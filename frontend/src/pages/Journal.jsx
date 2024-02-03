import { useState } from "react";
import Addmeal from "../components/Addmeal";
import Modal from "../Modal";
import { createPortal } from 'react-dom';

const Journal = () => {
    const [modalContent, setModalContent] = useState(null);
    const [showModal, setShowModal] = useState(false);
    const handleAddMeal = () => {
        setShowModal(true);
        setModalContent("addmeal");
    }
    const renderModalContent = () => {
        switch (modalContent) {
            case "addmeal":
                return (
                    <Addmeal onClose={() => setShowModal(false)} />
                );
            // case "viewmeal":
            // return (
            //     <Viewmeal onClose={() => setShowModal(false)} />
            // );

            default:
                return null;
        }
    };
    return (
        <>
            <div className="border-2 border-black">

                <div className="grid grid-cols-3 grid-rows-1 gap-4 border-2 border-black">
                    <div >Meal 1</div>
                    <div >Meal 2</div>
                    <div >Meal 3</div>
                </div>
                <button
                    className="cursor-pointer text-white px-2 py-1 bg-gray-700 rounded-md hover:bg-gray-950 mb-2 ml-3"
                    onClick={() => handleAddMeal()}
                >Add meal</button>
            </div>
            {showModal &&
                createPortal(<Modal>{renderModalContent()}</Modal>, document.body)}
        </>
    )
}

export default Journal
