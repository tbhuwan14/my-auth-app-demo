import React from "react";
import { FormGroup, Label, Input } from "reactstrap";

const InputField = ({ label, name, type, data, errors, ...rest }) => {
  return (
    <FormGroup>
      <Label for={name}>{label}</Label>
      <Input type={type} name={name} id={name} value={data[name]} {...rest} />
      {errors[name] && <div className="alert alert-danger">{errors[name]}</div>}
    </FormGroup>
  );
};

InputField.defaultProps = {
  type: "text",
  errors: {},
};

export default InputField;
