import React, { useState } from "react";
import Validator from "../utils/LoginValidator";
import getUser from "./authServices";
import { Redirect } from "react-router-dom";
import webAuth from "./auth0Api/WebAuth";
import LoginForm from "./LoginForm";

const LogIn = () => {
  const [userData, setUserData] = useState({
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

  const handleLogin = (e) => {
    e.preventDefault();

    const newErrors = validate();
    setErrors(newErrors);
    if (Object.keys(newErrors).length !== 0) return;

    webAuth.client.login(
      {
        realm: "my-auth-app-demo",
        username: userData.email,
        password: userData.password,
      },
      (err, authResult) => {
        if (err) {
          setErrors({ password: err.description });
          console.log(err);
          return;
        }
        if (authResult) {
          localStorage.setItem("token", authResult.idToken);
          window.location = "/";
        }
      }
    );
  };

  if (getUser()) return <Redirect to="/" />;

  return (
    <LoginForm
      errors={errors}
      userData={userData}
      onLogin={handleLogin}
      handleChange={handleChange}
    />
  );
};

export default LogIn;
