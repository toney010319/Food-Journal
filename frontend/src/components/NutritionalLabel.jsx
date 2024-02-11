
const NutritionLabel = ({ recipe }) => {
    if (!recipe) {
        return null;
    }
    const nutrients = {
        'Total Fat': 'FAT',

        'Cholesterol': 'CHOLE',
        'Sodium': 'NA',
        'Total Carbohydrate': 'CHOCDF',
        'Dietary Fiber': 'FIBTG',
        'Total Sugars': 'SUGAR',
        'Protein': 'PROCNT',
        'Vitamin D': 'VITD',
        'Calcium': 'CA',
        'Iron': 'FE',
        'Potassium': 'K'
    };
    const subNutrientsOfFat = {
        'Saturated Fat': 'FASAT',
        'Trans Fat': 'FATRN',
    }


    const renderNutrient = (nutrientKey, nutrientLabel) => {
        const nutrient = recipe.digest.find(n => n.tag === nutrientKey);
        if (!nutrient) return null

        return (
            <div className="flex justify-between items-end">
                <div>
                    <p><span className='font-bold'>{nutrientLabel}</span> {nutrient.total.toFixed(2)}{nutrient.unit}</p>
                </div>
                <span>{nutrient.daily.toFixed(0)}%</span>
            </div>
        );
    };
    return (
        <>
            <div >
                <div className="border-2  bg-white rounded-lg pt-10 m-auto p-2">
                    <header className="text-center font-bold">
                        <h1 className='text-2xl'>Nutrition Facts</h1>
                        <hr className="mb-1 bg-gray-300 h-2 rounded-full " />

                    </header>
                    <hr className="mb-2" />
                    <div className="flex justify-between items-end font-bold text-2xl">
                        <div>
                            <h2 className="font-bold text-sm">Amount per serving</h2>
                            <p >Calories</p>
                        </div>
                        <span>{Math.floor(recipe.calories)}</span>
                    </div>
                    <hr className="mb-1 bg-gray-300 h-1 rounded-full " />
                    <div className="text-sm">
                        <p className="font-bold  text-xs flex justify-end"> % Daily Value *</p>
                        <hr />
                    </div>
                    {Object.entries(nutrients).map(([label, tag], index) => (
                        <>

                            {renderNutrient(tag, label)}
                            <hr />
                        </>
                    ))}
                    {/* <div className="flex justify-between items-end">
                        <div>
                            <p><span className='font-bold'>Total Fat</span> 202g</p>
                        </div>
                        <span>28%</span>
                    </div>
                    <hr />
                    <div className="flex justify-between items-end">
                        <div className='pl-5'>
                            <p>Saturated Fat 2 g</p>
                        </div>
                        <span>10%</span>
                    </div>
                    <hr />
                    <div className="flex justify-between items-end">
                        <div className='pl-5'>
                            <p>Trans Fat 2 g</p>
                        </div>
                        <span> </span>
                    </div>
                    <hr /> */}

                </div>

            </div>
        </>
    );
}

export default NutritionLabel;