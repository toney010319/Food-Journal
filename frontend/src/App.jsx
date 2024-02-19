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
import RecipeSearch from "./pages/Recipesearch";
import Navbar from "./components/Navbar";
import NavbarC from "./components/Navbar";
import Profile from "./pages/Profile";
import Settings from "./pages/Settings";

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
    <div className="w-screen h-screen bg-[#FFE8A3] flex flex-col justify-around no-scrollbar">
      {showNotice && (
        <Alert
          color="success"
          className="w-1/4 fixed bottom-4 left-4"
          onDismiss={handleNoticeClose}
        >
          <span className="text-xl font-body">{notice}</span>
        </Alert>
      )}

      <NavbarC />

      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route element={<ProtectedRoute />}>
          <Route path="/" element={<Homepage />} />
          <Route path="/recipesearch" element={<RecipeSearch />} />
          <Route path="/journal" element={<Journal />} />
          <Route path="/addmeal/:mealtype" element={<Addmeal />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/search" element={<RecipeSearch />} />
        </Route>
      </Routes>
      <div className="h-10 w-full bg-[#946746]  inset-x-0 bottom-0"></div>
    </div>
  );
}

export default App;
