import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectCredentials } from "../store/signUpSlice";
import { axiosProfile } from "../store/signUpSlice";

const Profile = () => {
  const { credentials } = useSelector(selectCredentials);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(axiosProfile());
  }, []);

  return (
    <div>
      <h1>Hello {credentials.id.username}</h1>
    </div>
  );
};

export default Profile;
