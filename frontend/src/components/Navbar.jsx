import { Avatar, Dropdown, Navbar } from "flowbite-react";
import Logo from "../assets/logo.svg";
import { useAuth, useStateContext } from "../states/StateContext";
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const NavbarC = () => {
  const { isLoggedIn, logout } = useAuth();
  const { setNotice, setShowNotice } = useStateContext();
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const router = useNavigate();

  useEffect(() => {
    if (isLoggedIn) {
      const user = JSON.parse(sessionStorage.getItem("user"));

      setEmail(user.email);
      setName(user.first_name + " " + user.last_name);
    }
  }, []);

  const handleLogout = async (e) => {
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
      <Navbar fluid rounded className="bg-yellow-300">
        <Navbar.Brand href="/">
          <img
            src={Logo}
            className="mr-3 h-6 sm:h-9"
            alt="Flowbite React Logo"
          />
          <span className="self-center whitespace-nowrap text-2xl font-semibold font-heading dark:text-white">
            NutriPal
          </span>
        </Navbar.Brand>
        <div className="flex md:order-2">
          {isLoggedIn ? (
            <>
              <Dropdown
                arrowIcon={false}
                inline
                label={
                  <Avatar
                    alt="User settings"
                    img="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                    rounded
                  />
                }
              >
                <Dropdown.Header>
                  <span className="block text-sm">{name}</span>
                  <span className="block truncate text-sm font-medium">
                    {email}
                  </span>
                </Dropdown.Header>
                <Dropdown.Item>Dashboard</Dropdown.Item>
                <Dropdown.Item>Settings</Dropdown.Item>
                <Dropdown.Item>Earnings</Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item onClick={handleLogout}>Sign out</Dropdown.Item>
              </Dropdown>
              <Navbar.Toggle />
            </>
          ) : (
            <>
              <a href="login" className="underline font-body text-xl mx-2">
                Login
              </a>
              |
              <a href="signup" className="underline font-body text-xl mx-2">
                Signup
              </a>
            </>
          )}
        </div>
      </Navbar>
      <Navbar fluid rounded className="flex items-center bg-[#CAD456]">
        <Navbar.Collapse>
          <Navbar.Link className="font-body text-xl" href="#">
            Home
          </Navbar.Link>
          <Navbar.Link className="font-body text-xl" href="#">
            Search
          </Navbar.Link>
          <Navbar.Link className="font-body text-xl" href="journal">
            Journal
          </Navbar.Link>
          <Navbar.Link className="font-body text-xl" href="#">
            Profile
          </Navbar.Link>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};

export default NavbarC;
