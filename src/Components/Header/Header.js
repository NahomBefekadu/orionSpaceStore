import React from "react";
import "./Header.css";
import SearchSharpIcon from "@material-ui/icons/SearchSharp";
import { Button } from "@material-ui/core";
import { ShoppingBasketOutlined } from "@material-ui/icons";
function Header() {
  return (
    <div className="header">
      <img
        className="header__logo"
        src={"http://pngimg.com/uploads/mars_planet/mars_planet_PNG11.png"}
        alt="Marsplanet"
      />
      <div className="header__search">
        <input className="header__searchInput" type="text"></input>
        <SearchSharpIcon className="header__searchIcon" />
      </div>
      <div className="header__navbar">
        <div className="header__option">
          <span className="header__optionLineOne">Hello Guest</span>
          <span className="header__optionLineTwo">Sign In</span>
        </div>
        <div className="header__option">
          <span className="header__optionLineOne">Returns</span>
          <span className="header__optionLineTwo">& Orders</span>
        </div>
        <div className="header__option">
          <span className="header__optionLineOne">Your</span>
          <span className="header__optionLineTwo">Star</span>
        </div>
        <div className="header__optionBasket">
          <ShoppingBasketOutlined />
          <span className="header__optionLineTwo header__basketCount">0</span>
        </div>
      </div>
    </div>
  );
}

export default Header;
