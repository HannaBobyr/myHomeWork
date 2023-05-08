import { render, screen, fireEvent } from "@testing-library/react";
import Modal from "Components/ModalWindow/Modal/Modal";
describe("Test Modal Window", () => {
  it("render modal window", () => {
    render(
      <Modal
        header="Do you want to adding the product to the cart?"
        text="Are you sure"
      />
    );
  });
  it("modal window should have header ", () => {
    render(
      <Modal
        header="Do you want to adding the product to the cart?"
        text="Are you sure"
      />
    );
    const header = screen.getByText(
      "Do you want to adding the product to the cart?"
    ).textContent;
    expect(header).toBe("Do you want to adding the product to the cart?");
  });
  it("should have clicked button", () => {
    const mockFunction = jest.fn();
    render(
      <Modal
        header="Do you want to adding the product to the cart?"
        text="Are you sure"
        actions={<button onClick={mockFunction}>Cancel</button>}
      />
    );
    const button = screen.getByText(/cancel/i);
    fireEvent.click(button);
  });
});
