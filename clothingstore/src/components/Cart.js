import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart, axiosCheckout } from "../features/cartSlice";
import { useNavigate } from "react-router-dom";
import styles from "./Cart.module.css";

const Shoppingcart = () => {
  const cartItems = useSelector((state) => state.customer_cart.cart);
  const total = useSelector((state) => state.customer_cart.total);
  const loading = useSelector((state) => state.customer_cart.loading);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  let tax = ((total / 100) * 6.875).toFixed(2);
  tax = Number(tax);

  return (
    <div className={styles.wrapper}>
      <div className={styles.items}>
        {cartItems.length === 0
          ? "Your cart is empty.."
          : cartItems.map((i) => {
              return (
                <div
                  className="card p-3 mb-2 bg-light text-dark"
                  style={{ width: "100%", margin: "10px" }}
                >
                  <img className="card-img-top" src={i.img} alt="Card cap" />
                  <div className="card-body">
                    <h5 className="card-title">{i.brand}</h5>
                    <p className="card-text">Category: {i.category}</p>
                    <p className="card-text">Description: {i.desc}</p>
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
          {total > 0 ? <h6>Thank you for shopping with us today!</h6> : ""}
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
          {total > 0 ? (
            <div className={styles.itemized_items}>
              <div>tax</div>
              <div>${tax}</div>
            </div>
          ) : (
            ""
          )}
        </div>
        <div className={styles.bill_title}>
          {total > 0 ? <h1>Total: ${(total + tax).toFixed(2)}</h1> : ""}
          <button
            className="btn btn-success"
            disabled={cartItems.length === 0 ? true : false}
            style={{
              width: "100%",
              margin: "10px",
            }}
            onClick={() => {
              dispatch(axiosCheckout({ checkout: cartItems }));
            }}
          >
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Shoppingcart;
