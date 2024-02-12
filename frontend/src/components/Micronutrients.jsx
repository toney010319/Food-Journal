const Nutrients = ({ recipe }) => {
    const macronutrients = ["Fat", "Protein", "Carbs"];
    const micronutrients = ["Cholesterol", "Sodium", "Calcium", "Magnesium", "Potassium", "Iron"];

    const renderNutrientList = (nutrients, divideByYield = false) => (
        <ul>
            {recipe.digest
                .filter(digestlabel => nutrients.includes(digestlabel.label))
                .map((digestlabel, index) => (
                    <li key={index}>
                        <div className="flex justify-between flex-nowrap">
                            <p  >{digestlabel.label}: </p>     <b >{Math.floor(divideByYield ? digestlabel.total / recipe.yield : digestlabel.total)}{digestlabel.unit}</b>
                        </div>
                    </li>
                ))}
        </ul>
    );

    return (
        <div className="flex flex-row justify-between">
            <div>
                <p>{recipe.yield} Servings</p>
                <p>
                    <span className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{Math.floor(recipe.totalNutrients.ENERC_KCAL.quantity / recipe.yield)}</span> kcal
                </p>
            </div>
            <div className="leading-10">
                {renderNutrientList(macronutrients)}
            </div>
            <div>
                {renderNutrientList(micronutrients, true)}
            </div>
        </div>
    );
};
export default Nutrients