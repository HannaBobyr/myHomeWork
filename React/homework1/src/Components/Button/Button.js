import React, { Component } from "react";
import "./button.scss";
class Button extends Component {
  render() {
    const {
      text,
      backgroundColor,
      onClick,
      className,
      isActiveShare,
      isActiveDelete,
    } = this.props;
    return (
      !(isActiveShare || isActiveDelete) && (
        <button
          className={className}
          type="button"
          onClick={onClick}
          style={{ backgroundColor: `${backgroundColor}` }}
        >
          {text}
        </button>
      )
    );
  }
}
export default Button;
