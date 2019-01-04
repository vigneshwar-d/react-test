import React from "react";
import Header from "./Header/Header";
import IntroText from "./IntroText/IntroText";
import Products from "./Products/Products";
const app = () => {
  return (
    <div>
      <Header />
      <IntroText />
      <Products />
      <p>Test from App.js</p>
    </div>
  );
};

export default app;
