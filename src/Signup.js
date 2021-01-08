import React, { useState } from "react";
import auth0 from "auth0-js";

function Signup() {
  const [signData, setSignData] = useState({ email: "", password: "" });

  const handleChange = (e) => {
    const { id, value } = e.target;
    const newSignData = { ...signData };
    if (id === "email") {
      newSignData.email = value;
    } else if (id === "pass") {
      newSignData.password = value;
    }
    setSignData(newSignData);
  };
  var webAuth = new auth0.WebAuth({
    domain: "tribhuvan14.us.auth0.com",
    clientID: "ghiBXZqelmoTLEg9QsdjK4B73xmzrJqZ",
  });
  const handleSignup = (e) => {
    e.preventDefault();
    webAuth.signup(
      {
        connection: "my-auth-app-demo",
        email: signData.email,
        password: signData.password,
        user_metadata: { plan: "silver", team_id: "a111" },
      },
      function (err) {
        if (err) return alert("Something went wrong: " + err.message);
        return alert("success signup without login!");
      }
    );
  };
  return (
    <div>
      <h2>Signup Database Connection</h2>
      <input
        onChange={handleChange}
        id="email"
        className="signup-email"
        value={signData.email}
      />
      <input
        onChange={handleChange}
        id="pass"
        type="password"
        className="signup-password"
        value={signData.password}
      />
      <input
        onClick={handleSignup}
        type="button"
        className="signup-db"
        value="Signup!"
      />
    </div>
  );
}

export default Signup;
