import React from "react";
import "./Home.css";
import Product from "../Product/Product";
function Home() {
  return (
    <div className="Home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://i.pinimg.com/originals/4a/ad/05/4aad052e750140294cec7d3b2b317853.jpg"
          alt="banner"
        />

        <div className="home__row">
          <Product />
          <Product />
        </div>

        <div className="home__row">
          <Product />
          <Product />
          <Product />
          <Product />
        </div>

        <div className="home__row">
          <Product />
        </div>
      </div>
    </div>
  );
}

export default Home;
