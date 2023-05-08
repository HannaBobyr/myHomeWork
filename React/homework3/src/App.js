import React, { useState, useEffect } from "react";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Elected from "./pages/Elected";
import Cart from "./pages/Cart";
import Header from "./Components/Header";
import { Navigate, Routes, Route } from "react-router-dom";
function App() {
  const [arrayCards, setArrayCards] = useState([]);
  useEffect(() => {
    fetch("./cards.json")
      .then((res) => res.json())
      .then((data) => {
        setArrayCards(data);
      });
  }, []);
  const [idAdd, setIdAdd] = useState(0);
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [idDelete, setIdDelete] = useState(0);
  const [arrayCart, setArrayCart] = useState(
    localStorage.getItem("arrayCart")
      ? JSON.parse(localStorage.getItem("arrayCart"))
      : []
  );
  const [arrayElected, setArrayElected] = useState(
    localStorage.getItem("arrayElected")
      ? JSON.parse(localStorage.getItem("arrayElected"))
      : []
  );
  const openModalAdd = (article) => {
    setIsOpenModal(true);
    setIdAdd(article);
  };
  const openModalDelete = (article) => {
    setIsOpenModal(true);
    setIdDelete(article);
  };
  const closeModal = () => {
    setIsOpenModal(false);
  };
  const handleArrayCart = () => {
    const checkId = arrayCart.find((el) => el === idAdd);
    if (typeof checkId === "undefined") {
      arrayCart.push(idAdd);
      setArrayCart(arrayCart);
      localStorage.setItem("arrayCart", JSON.stringify(arrayCart));
    }
    setIsOpenModal(false);
  };
  const handleArrayElected = (id) => {
    const checkId = arrayElected.find((el) => el === id);
    if (typeof checkId === "undefined") {
      arrayElected.push(id);
      setArrayElected(arrayElected);
      localStorage.setItem("arrayElected", JSON.stringify(arrayElected));
    }
  };
  const deleteCardEleted = (id) => {
    const filterArrayElected = arrayElected.filter((el) => el !== id);
    setArrayElected(filterArrayElected);
    localStorage.setItem("arrayElected", JSON.stringify(filterArrayElected));
  };
  const deleteCardCart = () => {
    const filterArrayCart = arrayCart.filter((el) => el !== idDelete);
    setArrayCart(filterArrayCart);
    setIsOpenModal(false);
    localStorage.setItem("arrayCart", JSON.stringify(filterArrayCart));
  };
  return (
    <>
      <Header arrayElected={arrayElected} arrayCart={arrayCart} />
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route
          path="/home"
          element={
            <Home
              arrayCards={arrayCards}
              handleArrayElected={handleArrayElected}
              handleArrayCart={handleArrayCart}
              openModal={openModalAdd}
              closeModal={closeModal}
              isOpenModal={isOpenModal}
              arrayElected={arrayElected}
            />
          }
        />
        <Route
          path="/elect"
          element={
            <Elected
              arrayCards={arrayCards}
              arrayElected={arrayElected}
              deleteCardEleted={deleteCardEleted}
            />
          }
        />
        <Route
          path="/cart"
          element={
            <Cart
              arrayCards={arrayCards}
              arrayCart={arrayCart}
              deleteCardCart={deleteCardCart}
              openModalDelete={openModalDelete}
              closeModal={closeModal}
              isOpenModal={isOpenModal}
            />
          }
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}
export default App;
