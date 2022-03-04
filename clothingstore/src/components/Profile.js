import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { axiosReload } from "../features/reduxSlice";

const Profile = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(axiosReload());
  }, []);

  const username = useSelector((state) => state.redux_state.user.username);
  const purchases = useSelector((state) => state.redux_state.user.purchases);
  let total = 0;
  for (let x = 0; x < purchases.length; x++) {
    let rmv = purchases[x].price.replace("$", "");
    let num = Number(rmv);
    total += num;
  }

  return (
    <div>
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
      </div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr 1fr",
          border: "1px solid transparent",
          margin: "5px",
        }}
      >
        {purchases.map((p) => {
          return (
            <div
              className="card p-3 mb-2 bg-light text-dark"
              style={{
                margin: "10px",
                border: "1px solid transparent",
              }}
            >
              <img
                className="card-img-top"
                src="https://media.istockphoto.com/vectors/security-shield-icon-with-long-shadow-on-white-background-vector-id643919736?k=20&m=643919736&s=170667a&w=0&h=SlFr944nhlLjTcOWMqSnj1LhVfZ3pcZd634zvjd1TMI="
                alt="Card cap"
              />
              <div className="card-body">
                <h5 className="card-title">{p.brand}</h5>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Profile;
