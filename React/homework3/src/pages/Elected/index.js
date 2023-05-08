import React from "react";
import ElectedItem from "./electedItem";
function Elected({ arrayCards, arrayElected, deleteCardEleted }) {
  return (
    <ul className="cards">
      {arrayCards.map((element, index) => (
        <ElectedItem
          key={index}
          card={element}
          arrayElected={arrayElected}
          deleteCardEleted={deleteCardEleted}
        />
      ))}
    </ul>
  );
}
export default Elected;
