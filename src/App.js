import React from "react";
import Header from "./Header/Header";
import IntroText from "./IntroText/IntroText";
import Products from "./Products/Products";

import styles from "./App.css";
const app = () => {
  return (
    <div className={styles.App}>
      <Header />
      <IntroText />
      <Products />
    </div>
  );
};

export default app;
