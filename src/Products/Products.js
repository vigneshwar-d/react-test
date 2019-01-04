import React, { Component } from "react";
import Product from "./Product/Product";
import Ad from "../Ad/Ad";
import Axios from "axios";

import styles from "./Products.css";

let productsURL = "http://localhost:3000/api/products?_page=0&_limit=25";
class Products extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasProducts: false,
      products: []
    };
  }

  getProducts = () => {
    console.log("getProducts fired");
    let products = Axios.get(productsURL).then(response => {
      this.setState({ hasProducts: true, products: response.data });
    });
  };

  sortHandler = () => {
    let sortByValue = document.getElementById("sortID").value;
    if (sortByValue === "size") {
      console.log("Sorting by size");
      productsURL =
        "http://localhost:3000/api/products?_page=0&_limit=25&_sort=size";
      this.getProducts();
    }
    if (sortByValue === "price") {
      console.log("Sorting by size");
      productsURL =
        "http://localhost:3000/api/products?_page=0&_limit=25&_sort=price";
      this.getProducts();
    }
    if (sortByValue === "id") {
      console.log("Sorting by size");
      productsURL =
        "http://localhost:3000/api/products?_page=0&_limit=25&_sort=id";
      this.getProducts();
    }
  };
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
          <select id="sortID" onChange={this.sortHandler}>
            <option default>--none--</option>
            <option value="size">Size</option>
            <option value="price">Price</option>
            <option value="id">Id</option>
          </select>
        </div>
        <div className={styles.Products}>{productsToShow}</div>
      </div>
    );
  }
}

export default Products;
