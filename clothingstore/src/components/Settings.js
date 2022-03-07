import React from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import styles from "./Settings.module.css";
import axios from "axios";

const Settings = () => {
  const navigate = useNavigate();
  const id = useSelector((state) => state.redux_state.user._id);
  console.log(id);

  return (
    <div style={{ height: "650px" }}>
      <div
        style={{
          borderBottom: "1px solid black",
          margin: "15px",
          textAlign: "left",
        }}
      >
        <h1 style={{ margin: "5px" }}>Settings</h1>
      </div>
      <div style={{ textAlign: "left", margin: "15px" }}>
        <p>
          Pellentesque habitant morbi tristique senectus et netus et malesuada
          fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae,
          ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam
          egestas semper. Aenean ultricies mi vitae est. Mauris placerat
          eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra.
          Vestibulum erat wisi, condimentum sed, commodo vitae, ornare sit amet,
          wisi. Aenean fermentum, elit eget tincidunt condimentum, eros ipsum
          rutrum orci, sagittis tempus lacus enim ac dui. Donec non enim in
          turpis pulvinar facilisis. Ut felis. Praesent dapibus, neque id cursus
          faucibus, tortor neque egestas augue, eu vulputate magna eros eu erat.
          Aliquam erat volutpat. Nam dui mi, tincidunt quis, accumsan porttitor,
          facilisis luctus, metus
        </p>
      </div>
      <div>
        <button
          className="btn btn-warning"
          style={{ margin: "5px " }}
          onClick={() => {
            navigate("/");
            window.location.reload();
          }}
        >
          Logout
        </button>
        <button
          className="btn btn-danger"
          style={{ margin: "5px" }}
          onClick={() => {
            axios.delete("/deleteaccount", { data: { id } });
            navigate("/");
            window.location.reload();
          }}
        >
          Delete Account
        </button>
      </div>
    </div>
  );
};

export default Settings;
