import React from "react";
import "./modal.scss";
import Button from "../Button/Button";
import PropTypes from "prop-types";
function Modal({ header, closeButton, text, actions, clickOnCloseButton }) {
  return (
    <div className="Modal">
      <div className="Modal--content">
        {closeButton && (
          <Button
            className="button button--close"
            text="&#10006;"
            onClick={clickOnCloseButton}
            backgroundColor="transparent"
          />
        )}
        <h3 className="Modal--content-header">{header}</h3>
        <p>{text}</p>
        <div>{actions}</div>
      </div>
    </div>
  );
}
export default Modal;
Modal.propTypes = {
  header: PropTypes.string,
  closeButton: PropTypes.bool,
  text: PropTypes.string,
  actions: PropTypes.object,
  clickOnCloseButton: PropTypes.func,
};
