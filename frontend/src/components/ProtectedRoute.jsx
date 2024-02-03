import React, { useEffect } from "react";
import { Route, Navigate } from "react-router-dom";
import { useAuth } from "../states/StateContext";

const ProtectedRoute = ({ element, ...props }) => {
  const { isLoggedIn } = useAuth();

  useEffect(() => {
    console.log("isLoggedIn:", isLoggedIn);
  }, []);

  return isLoggedIn ? (
    <Route {...props} element={element} />
  ) : (
    <Navigate to="/login" />
  );
};

export default ProtectedRoute;
