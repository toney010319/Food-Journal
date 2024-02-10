import React from 'react';

const NutritionLabel = () => {
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
                        <span>230</span>
                    </div>
                    <hr className="mb-1 bg-gray-300 h-1 rounded-full " />
                    <div className="text-sm">
                        <p className="font-bold  text-xs flex justify-end"> % Daily Value *</p>
                        <hr />
                    </div>
                    <div className="flex justify-between items-end">
                        <div>
                            <p><span className='font-bold'>Total Fat</span> 18.3 g</p>
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
                    <hr />

                </div>
                <button className='text-white px-2 py-1 bg-gray-700 rounded-md hover:bg-gray-950     m-auto mt-2'>More</button>
            </div>
        </>
    );
}

export default NutritionLabel;