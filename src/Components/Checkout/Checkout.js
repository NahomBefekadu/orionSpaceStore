import React, { forwardRef } from "react";
import "./Checkout.css";
import Subtotal from "../Subtotal/Subtotal";
import { useStateValue } from "../StateProvider/StateProvider";
import CheckoutProduct from "../CheckoutProduct/CheckoutProduct";
import FlipMove from "react-flip-move";
function Checkout() {
  const [{ basket, user }, dispatch] = useStateValue();

  return (
    <div>
      <div className="checkout">
        <div className="checkout__left">
          <img
            className="checkout__ad"
            src="https://storage.googleapis.com/pr-newsroom-wp/1/2020/02/Artboard-1-copy-8.png"
            alt="ad"
          />
          <div>
            <h3 className="checkout__title">Hello, {user?.email}</h3>
            <h2 className="checkout__title">Your Basket</h2>
            <FlipMove
              enterAnimation="accordionVertical"
              leaveAnimation="accordionVertical"
            >
              {basket.map((item) => (
                <FlipMove>
                  <CheckoutProduct
                    id={item.id}
                    title={item.title}
                    image={item.image}
                    price={item.price}
                    rating={item.rating}
                  />
                </FlipMove>
              ))}
            </FlipMove>
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
