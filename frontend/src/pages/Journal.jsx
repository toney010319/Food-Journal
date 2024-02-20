import { useEffect, useState } from "react";
import { journalFilterDate } from "../lib/api";
import MealtypeGroup from "../components/MealtypeGroup";
import { Datepicker } from "flowbite-react";
const Journal = () => {
  const [journalEntries, setJournalEntries] = useState([]);
  const userId = JSON.parse(sessionStorage.getItem("user")).id;
  const [date, setDate] = useState(new Date().toLocaleDateString("en-CA"));
  const fetchJournalEntries = async () => {
    try {
      let response = await journalFilterDate(userId, date);

      setJournalEntries(response);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchJournalEntries();
  }, [date]);

  return (
    <div className="w-full h-full flex flex-col items-center justify-around bg-[#ffebaf]">
      <div className="w-1/2 flex items-center justify-center">
        <input
          type="date"
          onChange={(e) => setDate(e.target.value)}
          value={date}
          className="m-5 w-1/4 text-center"
        />
      </div>
      <div className="w-full h-full flex justify-around items-center ">
        <MealtypeGroup mealType="breakfast" journalEntries={journalEntries} />
        <MealtypeGroup mealType="lunch" journalEntries={journalEntries} />
        <MealtypeGroup mealType="dinner" journalEntries={journalEntries} />
      </div>
    </div>
  );
};

export default Journal;
