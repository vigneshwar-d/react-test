import React from "react";
import styles from "./Product.css";

const product = props => {
  const inlineStyle = {
    fontSize: props.size + "PX"
  };
  return (
    <div className={styles.Product}>
      <div className={styles.ID}>Product ID: {props.id}</div>
      <br />
      <div className={styles.ASCII} style={inlineStyle}>
        {props.face}
      </div>
      <br />
      <div className={styles.Size}>Size: {props.size}</div>
      <br />
      <div className={styles.Price}>${props.price}</div>
    </div>
  );
};

export default product;
