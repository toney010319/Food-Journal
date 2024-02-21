import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Loading from "../components/Loading";
import { useStateContext } from "../states/StateContext";
import { getRecipeByUri } from "../lib/api";
import { createPortal } from "react-dom";
import Modal from "../components/Modal";
import More from "../components/More";

const Homepage = () => {
  const { setShowNotice, setNotice } = useStateContext();
  // const router = useNavigate();
  const [homepageData, setHomepageData] = useState({});
  const [loading, setLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalData, setModalData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const user = JSON.parse(sessionStorage.getItem("user"));
      try {
        const response = await axios.get(
          `https://food-journal-420c7f2ef7fd.herokuapp.com/api/homepage/${user.id}`
        );
        setHomepageData(response.data);
        setLoading(false);
      } catch (error) {
        console.log(error.response.data.error);
        setHomepageData({}); // Reset homepageData on error
        setLoading(false);

        setShowNotice(true);
        setNotice("Failed to fetch homepage data");
      }
    }

    fetchData();
  }, [setShowNotice, setNotice]);

  const handleImageClick = async (uri) => {
    let response = await getRecipeByUri(uri);
    setModalData(response);
    setIsModalOpen(true);
  };
  return (
    <div className="w-full h-full flex px-2 flex-col items-center justify-around">
      {isModalOpen &&
        createPortal(
          <Modal>
            <More data={modalData} onClose={() => setIsModalOpen(false)} />
          </Modal>,
          document.body
        )}
      <div className="w-full h-1/2 flex justify-between items-center pt-4">
        <div className="w-1/2 h-full p-2 bg-white ">
          <h1 className="w-full text-center font-bold text-2xl font-heading">
            Nutritional Report for the Last 7 Days
          </h1>
          {loading ? (
            <div className="w-full h-full flex items-center justify-center">
              <Loading />
            </div>
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
            <div className="w-full h-full flex items-center justify-center">
              <Loading />
            </div>
          ) : (
            <div className="w-full h-5/6 flex justify-around flex-wrap px-4 pt-4 overflow-y-scroll ">
              {Object.keys(homepageData.journal_today).length !== 0 ? (
                Object.entries(homepageData.journal_today || {}).map(
                  ([key, value]) => (
                    <div className="my-2 flex w-full" key={key}>
                      <span className="w-full text-center font-bold ml-4">
                        {value}
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
      </div>
      <div className="w-full h-1/2 p-8 flex flex-col justify-around items-center">
        <div className="w-full h-1/6 text-center font-bold font-heading text-2xl">
          Recently Saved Recipes
        </div>
        <div className="w-full h-5/6 p-4 flex justify-between items-center">
          {loading ? (
            <div className="w-full h-1/2 flex items-center justify-center p-3">
              <Loading />
            </div>
          ) : Object.keys(homepageData.recent_recipes).length !== 0 ? (
            Object.entries(homepageData.recent_recipes || {}).map(
              ([key, value]) => (
                <div
                  key={key}
                  className="w-1/6 h-full bg-cover cursor-pointer"
                  style={{
                    backgroundImage: `url(${value.imgURL})`,
                  }}
                  onClick={() => handleImageClick(value.uri)}
                ></div>
              )
            )
          ) : (
            <div className="w-full h-full flex justify-center items-center bg-gray-200 font-bold text-3xl font-heading">
              No Data Yet
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Homepage;
