import React, { useState, useEffect } from "react";
function ElectedItem({ card, arrayElected, deleteCardEleted }) {
  const { name, price, img, article, color } = card;
  const [activeCard, setActiveCard] = useState(false);
  useEffect(() => {
    arrayElected.forEach((element) => {
      if (element === article) {
        setActiveCard(true);
      }
    });
  }, [arrayElected, article]);
  return (
    <>
      {activeCard && (
        <li className="card-item">
          <img src={img} alt="Logo" width="250px" height="170px" />
          <p className="card-item--name">{name}</p>
          <p className="card-item--price">price: {price}$</p>
          <button
            className="btn-delete"
            onClick={() => {
              deleteCardEleted(article);
              setActiveCard(false);
            }}
          >
            &#10006;
          </button>
          <p className="card-item--article">article: {article}</p>
          <p className="card-item--color">color: {color}</p>
        </li>
      )}
    </>
  );
}
export default ElectedItem;
