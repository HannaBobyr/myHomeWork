import React from "react";

export const views = {
  cards: {
    list: {},
    item: {},
    img: {},
    elected: {},
  },
  list: {
    list: {
      width: "500px",
      display: "block",
    },
    item: {
      display: " flex",
      columnGap: "10px",
      marginBottom: "15px",
    },
    img: {
      borderBottomLeftRadius: "10px",
      borderTopRightRadius: 0,
    },
    elected: {
      top: 0,
      left: "-20px",
    },
  },
};

export const ViewsContext = React.createContext({
  view: views.cards,
  toggleListView: () => {},
  toggleCardsView: () => {},
});
