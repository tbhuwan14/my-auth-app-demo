import React from "react";
import Profile from "./Profile";

function Home({ user }) {
  return !user ? (
    <h1>Please Login To Access This Application</h1>
  ) : (
    <Profile user={user} />
  );
}

export default Home;
