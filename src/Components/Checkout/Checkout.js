import React from "react";
import "./Checkout.css";
import Subtotal from "../Subtotal/Subtotal";
function Checkout() {
  return (
    <div>
      <div className="checkout">
        <div className="checkout__left">
          <img
            className="checkout__ad"
            src="https://www.niemanlab.org/images/spotify-ad-insertion.png"
            alt="ad"
          />
          <div>
            <h2 className="checkout__title">Your Basket</h2>
            {/**item */}
          </div>
        </div>
        <div className="checkout__right">
          <Subtotal />
        </div>
      </div>
    </div>
  );
}

export default Checkout;
