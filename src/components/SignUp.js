import React, { useState } from "react";
import Validator from "../utils/SignupValidator";
import getUser from "./authServices";
import { Redirect } from "react-router-dom";
import response from "./Responses";
import webAuth from "./auth0Api/WebAuth";
import SignupForm from "./SignupForm";

const SignUp = (props) => {
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = { ...errors };
    for (let key in userData) {
      newErrors[key] = Validator(key, userData[key]);
      if (!newErrors[key]) delete newErrors[key];
    }
    return newErrors;
  };

  const handleChange = ({ target: input }) => {
    const { name, value } = input;
    const newUserData = { ...userData };
    newUserData[name] = value;
    setUserData(newUserData);

    const newErrors = { ...errors };
    newErrors[name] = Validator(name, newUserData[name]);
    setErrors(newErrors);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = validate();
    setErrors(newErrors);
    if (Object.keys(newErrors).length !== 0) return;
    webAuth.signup(
      {
        connection: "my-auth-app-demo",
        name: userData.name,
        email: userData.email,
        password: userData.password,
        user_metadata: { plan: "silver", team_id: "a111" },
      },
      function (err) {
        if (err) {
          console.log(err.message);
          return alert(response.signupFailedResponse);
        }
        props.history.replace("/login");
        return alert(response.signupSuccessfulResponse);
      }
    );
  };

  if (getUser()) return <Redirect to="/" />;

  return (
    <SignupForm
      errors={errors}
      userData={userData}
      onSignup={handleSubmit}
      handleChange={handleChange}
    />
  );
};

export default SignUp;
