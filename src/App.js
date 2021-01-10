import React, { useEffect, useState } from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import LogIn from "./components/LogIn";
import SignUp from "./components/SignUp";
import "./App.css";
import NavigationBar from "./components/NavigationBar";
import getUser from "./components/authServices";
import Logout from "./components/LogOut";

function App() {
  const [user, setUser] = useState(null);
  useEffect(() => {
    setUser(getUser());
  }, []);
  return (
    <div className="App">
      <NavigationBar user={user} />
      <Switch>
        <Route
          path="/"
          exact
          render={(props) => <Home {...props} user={user} />}
        />
        <Route path="/login" component={LogIn} />
        <Route path="/logout" component={Logout} />
        <Route path="/signup" component={SignUp} />
      </Switch>
    </div>
  );
}

export default App;
