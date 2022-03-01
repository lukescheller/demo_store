import React, { useState } from "react";
import { useSelector } from "react-redux";
import Ind_item from "./Ind_item";
import StoreFilter from "./StoreFilter";
import styles from "./Store.module.css";

const Store = () => {
  const items = useSelector((state) => state.store.items);
  const [sort, setSorter] = useState(items);
  // console.log(sort);

  return (
    <div className={styles.wrapper}>
      <StoreFilter setSorter={setSorter} />
      <div className={styles.items}>
        {sort.map((i, index) => {
          return (
            <Ind_item
              brand={i.brand}
              category={i.category}
              price={i.price}
              key={index}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Store;
