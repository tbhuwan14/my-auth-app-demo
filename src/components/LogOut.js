import webAuth from "./auth0Api/WebAuth";

export default function Logout() {
  localStorage.removeItem("token");
  webAuth.logout({
    returnTo: "http://localhost:3000",
    client_id: "ghiBXZqelmoTLEg9QsdjK4B73xmzrJqZ",
  });
}
