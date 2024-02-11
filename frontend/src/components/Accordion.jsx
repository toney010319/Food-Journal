import { Accordion } from 'flowbite-react';
import Modal from "./Modal";
import NutritionLabel from './NutritionalLabel';
import Ingredients from './Ingredients';
import { useState } from 'react';
import { getRecipeByUri } from '../lib/api';
import { createPortal } from 'react-dom';
import More from './More';


const AccordionC = ({ entries }) => {
    const [data, setData] = useState([])
    const [openMore, setOpenMore] = useState(false)
    if (!entries) {
        return null;
    }

    const handleMoreButton = async (id) => {
        try {
            let choosenUri = entries.find((uri) => uri.id === id)
            let uri = choosenUri.uri
            let response = await getRecipeByUri(uri);
            console.log(response, "response")
            setData(response)
            setOpenMore(true)

        } catch (error) {
            console.error(error);
        }

    }

    console.log(openMore, "openMore")

    return (
        <Accordion collapseAll  >

            {
                entries.map((entry, index) => (
                    <Accordion.Panel key={index}>
                        <Accordion.Title className='text-black'>{entry.label}</Accordion.Title>
                        <Accordion.Content   >
                            <Ingredients ingredient={entry.ingredientlines} />
                            <NutritionLabel />

                            <button onClick={() => { handleMoreButton(entry.id) }} className='text-white px-2 py-1 bg-gray-700 rounded-md hover:bg-gray-950     m-auto mt-2'>
                                More Details
                            </button>

                            {openMore && createPortal(
                                <Modal>
                                    <More data={data} onClose={() => setOpenMore(false)} />
                                </Modal>,
                                document.body
                            )}
                        </Accordion.Content>

                    </Accordion.Panel>
                ))
            }
        </Accordion >
    );

}

export default AccordionC