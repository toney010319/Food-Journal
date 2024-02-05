// App.js
import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Alert } from "flowbite-react";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import {
  AuthProvider,
  StateProvider,
  useStateContext,
} from "./states/StateContext";
import ProtectedRoute from "./components/ProtectedRoute";
import Homepage from "./pages/Homepage";
import Journal from "./pages/Journal";

function App() {
  return (
    <BrowserRouter>
      <StateProvider>
        <AuthProvider>
          <AppContent />
        </AuthProvider>
      </StateProvider>
    </BrowserRouter>
  );
}

function AppContent() {
  const { showNotice, setShowNotice, notice, setNotice } = useStateContext();

  useEffect(() => {
    const timer = setTimeout(() => {
      handleNoticeClose();
    }, 5000);

    return () => clearTimeout(timer);
  }, [notice]);

  const handleNoticeClose = () => {
    setShowNotice(false);
    setNotice("");
  };

  return (
    <>
      {showNotice && (
        <Alert
          color="success"
          className="w-1/4 fixed bottom-4 left-4"
          onDismiss={handleNoticeClose}
        >
          <span className="text-xl font-body">{notice}</span>
        </Alert>
      )}
      <div className="min-h-full h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/" element={<Homepage />} />
            <Route path="/journal" element={<Journal />} />
            {/* <Route
              path="/"
              element={<ProtectedRoute component={<Homepage />} />}
            /> */}
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
