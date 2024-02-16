import React, { useState } from "react";
import axios from "axios";
import Header from "../components/Header";
import { loginFields } from "../constants/formFields";
import Input from "../components/Input";
import FormAction from "../components/FormAction";
import { useNavigate } from "react-router-dom";
import { Alert } from "flowbite-react";
import { useStateContext, useAuth } from "../states/StateContext";

const fields = loginFields;
let fieldsState = {};
fields.forEach((field) => (fieldsState[field.id] = ""));

const Login = () => {
  const { setShowNotice, setNotice } = useStateContext();
  const { login, isLoggedIn } = useAuth();

  const [formData, setFormData] = useState(fieldsState);
  const router = useNavigate();
  const [errorMessage, setErrorMessage] = useState("");
  const [showAlert, setShowAlert] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:3000/api/login",
        formData
      );

      sessionStorage.setItem("token", response.data.token);
      sessionStorage.setItem("user", JSON.stringify(response.data.user));
      setShowNotice(true);
      login();
      setNotice("Login Success!");
      router("/");
    } catch (error) {
      setErrorMessage(error.response.data.error);
      setShowAlert(true);
    }
  };

  return (
    <div className="h-full flex items-center justify-center py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <Header
          heading="Login to your account"
          paragraph="Don't have an account yet? "
          linkName="Signup"
          linkUrl="/signup"
        />

        {showAlert && (
          <Alert color="failure" onDismiss={() => setShowAlert(false)}>
            <span className="font-medium">{errorMessage}</span>
          </Alert>
        )}
        <form onSubmit={handleSubmit} className="mt-8 space-y-6">
          <div className="-space-y-px">
            {fields.map((field) => (
              <Input
                key={field.id}
                handleChange={handleChange}
                value={formData[field.id]}
                labelText={field.labelText}
                labelFor={field.labelFor}
                id={field.id}
                name={field.name}
                type={field.type}
                isRequired={field.isRequired}
                placeholder={field.placeholder}
              />
            ))}
          </div>

          <FormAction handleSubmit={handleSubmit} text="Login" />
        </form>
      </div>
    </div>
  );
};

export default Login;
