import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "../features/cartSlice";
import styles from "./Ind_item.module.css";

const Ind_item = (props) => {
  const dispatch = useDispatch();
  return (
    <div className="card" style={{ width: "21.5rem", margin: "10px" }}>
      <img
        className="card-img-top"
        src="https://media.istockphoto.com/vectors/security-shield-icon-with-long-shadow-on-white-background-vector-id643919736?k=20&m=643919736&s=170667a&w=0&h=SlFr944nhlLjTcOWMqSnj1LhVfZ3pcZd634zvjd1TMI="
        alt="Card cap"
      />
      <div className="card-body">
        <h5 className="card-title">{props.brand}</h5>
        <p className="card-text">{props.category}</p>
        <p className="card-text">{props.price}</p>
        <button
          onClick={() =>
            dispatch(
              addToCart({
                brand: props.brand,
                category: props.category,
                price: props.price,
              })
            )
          }
          href="#"
          className="btn btn-success"
        >
          Add To Cart
        </button>
      </div>
    </div>
  );
};

export default Ind_item;
