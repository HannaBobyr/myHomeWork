import React, { Component } from "react";
import CardItem from "../CardItem";
import Modal from "../../ModalWindow/Modal/Modal";
import Button from "../../ModalWindow/Button/Button";
import PropTypes from "prop-types";
import "./CardList.scss";
class CardList extends Component {
  render() {
    const {
      arrayCards,
      handleArrayElected,
      openModal,
      isOpenModal,
      closeModal,
      handleArrayCart,
      arrayElected,
    } = this.props;
    return (
      <>
        <ul className="cards">
          {arrayCards.map((element, index) => (
            <CardItem
              key={index}
              card={element}
              OpenModal={openModal}
              handleArrayElected={handleArrayElected}
              arrayElected={arrayElected}
            />
          ))}
        </ul>
        {isOpenModal && (
          <Modal
            header="Do you want to adding the product to the cart?"
            actions={
              <>
                <Button
                  className="button"
                  text="Cancel"
                  onClick={closeModal}
                  backgroundColor="rgb(90, 178, 255)"
                />
                <Button
                  className="button"
                  text="OK"
                  onClick={handleArrayCart}
                  backgroundColor="rgb(90, 178, 255)"
                />
              </>
            }
            clickOnCloseButton={closeModal}
          />
        )}
      </>
    );
  }
}
export default CardList;
CardList.propTypes = {
  arrayCards: PropTypes.array,
};
