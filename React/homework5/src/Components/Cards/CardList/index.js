import React from "react";
import CardItem from "../CardItem";
import Modal from "Components/ModalWindow/Modal/Modal";
import Button from "Components/ModalWindow/Button/Button";
import "./CardList.scss";
import { useSelector, useDispatch } from "react-redux";
import { handleWindow } from "store/actions/ModalWindow";
import { handleArrayCart } from "store/actions/handleCards";
function CardList() {
  const dispatch = useDispatch();
  const { arrayCart, idAdd } = useSelector((state) => state.handleCards);
  const arrayCards = useSelector((state) => state.card.items);
  const isOpenModal = useSelector((state) => state.modal.isOpen);
  function handleArrayCartBtn() {
    const checkId = arrayCart.find((el) => el === idAdd);
    if (!checkId) {
      const newArrayCart = [...arrayCart, idAdd];
      localStorage.setItem("arrayCart", JSON.stringify(newArrayCart));
      dispatch(handleArrayCart(newArrayCart));
    }
    dispatch(handleWindow(false));
  }
  return (
    <>
      <ul className="cards">
        {arrayCards.map((element, index) => (
          <CardItem key={index} card={element} />
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
                onClick={handleArrayCartBtn}
                backgroundColor="rgb(90, 178, 255)"
              />
            </>
          }
        />
      )}
    </>
  );
}
export default CardList;
