import {
  FETCH_CARDS_SUCCESS,
  FETCH_CARDS_BEGIN,
  FETCH_CARDS_FAIL,
} from "../actions/CardList";
const initialState = {
  items: [],
  isFetching: false,
  isError: false,
  error: null,
};
const CardList = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CARDS_BEGIN:
      return { ...state, isFetching: true };
    case FETCH_CARDS_SUCCESS:
      return { ...state, isFetching: false, items: action.payload };
    case FETCH_CARDS_FAIL:
      return {
        ...state,
        isFetching: false,
        isError: true,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default CardList;
