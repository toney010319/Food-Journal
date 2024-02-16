import CardRecipe from "./CardRecipe";
import Nutrients from "./Micronutrients";
import Loading from "./Loading";

import NutritionLabel from "./NutritionalLabel";

const More = ({ data, onClose }) => {
  return (
    <div>
      <button onClick={onClose} className="  absolute top-0 right-0  ">
        <img
          src="https://www.svgrepo.com/show/380138/x-close-delete.svg"
          width="20"
          alt="close"
        />
      </button>

      {!data.length > 0 && Array.isArray(data.healthLabels) ? (
        <div className="text-align  items-align flex flex-row    gap-5 text-gray-900  ">
          <div className="flex-wrap flex flex-col">
            <CardRecipe
              label={data.label}
              image={data.image}
              dietLabels={data.dietLabels}
              healthLabels={data.healthLabels.map((healthlabel, index) => (
                <li key={index} className="float-left w-1/2 pr-5 ">
                  {healthlabel}
                </li>
              ))}
            />

            <div className="min-w-[35rem] pt-5 bg-white p-5 rounded-md mt-2 ">
              <Nutrients recipe={data} />
            </div>
          </div>
          <div className="min-w-[20rem]">
            <NutritionLabel recipe={data} hideButton={true} />
          </div>
        </div>
      ) : (
        <Loading />
      )}
    </div>
  );
};

export default More;
