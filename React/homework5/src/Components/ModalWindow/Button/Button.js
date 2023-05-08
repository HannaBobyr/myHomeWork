import React from "react";
import "./button.scss";
import PropTypes from "prop-types";
function Button({ text, onClick, className, backgroundColor }) {
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

export default Button;
Button.propTypes = {
  className: PropTypes.string,
  text: PropTypes.string,
  backgroundColor: PropTypes.string,
  onClick: PropTypes.func,
};
