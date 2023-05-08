import React from "react";
import CardList from "../../Components/Cards/CardList";
function Home({
  arrayCards,
  handleArrayElected,
  handleArrayCart,
  openModal,
  closeModal,
  isOpenModal,
  arrayElected,
}) {
  return (
    <>
      <CardList
        arrayCards={arrayCards}
        handleArrayElected={handleArrayElected}
        handleArrayCart={handleArrayCart}
        openModal={openModal}
        closeModal={closeModal}
        isOpenModal={isOpenModal}
        arrayElected={arrayElected}
      />
    </>
  );
}
export default Home;
