import React, { useState, useEffect } from "react";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Elected from "./pages/Elected";
import Cart from "./pages/Cart";
import Header from "./Components/Header";
import { Navigate, Routes, Route } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { fetchHttp } from "./store/actions/CardList";
import { ViewsContext, views } from "context/view-context";
function App() {
  const { items, isFetching, isError, error } = useSelector(
    (state) => state.card
  );
  const [state, setState] = useState({
    view: views.cards,
    toggleCardsView: toggleCardsView,
    toggleListView: toggleListView,
  });
  function toggleListView() {
    setState((prevState) => ({ ...prevState, view: views.list }));
  }

  function toggleCardsView() {
    setState((prevState) => ({ ...prevState, view: views.cards }));
  }
  const dispatch = useDispatch();
  useEffect(() => {
    fetch("./cards.json");
    dispatch(fetchHttp());
  }, [dispatch]);
  if (isFetching === true) {
    return <h3>Loarding...</h3>;
  }
  if (isError === true) {
    return <h3>Oop..., {error}</h3>;
  }
  if (items.length === 0) {
    return <h3>No cards</h3>;
  }
  return (
    <>
      <Header />
      <ViewsContext.Provider value={state}>
        <Routes>
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/home" element={<Home />} />
          <Route path="/elect" element={<Elected />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </ViewsContext.Provider>
    </>
  );
}
export default App;
