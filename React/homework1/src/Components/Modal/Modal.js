import React, { Component } from "react";
import "./modal.scss";
import Button from "../Button/Button";
class Modal extends Component {
  render() {
    const { isActive, header, closeButton, text, actions, clickOnCloseButton } =
      this.props;
    return (
      isActive && (
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
      )
    );
  }
}
export default Modal;
