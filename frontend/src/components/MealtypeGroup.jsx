import { useNavigate } from "react-router-dom";
import AccordionC from "./Accordion";
const MealtypeGroup = ({ mealType, journalEntries }) => {
  const navigate = useNavigate();
  const handleAddButton = () => {
    navigate(`/addmeal/${mealType}`);
  };

  return (
    <div className="w-1/4 h-full mt-4">
      <h1 className=" w-full border-x-2 border-t-2 border-[#128447] rounded-t-lg max-w-sm text-center text-2xl font-bold bg-[#cad456]">
        {mealType.toUpperCase()}
      </h1>
      <div className="w-full border-x-2 border-b-2 border-[#128447] overflow-y-scroll flex flex-col rounded-b-lg min-h-[40rem] max-h-[45rem] max-w-sm h-3/4 bg-[#f1f1f1e3] ">
        <AccordionC entries={journalEntries[mealType]} />
        <button
          className="cursor-pointer text-white px-2 py-1 bg-gray-700 rounded-md hover:bg-gray-950 m-auto"
          onClick={handleAddButton}
        >
          AddMeal
        </button>
      </div>
    </div>
  );
};

export default MealtypeGroup;
