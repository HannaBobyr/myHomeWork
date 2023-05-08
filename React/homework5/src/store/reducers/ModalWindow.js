import { HANDLE_WINDOW } from "../actions/ModalWindow";
const initialState = {
  isOpen: false,
};
const ModalWindow = (state = initialState, { type, payload }) => {
  switch (type) {
    case HANDLE_WINDOW:
      return {
        ...state,
        isOpen: payload,
      };
    default:
      return state;
  }
};

export default ModalWindow;
