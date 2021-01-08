import React, { useState } from "react";
import auth0 from "auth0-js";
import params from "./auth0-param.json";
import "./login.css";

const LoginButton = () => {
  var webAuth = new auth0.WebAuth({
    domain: params.domain,
    clientID: params.clientId,
    audience: params.apiAudience,
    redirectUri: params.callbackUrl,
    scope: params.scope,
    responseType: "token id_token",
  });

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onLogout = (e) => {
    e.preventDefault();
    webAuth.logout({
      returnTo: "http://localhost:3000",
      client_id: "ghiBXZqelmoTLEg9QsdjK4B73xmzrJqZ",
    });
  };

  const onLogin = (e) => {
    e.preventDefault();
    login(email, password);
  };

  const login = (username, password) => {
    console.log(webAuth);
    webAuth.client.login(
      {
        realm: "my-auth-app-demo",
        username,
        password,
      },
      (err, authResult) => {
        if (err) {
          alert("Error", err.description);
          return;
        }
        if (authResult) {
          window.origin = window.location.origin;
        }
      }
    );

    // webAuth.parseHash(window.location.hash, function (err, authResult) {
    //   if (err) {
    //     return console.log(err);
    //   }
    //   webAuth.client.userInfo(authResult.accessToken, function (err, user) {
    //     return console.log(authResult.appState);
    //   });
    // });

    // webAuth.authorize({
    //   connection: "my-auth-app-demo",
    // });
  };
  return (
    <div className="wrapper">
      <div className="form-wrapper">
        <form>
          <label>
            Email
            <input
              type="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            ></input>
          </label>
          <label>
            Password
            <input
              type="password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            ></input>
          </label>
          <button onClick={onLogin}>login</button>
          <button onClick={onLogout}>logout</button>
        </form>
      </div>
    </div>
  );
};

export default LoginButton;
