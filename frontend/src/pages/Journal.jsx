
import { useEffect, useState } from "react";
import { journalFilterDate } from '../lib/api';
import MealtypeGroup from "../components/MealtypeGroup";
const Journal = () => {
    const [journalEntries, setJournalEntries] = useState([]);
    const userId = JSON.parse(sessionStorage.getItem("user")).id
    const [date, setDate] = useState(
        new Date().toLocaleDateString('en-CA')
    );
    const fetchJournalEntries = async () => {
        try {
            let response = await journalFilterDate(userId, date);
            console.log(response, "response")
            setJournalEntries(response);
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        console.log(date, "date");
        fetchJournalEntries();
    }, [date]);


    return (
        <>
            <div className=" pl-20 pt-2  bg-[#ffebaf] w-screen h-screen">
                <input type="date" onChange={e => setDate(e.target.value)} value={date} className="m-5" />
                <div className="grid grid-cols-3 grid-rows-1 gap-10  m-5 ">
                    <MealtypeGroup mealType='breakfast' journalEntries={journalEntries} />
                    <MealtypeGroup mealType='lunch' journalEntries={journalEntries} />
                    <MealtypeGroup mealType='dinner' journalEntries={journalEntries} />
                </div>
            </div>
        </>
    )
}

export default Journal
