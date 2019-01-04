import React from "react";
import styles from "./Product.css";

const product = props => {
  const inlineStyle = {
    fontSize: props.size + "PX"
  };
  const price = "" + props.price + "";
  var output = [price.slice(0, 1), ".", price.slice(1)].join("");
  console.log(output);
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
      <div className={styles.Price}>${output}</div>
    </div>
  );
};

export default product;
