import React, { Component } from "react";
import Product from "./Product/Product";
import Ad from "../Ad/Ad";
import LoadingGIF from "../LoadingGIF/loading.gif";
import Axios from "axios";

import styles from "./Products.css";

let loadProductsFrom = 0;
let loadUpto = 5;
let productsURL =
  "http://localhost:3000/api/products?_page=" +
  loadProductsFrom +
  "&_limit=" +
  loadUpto;

class Products extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loadingState: false,
      hasProducts: false,
      products: []
    };
  }

  componentDidMount() {
    console.log("Component did mount called...");
    window.onscroll = () => {
      var d = document.documentElement;
      var offset = d.scrollTop + window.innerHeight;
      var height = d.offsetHeight;
      if (offset === height) {
        this.getProducts();
      }
    };
  }
  getProducts = () => {
    console.log("getProducts fired");

    if (this.state.hasProducts === true) {
      this.setState({ loadingState: true });
      loadProductsFrom = loadProductsFrom + 5;
      loadUpto = loadUpto + 5;
      let products = Axios.get(
        "http://localhost:3000/api/products?_page=" +
          loadProductsFrom +
          "&_limit=5"
      ).then(response => {
        console.log("hasProducts is true");
        console.log(
          "Loading products from " + loadProductsFrom + "to" + loadUpto
        );
        let newDataForProducts = this.state.products.concat(response.data);
        this.setState({ products: newDataForProducts });
        console.log(this.state.products);
        this.setState({ loadingState: false });
      });
    } else {
      let products = Axios.get(
        "http://localhost:3000/api/products?_page=" +
          loadProductsFrom +
          "&_limit=5"
      ).then(response => {
        console.log("hasProducts is false");
        console.log(
          "Loading products from " + loadProductsFrom + "to" + loadUpto
        );
        this.setState({ hasProducts: true, products: response.data });
        console.log(this.state.products);
      });
    }
  };

  sortHandler = () => {
    let sortByValue = document.getElementById("sortID").value;
    if (sortByValue === "size") {
      productsURL =
        "http://localhost:3000/api/products?_page=" +
        loadProductsFrom +
        "&_limit=" +
        loadUpto +
        "&_sort=size";
      this.getProducts();
    }
    if (sortByValue === "price") {
      productsURL =
        "http://localhost:3000/api/products?_page=" +
        loadProductsFrom +
        "&_limit=" +
        loadUpto +
        "&_sort=price";
      this.getProducts();
    }
    if (sortByValue === "id") {
      productsURL =
        "http://localhost:3000/api/products?_page=" +
        loadProductsFrom +
        "&_limit=" +
        upto +
        "&_sort=id";
      this.getProducts();
    }
  };
  render() {
    console.log("Rendering...");
    // let bottomCode = (<div>
    //   let windowRelativeBottom = document.documentElement.getBoundingClientRect()
    //     .bottom;
    //   if (
    //     !(windowRelativeBottom > document.documentElement.clientHeight + 100)
    //   ) {
    //     this.getProducts();
    //   }
    //   </div>
    // );

    let productsToShow = null;
    if (this.state.hasProducts === false) {
      console.log("this.state.hasProducts is false");
      this.getProducts();
      productsToShow = <img className={styles.GIF} src={LoadingGIF} />;
    } else {
      console.log("this.state.hasProducts is true");
      productsToShow = this.state.products.map((item, index) => {
        if (index !== 0 && index % 20 === 0) {
          console.log("Rendering an ad...");
          return (
            <div>
              <br />
              <Ad />
              <br />
            </div>
          );
        } else {
          console.log("Rendering products...");
          return (
            <Product
              key={item.id}
              id={item.id}
              face={item.face}
              price={item.price}
              size={item.size}
              date={item.date}
            />
          );
          console.log("Item: " + item);
        }
      });
    }
    return (
      <div>
        {/*Dropdown for sort*/}
        <div className={styles.SortByDropDown}>
          Sort by:{" "}
          <select id="sortID" onChange={this.sortHandler}>
            <option default>--none--</option>
            <option value="size">Size</option>
            <option value="price">Price</option>
            <option value="id">Id</option>
          </select>
        </div>

        {/*Loading the products*/}
        <div ref="scrolled" className={styles.Products}>
          {productsToShow}
        </div>
        <br />
        {this.state.loadingState ? (
          <div className={styles.LoaderAtBottom}>
            <img className={styles.GIF} src={LoadingGIF} />
          </div>
        ) : (
          <div className={styles.LoaderAtBottom}>
            {/* <button onClick={this.getProducts} className={styles.LoadMore}>
              Load more
            </button> */}
            {/* {bottomCode} */}
          </div>
        )}
      </div>
    );
  }
}

export default Products;
