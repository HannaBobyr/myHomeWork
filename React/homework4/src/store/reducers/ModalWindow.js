import { HANDLE_WINDOW } from "../actions/ModalWindow";
const initialState = {
  isOpen: false,
};
const ModalWindow = (state = initialState, action) => {
  switch (action.type) {
    case HANDLE_WINDOW:
      return {
        ...state,
        isOpen: action.payload,
      };
    default:
      return state;
  }
};

export default ModalWindow;
