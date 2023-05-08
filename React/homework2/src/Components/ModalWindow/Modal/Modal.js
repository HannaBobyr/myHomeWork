import React, { Component } from "react";
import "./modal.scss";
import Button from "../Button/Button";
import PropTypes from "prop-types";
class Modal extends Component {
  static defaultProps = {
    header: "Do you want to adding the product to the cart?",
    text: "Are you sure",
    closeButton: true,
  };
  render() {
    const { header, closeButton, text, actions, clickOnCloseButton } =
      this.props;
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
}
export default Modal;
Modal.propTypes = {
  header: PropTypes.string,
  closeButton: PropTypes.bool,
  text: PropTypes.string,
  actions: PropTypes.object,
  clickOnCloseButton: PropTypes.func,
};
