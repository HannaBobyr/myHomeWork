import React from "react";
import "./Cart.scss";
import CartItem from "./cartItem";
import Modal from "Components/ModalWindow/Modal/Modal";
import Button from "Components/ModalWindow/Button/Button";
import { useSelector, useDispatch } from "react-redux";
import { handleWindow } from "store/actions/ModalWindow";
import { handleArrayCart } from "store/actions/handleCards";
import SignupForm from "./CartForm";
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
    <div className="cart-wrapper">
      <ul className="cards--cart">
        {arrayCards.map((element, index) => (
          <CartItem key={index} card={element} />
        ))}
      </ul>
      {isOpenModal && (
        <Modal
          header="Do you want to adding the product to the cart?"
          text="Are you sure"
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
      {arrayCart.length !== 0 && <SignupForm />}
    </div>
  );
}
export default Cart;
