import React, { createContext, useContext, useState, useEffect } from "react";

const StateContext = createContext();

export const useStateContext = () => useContext(StateContext);

export const StateProvider = ({ children }) => {
  const [showNotice, setShowNotice] = useState(false);
  const [notice, setNotice] = useState("");

  return (
    <StateContext.Provider
      value={{ showNotice, setShowNotice, notice, setNotice }}
    >
      {children}
    </StateContext.Provider>
  );
};

const AuthContext = createContext();
export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(
    sessionStorage.getItem("token") !== null
  );

  const login = () => setIsLoggedIn(true);
  const logout = () => setIsLoggedIn(false);

  return (
    <AuthContext.Provider value={{ isLoggedIn, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
