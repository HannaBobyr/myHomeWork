import React, { useState, useEffect } from "react";
function CartItem({ card, arrayCart, openModalDelete }) {
  const { name, price, img, article, color } = card;
  const [activeCard, setActiveCard] = useState(false);
  useEffect(() => {
    const filter = arrayCart.find((el) => el === article);
    if (typeof filter === "undefined") {
      setActiveCard(true);
    }
  }, [arrayCart, article]);
  return (
    <>
      {activeCard && (
        <li className="card-item">
          <img src={img} alt="Logo" width="250px" height="170px" />
          <p className="card-item--name">{name}</p>
          <p className="card-item--price">price: {price}$</p>
          <p className="card-item--article">article: {article}</p>
          <p className="card-item--color">color: {color}</p>
          <button
            className="btn-delete"
            onClick={() => openModalDelete(article)}
          >
            &#10006;
          </button>
        </li>
      )}
    </>
  );
}
export default CartItem;
