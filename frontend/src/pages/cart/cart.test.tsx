import React from "react";
import { fireEvent, render, screen } from "../../utils/test-utils";
import { BrowserRouter } from "react-router-dom";
import Cart from "./Cart";
import userEvent from "@testing-library/user-event";

describe("Given the cart component", () => {
  beforeEach(() => {
    render(
      <BrowserRouter>
        <Cart />
      </BrowserRouter>
    );
  });
  test("Then the title cart should be rendered", () => {
    expect(screen.getByText(/Cart/i)).toBeInTheDocument();
    expect(screen.getByText(/Total price/i)).toBeInTheDocument();
  });
});

describe("Given the cart component", () => {
  const preloadedState = {
    cart: {
      balloons: [
        {
          balloonId: {
            _id: "test",
            type: "test-test",
            package: "tt",
            img_url: "",
            color: "test3",
          },
        },
      ],
      amount: 2,
    },
    user: {
      email: "holi@",
      password: "123",
      cart: "hola",
    },
  };

  beforeEach(() => {
    render(
      <BrowserRouter>
        <Cart />{" "}
      </BrowserRouter>,
      { preloadedState }
    );
  });
  test("Then the type test-test, should be rendered", () => {
    expect(screen.getByText(/test-test/i)).toBeInTheDocument();
    userEvent.click(screen.getByTestId("menos"));
    userEvent.click(screen.getByTestId("plus"));
    userEvent.click(screen.getByTestId("trash"));
    userEvent.click(screen.getByText(/pay/i));
  });
});
