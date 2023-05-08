import React from "react";
import { Link } from "react-router-dom";
import "./Header.scss";
import { useSelector } from "react-redux";
function Header() {
  const { arrayElected, arrayCart } = useSelector((state) => state.handleCards);
  return (
    <header className="header">
      <p className="logo">bedroom</p>
      <div className="pages">
        <Link to="/home" className="header-link">
          Home
        </Link>
        <Link to="/cart" className="header-link">
          Cart
        </Link>
        <Link to="/elect" className="header-link">
          Chosen
        </Link>
      </div>
      <div className="header-wrapper">
        <div className="wrapper-selected">
          <img src="./star.png" alt="star" width="20px" height="20px" />
          <p className="header-counter">{arrayElected.length}</p>
        </div>
        <div className="wrapper-selected">
          <img src="./cart.png" alt="cart" width="25px" height="25px" />
          <p className="header-counter">{arrayCart.length}</p>
        </div>
      </div>
    </header>
  );
}
export default Header;
