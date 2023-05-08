import { render, screen } from "@testing-library/react";
import Button from "Components/ModalWindow/Button/Button";
import renderer from "react-test-renderer";
describe("Test Buttons", () => {
  it("render button", () => {
    render(
      <Button
        className="button"
        text="OK"
        backgroundColor="rgb(90, 178, 255)"
      />
    );
    expect(screen.getByRole("button")).toBeInTheDocument();
  });
  it("button have class", () => {
    render(
      <Button
        className="button"
        text="OK"
        backgroundColor="rgb(90, 178, 255)"
      />
    );
    const btn = screen.getByRole("button");
    expect(btn).toHaveClass("button");
  });
  it("button have text", () => {
    render(
      <Button
        className="button"
        text="OK"
        backgroundColor="rgb(90, 178, 255)"
      />
    );
    const btn = screen.getByRole("button");
    expect(btn).toHaveTextContent(/ok/i);
  });
  it("Matches snapshot", () => {
    const tree = renderer
      .create(
        <Button
          className="button"
          text="OK"
          backgroundColor="rgb(90, 178, 255)"
        />
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
