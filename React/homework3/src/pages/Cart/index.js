import React from "react";
import CartItem from "./cartItem";
import Modal from "../../Components/ModalWindow/Modal/Modal";
import Button from "../../Components/ModalWindow/Button/Button";
function Cart({
  arrayCards,
  arrayCart,
  deleteCardCart,
  openModalDelete,
  isOpenModal,
  closeModal,
}) {
  return (
    <>
      <ul className="cards">
        {arrayCards.map((element, index) => (
          <CartItem
            key={index}
            card={element}
            arrayCart={arrayCart}
            openModalDelete={openModalDelete}
          />
        ))}
      </ul>
      {isOpenModal && (
        <Modal
          header="Do you want to delete this product?"
          text="Are you sure?"
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
                onClick={deleteCardCart}
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
export default Cart;
