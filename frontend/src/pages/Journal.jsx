
import { useEffect, useState } from "react";
import { getJournalEntries } from '../lib/api';
import MealtypeGroup from "../components/MealtypeGroup";
const Journal = () => {
    const [journalEntries, setJournalEntries] = useState([]);
    const userId = JSON.parse(sessionStorage.getItem("user")).id

    const fetchJournalEntries = async () => {
        let entries = await getJournalEntries(userId);

        setJournalEntries(entries);
    }

    useEffect(() => {
        fetchJournalEntries();
    }, []);

    return (
        <>
            <div className=" pl-20 pt-2  bg-[#ffebaf] w-screen h-screen">
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
