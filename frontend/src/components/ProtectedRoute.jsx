import React, { useEffect } from "react";
import { Route, Navigate, Outlet } from "react-router-dom";
import { useAuth, useStateContext } from "../states/StateContext";

const ProtectedRoute = ({ element, ...props }) => {
  const { setShowNotice, setNotice } = useStateContext();
  const { isLoggedIn } = useAuth();

  useEffect(() => {
    if (!isLoggedIn) {
      setShowNotice(true);
      setNotice("You need to login to access that page");
    }
  }, []);
  return isLoggedIn ? <Outlet /> : <Navigate to="/login" />;
};

export default ProtectedRoute;
