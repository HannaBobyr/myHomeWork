export const OPEN_MODAL_ADDED = "OPEN_MODAL_ADDED";
export const OPEN_MODAL_DELETE = "OPEN_MODAL_DELETE";
export const CHANGE_ARRAY_CART = "CHANGE_ARRAY_CART";
export const CHANGE_ARRAY_ELETED = "CHANGE_ARRAY_ELETED";

export const openModalAdded = (article) => {
  return {
    type: OPEN_MODAL_ADDED,
    payload: article,
  };
};
export const openModalDelete = (article) => {
  return {
    type: OPEN_MODAL_DELETE,
    payload: article,
  };
};

export const handleArrayCart = (arrayCart) => {
  return {
    type: CHANGE_ARRAY_CART,
    payload: arrayCart,
  };
};

export const handleArrayElected = (arrayElected) => {
  return {
    type: CHANGE_ARRAY_ELETED,
    payload: arrayElected,
  };
};
