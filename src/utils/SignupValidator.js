import errorObj from "./Error";
import pattern from "./Patterns";

export default function Validator(name, value) {
  if (name === "name" && !value.trim()) {
    return errorObj.nameValidationError;
  }
  if (name === "email" && !pattern.emailPattern.test(value)) {
    return errorObj.emailValidationError;
  }
  // To check a password between 6 to 20 characters which contain at least one numeric digit, one uppercase and one lowercase letter
  if (name === "password" && !pattern.passPattern.test(value)) {
    return errorObj.passwordSignupValidationError;
  }

  return;
}
