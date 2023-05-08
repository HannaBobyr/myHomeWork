import {
  OPEN_MODAL_ADDED,
  OPEN_MODAL_DELETE,
  CHANGE_ARRAY_CART,
  CHANGE_ARRAY_ELETED,
} from "../actions/handleCards";

const initialState = {
  idAdd: 0,
  idDelete: 0,
  arrayCart: localStorage.getItem("arrayCart")
    ? JSON.parse(localStorage.getItem("arrayCart"))
    : [],
  arrayElected: localStorage.getItem("arrayElected")
    ? JSON.parse(localStorage.getItem("arrayElected"))
    : [],
};
const HandleCards = (state = initialState, { type, payload }) => {
  switch (type) {
    case OPEN_MODAL_ADDED:
      return { ...state, idAdd: payload };
    case OPEN_MODAL_DELETE:
      return { ...state, idDelete: payload };
    case CHANGE_ARRAY_CART:
      return {
        ...state,
        arrayCart: payload,
      };
    case CHANGE_ARRAY_ELETED:
      return { ...state, arrayElected: payload };
    default:
      return state;
  }
};

export default HandleCards;
