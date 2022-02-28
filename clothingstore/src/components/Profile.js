import React from "react";
import { useSelector } from "react-redux";

const Profile = () => {
  const username = useSelector((state) => state.redux_state.user.username);
  return (
    <div>
      <h1>Hello {username}</h1>
    </div>
  );
};

export default Profile;
