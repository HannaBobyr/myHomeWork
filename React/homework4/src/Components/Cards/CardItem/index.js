import React, { useState, useEffect } from "react";
import "./CardItem.scss";
import Button from "Components/ModalWindow/Button/Button";
import { handleArrayElected, openModalAdded } from "store/actions/handleCards";
import { useSelector, useDispatch } from "react-redux";
import { handleWindow } from "store/actions/ModalWindow";
function CardItem({ card }) {
  const { name, price, img, article, color } = card;
  const { arrayElected } = useSelector((state) => state.handleCards);
  const [isElected, setIsElected] = useState(false);
  const dispatch = useDispatch();
  useEffect(() => {
    const filter = arrayElected.find((el) => el === article);
    if (filter) {
      setIsElected(true);
    }
  }, [arrayElected, article]);
  const handleArrayElectedBtn = () => {
    setIsElected(true);
    const checkId = arrayElected.find((el) => el === article);
    if (!checkId) {
      // arrayElected.push(article);
      const newArrayElected = [...arrayElected, article];
      dispatch(handleArrayElected(newArrayElected));
      localStorage.setItem("arrayElected", JSON.stringify(newArrayElected));
    }
  };
  function OpenModal() {
    dispatch(handleWindow(true));
    dispatch(openModalAdded(article));
  }
  return (
    <li className="card-item">
      <img src={img} alt="Logo" width="250px" height="170px" />
      <p className="card-item--name">{name}</p>
      <p className="card-item--price">price: {price}$</p>
      {isElected === false && (
        <button className="card-item--elect" onClick={handleArrayElectedBtn}>
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
        onClick={OpenModal}
        text="add to cart"
        backgroundColor="antiquewhite"
      />
    </li>
  );
}
export default CardItem;
