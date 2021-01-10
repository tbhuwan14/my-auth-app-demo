import React from "react";
import { Button, Form } from "reactstrap";
import InputField from "./common/InputField";

function SignupForm({ handleChange, onSignup, errors, userData }) {
  return (
    <Form onSubmit={onSignup} className="col-4 mx-auto form">
      <InputField
        label="Name"
        name="name"
        data={userData}
        placeholder="Enter Your Name"
        onChange={handleChange}
        errors={errors}
      />

      <InputField
        label="Email"
        name="email"
        data={userData}
        placeholder="Enter Your Email"
        onChange={handleChange}
        errors={errors}
      />
      {/* TODO need add regex for email verification, disable password option until email validate*/}
      <InputField
        label="Password"
        type="password"
        name="password"
        data={userData}
        placeholder="Enter Your Password"
        onChange={handleChange}
        errors={errors}
      />
      <Button color="primary">SignUp</Button>
    </Form>
  );
}

export default SignupForm;
