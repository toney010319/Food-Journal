import React from "react";
import { Button } from "flowbite-react"; // Import Button component
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useStateContext, useAuth } from "../states/StateContext";

const Homepage = () => {
  const { setShowNotice, setNotice } = useStateContext();
  const { logout } = useAuth();

  const router = useNavigate();

  const handleLogout = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:3000/api/logout",
        {},
        {
          headers: {
            Authorization: sessionStorage.getItem("token"),
          },
        }
      );


      sessionStorage.clear();
      setShowNotice(true);
      setNotice(response.data.message);
      logout();
      router("/login");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <Button color="failure" onClick={handleLogout}>
        Logout
      </Button>
    </>
  );
};

export default Homepage;
