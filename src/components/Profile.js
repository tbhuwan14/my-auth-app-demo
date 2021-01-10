import React from "react";

function Profile({ user }) {
  return (
    <div>
      <img src={user.picture} alt="1" />
      <h1>{user.nickname}</h1>
      <h3>{user.email}</h3>
    </div>
  );
}

export default Profile;
