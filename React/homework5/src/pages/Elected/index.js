import React from "react";
import ElectedItem from "./electedItem";
import { useSelector } from "react-redux";
function Elected() {
  const arrayCards = useSelector((state) => state.card.items);
  return (
    <ul className="cards">
      {arrayCards.map((element, index) => (
        <ElectedItem key={index} card={element} />
      ))}
    </ul>
  );
}
export default Elected;
