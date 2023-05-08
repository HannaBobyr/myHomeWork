import renderer from "react-test-renderer";
import CardItem from "Components/Cards/CardItem";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import { render } from "@testing-library/react";

const middlewares = [];
const mockStore = configureStore(middlewares);
const card = {
  name: "Bedroom Loft",
  price: 123,
  img: "https://meb-online.ru/upload/resize_cache/iblock/009/530_530_140cd750bba9870f18aada2478b24840a/spalnya_teana_variant_2.png",
  article: 1,
  color: "milky",
};
describe("Test Card Items", () => {
  it("should render", () => {
    const store = mockStore({
      handleCards: { arrayElected: [1, 2, 3] },
    });
    render(
      <Provider store={store}>
        <CardItem card={card} />
      </Provider>
    );
  });
  it("Matches snapshot", () => {
    const store = mockStore({
      handleCards: { arrayElected: [1, 2, 3] },
    });
    const tree = renderer
      .create(
        <Provider store={store}>
          <CardItem card={card} />
        </Provider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
