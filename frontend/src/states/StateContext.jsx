import React, { createContext, useContext, useState, useEffect } from "react";

const StateContext = createContext();
const AuthContext = createContext();

export const useStateContext = () => useContext(StateContext);
export const useAuth = () => useContext(AuthContext);

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

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  // const [token, setToken] = useState("");

  const login = () => setIsLoggedIn(true);
  const logout = () => setIsLoggedIn(false);

  useEffect(() => {
    const token = sessionStorage.getItem("token");
    // console.log(token);
    if (token !== "") setIsLoggedIn(true);
  }, []);

  return (
    <AuthContext.Provider value={{ isLoggedIn, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
