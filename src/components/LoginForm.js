import React from "react";
import { Button, Form } from "reactstrap";
import InputField from "./common/InputField";

function LoginForm({ handleChange, onLogin, errors, userData }) {
  return (
    <Form className="col-4 mx-auto form">
      <InputField
        label="Email"
        name="email"
        data={userData}
        placeholder="Enter Your Email"
        onChange={handleChange}
        errors={errors}
      />

      <InputField
        label="Password"
        type="password"
        name="password"
        placeholder="Enter Your Password"
        onChange={handleChange}
        errors={errors}
        data={userData}
      />
      <Button onClick={onLogin} color="primary">
        LogIn
      </Button>
    </Form>
  );
}

export default LoginForm;
