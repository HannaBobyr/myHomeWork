import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { handleWindow } from "store/actions/ModalWindow";
import { openModalDelete } from "store/actions/handleCards";
function CartItem({ card }) {
  const dispatch = useDispatch();
  const { name, price, img, article, color } = card;
  const [activeCard, setActiveCard] = useState(false);
  const { arrayCart } = useSelector((state) => state.handleCards);
  useEffect(() => {
    const filter = arrayCart.find((el) => el === article);
    if (filter) {
      setActiveCard(true);
    }
  }, [arrayCart, article]);
  function openModalDeleteBtn() {
    dispatch(handleWindow(true));
    dispatch(openModalDelete(article));
  }
  return (
    <>
      {activeCard && (
        <li className="card-item">
          <img src={img} alt="Logo" width="250px" height="170px" />
          <p className="card-item--name">{name}</p>
          <p className="card-item--price">price: {price}$</p>
          <p className="card-item--article">article: {article}</p>
          <p className="card-item--color">color: {color}</p>
          <button className="btn-delete" onClick={openModalDeleteBtn}>
            &#10006;
          </button>
        </li>
      )}
    </>
  );
}
export default CartItem;
