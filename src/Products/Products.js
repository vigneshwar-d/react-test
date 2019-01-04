import React, { Component } from "react";
import Product from "./Product/Product";
import Axios from "axios";

import styles from "./Products.css";

class Products extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasProducts: false,
      products: []
    };
  }

  getProducts() {
    let products = Axios.get(
      "http://localhost:3000/api/products?_page=1&_limit=51"
    ).then(response => {
      console.log(response.data);
      this.setState({ hasProducts: true, products: response.data });
    });
  }
  render() {
    let productsToShow = null;
    if (this.state.hasProducts === false) {
      this.getProducts();
    } else {
      productsToShow = this.state.products.map(item => {
        return (
          <Product
            key={item.id}
            id={item.id}
            face={item.face}
            price={item.price}
            size={item.size}
          />
        );
      });
    }
    return <div className={styles.Products}>{productsToShow}</div>;
  }
}

export default Products;
