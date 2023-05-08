import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { handleArrayElected } from "store/actions/handleCards";
function ElectedItem({ card }) {
  const dispatch = useDispatch();
  const { arrayElected } = useSelector((state) => state.handleCards);
  const { name, price, img, article, color } = card;
  const [activeCard, setActiveCard] = useState(false);
  useEffect(() => {
    arrayElected.forEach((element) => {
      if (element === article) {
        setActiveCard(true);
      }
    });
  }, [arrayElected, article]);
  function deleteCardEletedBtn() {
    setActiveCard(false);
    const filterArrayElected = arrayElected.filter((el) => el !== article);
    dispatch(handleArrayElected(filterArrayElected));
    localStorage.setItem("arrayElected", JSON.stringify(filterArrayElected));
  }
  return (
    <>
      {activeCard && (
        <li className="card-item">
          <img src={img} alt="Logo" width="250px" height="170px" />
          <p className="card-item--name">{name}</p>
          <p className="card-item--price">price: {price}$</p>
          <button className="btn-delete" onClick={deleteCardEletedBtn}>
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
