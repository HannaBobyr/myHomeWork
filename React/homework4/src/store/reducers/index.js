import CardList from "./CardList";
import { combineReducers } from "redux";
import ModalWindow from "./ModalWindow";
import HandleCards from "./handleCards";
const reducer = combineReducers({
  card: CardList,
  modal: ModalWindow,
  handleCards: HandleCards,
});

export default reducer;
