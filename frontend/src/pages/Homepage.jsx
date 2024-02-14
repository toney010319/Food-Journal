import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Loading from "../components/Loading";
import { useStateContext } from "../states/StateContext";

const Homepage = () => {
  const { setShowNotice, setNotice } = useStateContext();
  const router = useNavigate();
  const [homepageData, setHomepageData] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      const user = JSON.parse(sessionStorage.getItem("user"));
      try {
        const response = await axios.get(
          `http://localhost:3000/api/homepage/${user.id}`
        );
        setHomepageData(response.data);
        setLoading(false);
      } catch (error) {
        console.log(error.response.data.error);
        setHomepageData({}); // Reset homepageData on error
        setLoading(false);
        // You may want to show an error message to the user
        setShowNotice(true);
        setNotice("Failed to fetch homepage data");
      }
    }

    fetchData();
  }, [setShowNotice, setNotice]);

  return (
    <div className="w-full h-full flex px-2 flex-col items-center justify-around">
      <div className="w-full h-3/5 flex justify-between items-center">
        <div className="w-1/2 h-full p-2 bg-white ">
          <h1 className="w-full text-center font-bold text-2xl font-heading">
            Nutritional Report for the Last 7 Days
          </h1>
          {loading ? (
            <Loading />
          ) : (
            <div className="w-full h-5/6 flex justify-between flex-wrap px-10 pt-4 overflow-y-scroll ">
              {Object.keys(homepageData.nutrition_info).length !== 0 ? (
                Object.entries(homepageData.nutrition_info || {}).map(
                  ([key, value]) => (
                    <div className="my-2 flex w-1/2" key={key}>
                      <span>{key}:</span>
                      <span className="font-bold ml-4">
                        {parseFloat(value).toFixed(3)} g
                      </span>
                    </div>
                  )
                )
              ) : (
                <div className="w-full h-full flex justify-center items-center bg-gray-200 font-bold text-3xl font-heading">
                  No Data Yet
                </div>
              )}
            </div>
          )}
        </div>
        <div className="w-1/3 h-full  p-2 bg-white">
          <h1 className="w-full text-center font-bold text-2xl font-heading">
            Today's Journal Entries
          </h1>
          {loading ? (
            <Loading />
          ) : (
            <div className="w-full h-5/6 flex justify-between flex-wrap px-4 pt-4 overflow-y-scroll ">
              {Object.keys(homepageData.journal_today).length !== 0 ? (
                Object.entries(homepageData.journal_today || {}).map(
                  ([key, value]) => (
                    <div className="my-2 flex w-1/2" key={key}>
                      <span className="font-bold ml-4">{value}</span>
                    </div>
                  )
                )
              ) : (
                <div className="w-full h-full flex justify-center items-center bg-gray-200 font-bold text-3xl font-heading">
                  No Data Yet
                </div>
              )}
            </div>
          )}
        </div>
      </div>
      <div className="w-full h-2/6 p-2 flex justify-between items-center bg-violet-200">
        <div className="w-1/6 h-full bg-gray-500"></div>
        <div className="w-1/6 h-full bg-gray-500"></div>
        <div className="w-1/6 h-full bg-gray-500"></div>
        <div className="w-1/6 h-full bg-gray-500"></div>
        <div className="w-1/6 h-full bg-gray-500"></div>
        <div className="w-10 h-full bg-gray-500"></div>
      </div>
    </div>
  );
};

export default Homepage;
