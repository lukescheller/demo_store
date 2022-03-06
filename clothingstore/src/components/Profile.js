import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { axiosReload } from "../features/reduxSlice";

import styles from "./Profile.module.css";

const Profile = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(axiosReload());
  }, []);
  const navigate = useNavigate();
  const username = useSelector((state) => state.redux_state.user.username);
  const purchases = useSelector((state) => state.redux_state.user.purchases);
  let total = 0;
  for (let x = 0; x < purchases.length; x++) {
    let rmv = purchases[x].price.replace("$", "");
    let num = Number(rmv);
    total += num;
  }

  return (
    <div className={styles.wrapper}>
      <div
        className="p-3 mb-2 bg-primary text-white"
        style={{
          margin: "5px",
          border: "1px solid transparent",
          textAlign: "left",
          padding: "5px",
        }}
      >
        <h2>Hello {username} - Thank you for your support!</h2>
        <p>
          Total purchases: {purchases.length} items - ${total.toFixed(2)}
        </p>
        <button
          className="btn btn-success"
          onClick={() => navigate("/catalog")}
        >
          Return to Store
        </button>
      </div>
      <div className={styles.cards}>
        {purchases.map((p, index) => {
          return (
            <div className={styles.ind_card}>
              <div
                className="card p-3 mb-2 bg-light text-dark"
                style={{
                  margin: "10px",
                  border: "1px solid transparent",
                }}
              >
                <img className="card-img-top" src={p.img} alt="Card cap" />
                <div className="card-body">
                  <h5 className="card-title">{p.brand}</h5>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Profile;
