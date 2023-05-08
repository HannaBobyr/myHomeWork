import React, { useState, useEffect } from "react";
import "./CardItem.scss";
import Button from "../../ModalWindow/Button/Button";
import PropTypes from "prop-types";
function CardItem({ card, OpenModal, handleArrayElected, arrayElected }) {
  const { name, price, img, article, color } = card;
  const [isElected, setIsElected] = useState(false);
  useEffect(() => {
    const filter = arrayElected.find((el) => el === article);
    if (filter) {
      setIsElected(true);
    }
  }, [arrayElected, article]);
  const handleElectedBtn = () => {
    setIsElected(true);
    handleArrayElected(article);
  };
  return (
    <li className="card-item">
      <img src={img} alt="Logo" width="250px" height="170px" />
      <p className="card-item--name">{name}</p>
      <p className="card-item--price">price: {price}$</p>
      {isElected === false && (
        <button className="card-item--elect" onClick={handleElectedBtn}>
          &#9734;
        </button>
      )}
      {isElected === true && (
        <button className="card-item--elect"> &#9733;</button>
      )}
      <p className="card-item--article">article: {article}</p>
      <p className="card-item--color">color: {color}</p>
      <Button
        className="card-item--btn"
        onClick={() => OpenModal(article)}
        text="add to cart"
        backgroundColor="antiquewhite"
      />
    </li>
  );
}
export default CardItem;
CardItem.propTypes = {
  handleCounter: PropTypes.func,
  isOpenModal: PropTypes.func,
  card: PropTypes.shape({
    name: PropTypes.string,
    price: PropTypes.number,
    img: PropTypes.string,
    article: PropTypes.number,
    color: PropTypes.string,
  }),
};
