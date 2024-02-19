import React, { useEffect, useState } from "react";
import { Avatar } from "flowbite-react";
import { useNavigate, Link } from "react-router-dom";
import { useStateContext } from "../states/StateContext";

const Profile = () => {
  const { isEditPage } = useStateContext();
  const router = useNavigate();
  const [userData, setUserData] = useState({});

  useEffect(() => {
    const user = JSON.parse(sessionStorage.getItem("user"));
    setUserData({
      Username: user.username,
      "First Name": user.first_name,
      "Last Name": user.last_name,
      "Email Address": user.email,
    });
  }, []);

  return (
    <div className="w-full h-full flex flex-col items-center">
      <div className="w-1/2 p-8 flex flex-col justify-center items-center">
        <Avatar rounded size="xl" />
        <div className="w-full flex flex-col justify-center p-10 bg-white mt-4">
          {Object.entries(userData).map(([key, value]) => (
            <div
              className="my-2 flex flex-col items-center justify-center"
              key={key}
            >
              <span className="font-bold">{key}:</span> {value}
            </div>
          ))}
        </div>
        <div className="w-full flex justify-center mt-4">
          <a
            href="settings"
            className="font-heading text-xl underline text-blue-500"
          >
            Edit Profile
          </a>
        </div>
      </div>
    </div>
  );
};

export default Profile;
