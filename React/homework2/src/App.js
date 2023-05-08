import "./App.scss";
import React, { Component } from "react";
import Header from "./Components/Header";
import CardList from "./Components/Cards/CardList";
class App extends Component {
  state = {
    arrayCards: [],
    arrayCart: localStorage.getItem("arrayCart")
      ? JSON.parse(localStorage.getItem("arrayCart"))
      : [],
    arrayElected: localStorage.getItem("arrayElected")
      ? JSON.parse(localStorage.getItem("arrayElected"))
      : [],
    isOpenModal: false,
    id: 0,
  };
  componentDidMount() {
    fetch("./cards.json")
      .then((res) => res.json())
      .then((data) => {
        this.setState({
          arrayCards: data,
        });
      });
  }
  componentDidUpdate() {
    localStorage.setItem(
      "arrayElected",
      JSON.stringify(this.state.arrayElected)
    );
    localStorage.setItem("arrayCart", JSON.stringify(this.state.arrayCart));
  }
  openModal = (article) => {
    this.setState({ isOpenModal: true, id: article });
  };
  closeModal = () => {
    this.setState({ isOpenModal: false });
  };
  handleArrayCart = () => {
    const { arrayCart, id } = this.state;
    const checkId = arrayCart.find((el) => el === id);
    if (typeof checkId === "undefined") {
      arrayCart.push(id);
      this.setState({ arrayCart: arrayCart });
    }
    this.setState({ isOpenModal: false });
  };
  handleArrayElected = (id) => {
    const { arrayElected } = this.state;
    arrayElected.push(id);
    this.setState({ arrayElected: arrayElected });
  };

  render() {
    return (
      <>
        <Header
          arrayElected={this.state.arrayElected}
          arrayCart={this.state.arrayCart}
        />
        <CardList
          arrayCards={this.state.arrayCards}
          handleArrayElected={this.handleArrayElected}
          handleArrayCart={this.handleArrayCart}
          openModal={this.openModal}
          closeModal={this.closeModal}
          isOpenModal={this.state.isOpenModal}
          arrayElected={this.state.arrayElected}
        />
      </>
    );
  }
}
export default App;
