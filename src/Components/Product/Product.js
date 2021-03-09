import React from "react";
import "./Product.css";

function Product() {
  return (
    <div className="product">
      <div className="product__info">
        <p>Space craft</p>
        <p className="product__price">
          <small>$</small>
          <strong>1999</strong>
        </p>
        <div className="product__rating">
          <p>⭐</p>
        </div>
      </div>
      <img
        className="product__image"
        src="https://i.pinimg.com/originals/74/e1/2f/74e12f9c0a3a2ec50dadd2524515e004.jpg"
        alt="space"
      />
      <button>Add to Basket</button>
    </div>
  );
}

export default Product;
