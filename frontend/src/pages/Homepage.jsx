import React from "react";
import { Avatar } from "flowbite-react"; // Import Button component
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useStateContext, useAuth } from "../states/StateContext";

const Homepage = () => {
  const { setShowNotice, setNotice } = useStateContext();
  const { logout } = useAuth();
  const router = useNavigate();

  return (
    <div className="w-full flex flex-col items-center">
      <div className="w-1/2 p-8 flex flex-col justify-center items-center">
        <Avatar rounded size="xl" />
        <div className="w-full flex flex-col justify-center p-10 bg-white mt-4">
          Full Name
          <>Email</>
          Address
        </div>
      </div>
    </div>
  );
};

export default Homepage;
