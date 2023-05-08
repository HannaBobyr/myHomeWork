import React from "react";
import CartItem from "./cartItem";
import Modal from "Components/ModalWindow/Modal/Modal";
import Button from "Components/ModalWindow/Button/Button";
import { useSelector, useDispatch } from "react-redux";
import { handleWindow } from "store/actions/ModalWindow";
import { handleArrayCart } from "store/actions/handleCards";
function Cart() {
  const dispatch = useDispatch();
  const arrayCards = useSelector((state) => state.card.items);
  const { arrayCart, idDelete } = useSelector((state) => state.handleCards);
  const isOpenModal = useSelector((state) => state.modal.isOpen);
  function deleteCardCartBtn() {
    const filterArrayCart = arrayCart.filter((el) => el !== idDelete);
    dispatch(handleArrayCart(filterArrayCart));
    dispatch(handleWindow(false));
    localStorage.setItem("arrayCart", JSON.stringify(filterArrayCart));
  }
  return (
    <>
      <ul className="cards">
        {arrayCards.map((element, index) => (
          <CartItem key={index} card={element} />
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
                onClick={() => dispatch(handleWindow(false))}
                backgroundColor="rgb(90, 178, 255)"
              />
              <Button
                className="button"
                text="OK"
                onClick={deleteCardCartBtn}
                backgroundColor="rgb(90, 178, 255)"
              />
            </>
          }
          clickOnCloseButton={() => dispatch(handleWindow(false))}
        />
      )}
    </>
  );
}
export default Cart;
