import jwtDecode from "jwt-decode";

export default function getUser() {
  try {
    return jwtDecode(localStorage.getItem("token"));
  } catch (error) {
    return null;
  }
}
