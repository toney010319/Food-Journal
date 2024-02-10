// App.js
import { useEffect } from "react";
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
import Addmeal from "./components/Addmeal";
import Navbar from "./components/Navbar";
import NavbarC from "./components/Navbar";

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

      {/* min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 */}
      <NavbarC />

      <div className="w-full space-y-8">
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          {/* <Route path="/" element={<Homepage />} /> */}
          <Route element={<ProtectedRoute />}>
            <Route path="/" element={<Homepage />} />
            <Route path="/journal" element={<Journal />} />
            <Route path="/addmeal/:mealtype" element={<Addmeal />} />
          </Route>
        </Routes>
      </div>

    </>
  );
}

export default App;
