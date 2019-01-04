import React, { Component } from "react";
import Product from "./Product/Product";
import Ad from "../Ad/Ad";
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
      "http://localhost:3000/api/products?_page=0&_limit=25"
    ).then(response => {
      this.setState({ hasProducts: true, products: response.data });
    });
  }
  render() {
    let productsToShow = null;
    if (this.state.hasProducts === false) {
      this.getProducts();
    } else {
      productsToShow = this.state.products.map((item, index) => {
        if (index !== 0 && index % 20 === 0) {
          return (
            <div>
              <br />
              <Ad />
              <br />
            </div>
          );
        } else {
          return (
            <Product
              key={item.id}
              id={item.id}
              face={item.face}
              price={item.price}
              size={item.size}
            />
          );
        }
      });
    }
    return (
      <div>
        <div className={styles.SortByDropDown}>
          Sort by:{" "}
          <select>
            <option default>--none--</option>
            <option>Size</option>
            <option>Price</option>
            <option>Id</option>
          </select>
        </div>
        <div className={styles.Products}>{productsToShow}</div>
      </div>
    );
  }
}

export default Products;
