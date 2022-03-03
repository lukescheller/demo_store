import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart } from "../features/cartSlice";
import styles from "./Cart.module.css";

const Shoppingcart = () => {
  const cartItems = useSelector((state) => state.customer_cart.cart);
  const total = useSelector((state) => state.customer_cart.total);
  const dispatch = useDispatch();
  const tax = 12.65;
  return (
    <div className={styles.wrapper}>
      <div className={styles.items}>
        {cartItems.map((i) => {
          return (
            <div className="card" style={{ width: "55%", margin: "10px" }}>
              <img
                className="card-img-top"
                src="https://media.istockphoto.com/vectors/security-shield-icon-with-long-shadow-on-white-background-vector-id643919736?k=20&m=643919736&s=170667a&w=0&h=SlFr944nhlLjTcOWMqSnj1LhVfZ3pcZd634zvjd1TMI="
                alt="Card cap"
              />
              <div className="card-body">
                <h5 className="card-title">{i.brand}</h5>
                <p className="card-text">Category: {i.category}</p>
                <p className="card-text">Description: n/a</p>
                <p className="card-text">{i.price}</p>
                <button
                  onClick={() => {
                    dispatch(removeFromCart(i.id));
                  }}
                  href="#"
                  className="btn btn-danger"
                  style={{ width: "100%" }}
                >
                  Remove
                </button>
              </div>
            </div>
          );
        })}
      </div>
      <div className={styles.bill}>
        <div>
          <h6>Thank you for shopping with us today!</h6>
        </div>
        <div className={styles.itemized}>
          {cartItems.map((i, index) => {
            return (
              <div className={styles.itemized_items}>
                <div>
                  {index + 1}. {i.brand}
                </div>
                <div>{i.price}</div>
              </div>
            );
          })}
          <div className={styles.itemized_items}>
            <div>tax</div>
            <div>${tax}</div>
          </div>
        </div>
        <div className={styles.bill_title}>
          <h1>Your total is: ${(total + tax).toFixed(2)}</h1>
          <button
            className="btn btn-success"
            style={{ width: "100%", margin: "10px" }}
          >
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Shoppingcart;
