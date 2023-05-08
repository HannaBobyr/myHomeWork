import React, { Component } from "react";
import "./Header.scss";
// import PropTypes from "prop-types";
class Header extends Component {
  render() {
    const { arrayElected, arrayCart } = this.props;
    return (
      <header className="header">
        <p className="logo">bedroom</p>
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
}
export default Header;
