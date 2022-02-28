import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addToCart, removeFromCart } from "../features/cartSlice";

const Store = () => {
  const items = useSelector((state) => state.store.items);
  const dispatch = useDispatch();
  return (
    <div>
      {items.map((i, index) => {
        return (
          <div>
            <h1 key={index}>{i.brand}</h1>
            <button
              onClick={() => dispatch(addToCart(1))}
              type="button"
              className="btn btn-success"
            >
              Add to Cart
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default Store;
