import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../features/cartSlice";
import styles from "./Ind_item.module.css";
import { v4 as uuidv4 } from "uuid";

const Ind_item = (props) => {
  const dispatch = useDispatch();
  return (
    <div className={styles.store_item}>
      <div
        className="card p-3 mb-2 bg-light text-dark store_item"
        style={{
          width: "95%",
          margin: "25px",
          border: "1px solid transparent",
        }}
      >
        <img className="card-img-top" src={props.img} alt="Card cap" />
        <div className="card-body">
          <h5 className="card-title">{props.brand}</h5>
          <p className="card-text">
            <strong>Category:</strong> {props.category}
          </p>
          <p className="card-text" style={{ textAlign: "left" }}>
            {props.desc}
          </p>
          <p className="card-text">{props.price}</p>
          <button
            onClick={() =>
              dispatch(
                addToCart({
                  id: uuidv4(),
                  brand: props.brand,
                  category: props.category,
                  img: props.img,
                  desc: props.desc,
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
    </div>
  );
};

export default Ind_item;
