import "./App.css";
import LoginButton from "./LoginButton";
import Signup from "./Signup";
import { useAuth0 } from "@auth0/auth0-react";

function App() {
  const { isAuthenticated } = useAuth0();
  return (
    <div className="App">{!isAuthenticated ? <LoginButton /> : <Signup />}</div>
  );
}

export default App;
