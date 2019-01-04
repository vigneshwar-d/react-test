import React from "react";
import styles from "./Product.css";

const product = props => {
  //Style for ASCII face's size
  const inlineStyle = {
    fontSize: props.size + "PX"
  };

  //Format in USD
  const price = "" + props.price + "";
  const output = [price.slice(0, 1), ".", price.slice(1)].join("");

  //Handling Date
  const theDate = new Date(props.date);
  const time = theDate.getTime();
  const current = new Date().getTime();
  const msPerMinute = 60 * 1000;
  const msPerHour = msPerMinute * 60;
  const msPerDay = msPerHour * 24;
  const msPerMonth = msPerDay * 30;
  const msPerYear = msPerDay * 365;
  const elapsed = current - time;
  let toDisplay;
  if (elapsed < msPerMinute) {
    toDisplay = Math.round(elapsed / 1000) + " seconds ago";
  } else if (elapsed < msPerHour) {
    toDisplay = Math.round(elapsed / msPerMinute) + " minutes ago";
  } else if (elapsed < msPerDay) {
    toDisplay = Math.round(elapsed / msPerHour) + " hours ago";
  } else if (elapsed < msPerMonth) {
    toDisplay = Math.round(elapsed / msPerDay) + " days ago";
  } else if (elapsed < msPerYear) {
    toDisplay = Math.round(elapsed / msPerMonth) + " months ago";
  } else {
    toDisplay = Math.round(elapsed / msPerYear) + " years ago";
  }

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
      <br />
      <div className={styles.Date}>added {toDisplay}</div>
    </div>
  );
};

export default product;
