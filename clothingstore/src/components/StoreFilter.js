import React, { useState } from "react";
import { useSelector } from "react-redux";
import styles from "./StoreFilter.module.css";
import categorySort from "../helperFunctions/categorySort";
import priceSort from "../helperFunctions/priceSort";
import topicSort from "../helperFunctions/topicSort";

const StoreFilter = (props) => {
  const items = useSelector((state) => state.store.items);
  const sorted_categories = categorySort(items);
  const sorted_prices = priceSort(items);

  const [border, setBorder] = useState(false);
  const [min, setMin] = useState(0);
  const [max, setMax] = useState(0);
  const [keys, setKeys] = useState([]);

  //onChange -topic
  const topicSelect = (e) => {
    setKeys(topicSort(e.target.value));
  };

  const filtered = items.filter((i) => {
    let rmv_$ = i.price.replace("$", "");
    let num = Number(rmv_$);
    return keys.includes(i.category) && num >= min && num <= max;
  });

  return (
    <div>
      <div className={styles.wrapper}>
        <div style={{ marginTop: "10px" }}>
          <div
            style={{
              borderBottom: "1px solid black",
              margin: "5px",
              textAlign: "left",
            }}
          >
            <h4>Categories</h4>
          </div>
          <div
            style={{ display: "grid", overflowY: "scroll", height: "350px" }}
          >
            {sorted_categories.map((c, index) => {
              return (
                <button
                  className="btn btn-warning"
                  style={{ margin: "5px" }}
                  value={c}
                  onClick={(e) => {
                    topicSelect(e);
                    setBorder(!border);
                  }}
                >
                  {c}
                </button>
              );
            })}
          </div>
        </div>
        <div
          style={{
            borderBottom: "1px solid black",
            margin: "5px",
            textAlign: "left",
          }}
        >
          <h4>Price Range</h4>
        </div>
        <div style={{ width: "100%" }}>
          Min:
          <input
            type="number"
            id="points"
            name="points"
            step="5"
            placeholder="min"
            max={sorted_prices[1]}
            min={sorted_prices[0]}
            style={{ width: "100%" }}
            onChange={(e) => {
              setMin(e.target.value);
            }}
          />
          Max:
          <input
            type="number"
            id="points"
            name="points"
            step="5"
            placeholder="max"
            max={sorted_prices[1]}
            min={sorted_prices[0]}
            style={{ width: "100%", marginTop: "5px" }}
            onChange={(e) => {
              setMax(e.target.value);
            }}
          />
        </div>
        <div>
          <button
            className="btn btn-success"
            style={{ margin: "5px" }}
            onClick={() => {
              props.setSorter(filtered);
              // this solved the having to double click issue....
              <link to="catalog" />;
            }}
          >
            Filter Results
          </button>
        </div>
      </div>
    </div>
  );
};

export default StoreFilter;
