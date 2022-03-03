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

  const [min, setMin] = useState(0);
  const [max, setMax] = useState(0);
  const [keys, setKeys] = useState([]);

  //this shouldn't effect anything...
  //this makes 0 sense.
  const [borderxyz, setBorderX] = useState(false);
  const [test, setTest] = useState(false);

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
        <div className={styles.selected_header}>
          <h4>Selected Categories</h4>
        </div>
        <div className={styles.selected}>
          {keys.map((k) => {
            // DON'T FORGET THE return STATEMENT
            return <p style={{ margin: "5px" }}>{k}</p>;
          })}
        </div>
        <div style={{ marginTop: "10px" }}>
          <div
            style={{
              borderBottom: "1px solid black",
              margin: "5px",
              textAlign: "left",
            }}
          >
            <h4>1. Categories (required)</h4>
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
                    // why is this here - I don't get it
                    // nothing works when this isn't here
                    // this makes the selected catagories work as well as clicking once on the filter button
                    setTest(!test);
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
          <h4>2. Price Range (required)</h4>
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
            style={{ margin: "25px" }}
            onClick={() => {
              props.setSorter(filtered);
              // this solved the having to double click issue.... guess it didn't
              // <link to="catalog" />;
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
