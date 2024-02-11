import { Accordion } from 'flowbite-react';
import CardRecipe from './CardRecipe';
import NutritionLabel from './NutritionalLabel';
import Ingredients from './Ingredients';

const AccordionC = ({ entries }) => {
    if (!entries) {
        return null;
    }


    return (
        <Accordion collapseAll  >

            {
                entries.map((entry, index) => (
                    <Accordion.Panel key={index}>
                        <Accordion.Title className='text-black'>{entry.label}</Accordion.Title>


                        <Accordion.Content  >

                            <Ingredients ingredient={entry.ingredientlines} />
                            <NutritionLabel />
                        </Accordion.Content>

                    </Accordion.Panel>
                ))
            }
        </Accordion >
    );

}

export default AccordionC