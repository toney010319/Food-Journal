
const Ingredients = ({ ingredient, onClose }) => {

    return (
        <div className="bg-[#f1f1f1e3] rounded-b-lg border-b-2 border-x-2 p-5   ">
            <button
                onClick={onClose}
                className="  absolute top-0 right-0  "
            >
                <img

                    src="https://www.svgrepo.com/show/380138/x-close-delete.svg"
                    width="20"
                    alt="close" />
            </button>

            <h1 className="text-3xl font-bold text-center ">Ingredients</h1>
            {ingredient.map((ingredient, index) => (
                <li key={index} className="text-left ">{ingredient}</li>
            ))}
        </div>
    )
}

export default Ingredients
