import React from "react";
import styles from "./Ad.css";
const ad = () => {
  let adPath = "http://localhost:3000/ads/?r=";
  let adKey = Math.floor(Math.random() * 1000);
  let fullAdPath = adPath + adKey;
  return (
    <div className={styles.Ad}>
      <p className={styles.Advertisement}>Advertisement</p>
      <img className={styles.Image} src={fullAdPath} />
    </div>
  );
};

export default ad;
