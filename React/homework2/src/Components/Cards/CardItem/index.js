import React, { Component } from "react";
import "./CardItem.scss";
import Button from "../../ModalWindow/Button/Button";
import PropTypes from "prop-types";
class CardItem extends Component {
  state = {
    isElected: false,
  };
  handleElectedBtn = () => {
    this.setState({ isElected: true });
  };
  componentDidMount() {
    const { card, arrayElected } = this.props;
    const { article } = card;
    arrayElected.forEach((element) => {
      if (element === article) {
        this.setState({ isElected: true });
      }
    });
  }
  render() {
    const { card, OpenModal, handleArrayElected } = this.props;
    const { name, price, img, article, color } = card;
    return (
      <li className="card-item">
        <img src={img} alt="Logo" width="250px" height="170px" />
        <p className="card-item--name">{name}</p>
        <p className="card-item--price">price: {price}$</p>
        {this.state.isElected === false && (
          <button
            className="card-item--elect"
            onClick={() => {
              this.handleElectedBtn();
              handleArrayElected(article);
            }}
          >
            &#9734;
          </button>
        )}
        {this.state.isElected === true && (
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
