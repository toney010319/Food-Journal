import React, { useEffect, useId, useState } from 'react';
import axios from 'axios';

const ProfilePage = () => {
    const [userDetails, setUserdetails] = useState({})
    const userId = JSON.parse(sessionStorage.getItem("user")).id
    const user = async () => {
        try {
            const response = await axios.get(`http://localhost:3000/api/users/${userId}`);
            console.log (response.data, "response.data")
            setUserdetails(response.data);
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {user()}, []);

  return (
    <div className="profile-page">
      <div className="profile-header">
        <img className="profile-picture" alt="Profile" />
        <h1 className="profile-name"> {userDetails.username} </h1>
        <ul className="profile-details">
          <li><strong>Email:</strong> {userDetails.email}</li>
          <li><strong>Joined:</strong>{userDetails.created_at}</li>
        </ul>
      </div>
    </div>
  );
};

export default ProfilePage;
