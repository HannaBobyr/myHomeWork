import React, { Component } from "react";
import "./button.scss";
import PropTypes from "prop-types";
class Button extends Component {
  render() {
    const { text, onClick, className, backgroundColor } = this.props;
    return (
      <button
        className={className}
        type="button"
        onClick={onClick}
        style={{ backgroundColor: `${backgroundColor}` }}
      >
        {text}
      </button>
    );
  }
}
export default Button;
Button.propTypes = {
  className: PropTypes.string,
  text: PropTypes.string,
  backgroundColor: PropTypes.string,
  onClick: PropTypes.func,
};
