import React, { useState } from "react";
import axios from "axios";
import Header from "../components/Header";
import Input from "../components/Input";
import FormAction from "../components/FormAction";
import { useNavigate } from "react-router-dom";
import { signupFields } from "../constants/formFields";
import { Alert } from "flowbite-react";
import { useStateContext } from "../states/StateContext";

const fields = signupFields;
let fieldsState = {};

fields.forEach((field) => (fieldsState[field.id] = ""));

const Signup = () => {
  const { setShowNotice, setNotice } = useStateContext();
  const [formData, setFormData] = useState(fieldsState);
  const router = useNavigate();
  const [errorMessages, setErrorMessages] = useState([]);
  const [showAlert, setShowAlert] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.password != formData.password_confirmation) {
      setErrorMessages(...errorMessages, ["Passwords do not match!"]);
      setShowAlert(true);
      return;
    }
    try {
      const response = await axios.post("http://localhost:3000/api/signup", {
        user: formData,
      });
      setShowNotice(true);
      setNotice("Account Successfully Created!");
      router("/login");
    } catch (error) {
      console.error(error.response);
      setErrorMessages(error.response.data.errors);
      setShowAlert(true);
    }
  };

  return (
    <div className="h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <Header
          heading="Create an account"
          paragraph="Already have an account? "
          linkName="Login"
          linkUrl="/login"
        />
        {showAlert && (
          <Alert color="failure" onDismiss={() => setShowAlert(false)}>
            {errorMessages.map((errorMessage) => (
              <ul key={errorMessage}>{errorMessage}</ul>
            ))}
          </Alert>
        )}
        <form onSubmit={handleSubmit} className="mt-8 space-y-6">
          <div className="">
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
          <FormAction handleSubmit={handleSubmit} text="Register" />
        </form>
      </div>
    </div>
  );
};

export default Signup;
