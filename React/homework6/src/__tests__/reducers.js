import ModalWindow from "store/reducers/ModalWindow";
import HandleCards from "store/reducers/handleCards";
import CardList from "store/reducers/CardList";
import {
  OPEN_MODAL_ADDED,
  OPEN_MODAL_DELETE,
  CHANGE_ARRAY_CART,
  CHANGE_ARRAY_ELETED,
} from "store/actions/handleCards";
import {
  FETCH_CARDS_SUCCESS,
  FETCH_CARDS_BEGIN,
  FETCH_CARDS_FAIL,
} from "store/actions/CardList";
import { HANDLE_WINDOW } from "store/actions/ModalWindow";
describe("Test CardList Reducers", () => {
  it("fetch cards begin", () => {
    const initialState = {
      items: [],
      isFetching: false,
      isError: false,
      error: null,
    };
    const action = { type: FETCH_CARDS_BEGIN };
    const newState = CardList(initialState, action);
    expect(newState.isFetching).toBe(true);
  });
  it("fetch cards success", () => {
    const initialState = {
      items: [],
      isFetching: false,
      isError: false,
      error: null,
    };
    const CARDS = [
      {
        name: "Bedroom Loft",
        price: 123,
        article: 1,
      },
      {
        name: "Bedroom Modena Domani ",
        price: 19,
        article: 2,
      },
      {
        name: "Youth Aphrodite",
        price: 8,
        article: 3,
      },
    ];
    const action = {
      type: FETCH_CARDS_SUCCESS,
      payload: CARDS,
    };
    const newState = CardList(initialState, action);
    expect(newState.items.length).toBe(3);
  });
  it("fetch cards fail", () => {
    const initialState = {
      items: [],
      isFetching: false,
      isError: false,
      error: null,
    };
    const action = {
      type: FETCH_CARDS_FAIL,
      payload: "we didn't find cards",
    };
    const newState = CardList(initialState, action);
    expect(newState.error).toBe("we didn't find cards");
  });
});

describe("Test ModalWindow Reducers", () => {
  it("is open modal window", () => {
    const initialState = {
      isOpen: false,
    };
    const action = { type: HANDLE_WINDOW, payload: true };
    const newState = ModalWindow(initialState, action);
    expect(newState.isOpen).toBe(true);
  });
});

describe("Test HandleCards Reducers", () => {
  it("add idAdd", () => {
    const initialState = {
      idAdd: 0,
      idDelete: 0,
      arrayCart: [],
      arrayElected: [],
    };
    const action = { type: OPEN_MODAL_ADDED, payload: 1 };
    const newState = HandleCards(initialState, action);
    expect(newState.idAdd).toBe(1);
  });
  it("add idDelete", () => {
    const initialState = {
      idAdd: 0,
      idDelete: 0,
      arrayCart: [],
      arrayElected: [],
    };
    const action = { type: OPEN_MODAL_DELETE, payload: 1 };
    const newState = HandleCards(initialState, action);
    expect(newState.idDelete).toBe(1);
  });
  it("handle arrayCart", () => {
    const initialState = {
      idAdd: 0,
      idDelete: 0,
      arrayCart: [],
      arrayElected: [],
    };
    const action = { type: CHANGE_ARRAY_CART, payload: [1, 2, 3] };
    const newState = HandleCards(initialState, action);
    expect(newState.arrayCart.length).toBe(3);
  });
  it("handle arrayElected", () => {
    const initialState = {
      idAdd: 0,
      idDelete: 0,
      arrayCart: [],
      arrayElected: [],
    };
    const action = { type: CHANGE_ARRAY_ELETED, payload: [23, 2, 3, 54, 3] };
    const newState = HandleCards(initialState, action);
    expect(newState.arrayElected.length).toBe(5);
  });
});
