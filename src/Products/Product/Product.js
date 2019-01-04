import React from "react";

const product = props => {
  return (
    <div>
      ID: {props.id}
      <br />
      ASCII: {props.face}
      <br />
      PRICE: {props.price}
    </div>
  );
};

export default product;
