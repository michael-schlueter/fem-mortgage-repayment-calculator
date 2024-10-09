import userEvent from "@testing-library/user-event";
import { test, vi, describe } from "vitest";
import { render, screen } from "@testing-library/react";
import MortgageCalculator from "./MortgageCalculator";

describe("MortgageCalculator", () => {
  const setMonthlyPayment = vi.fn();
  const setTotalPayment = vi.fn();

  test("displays error messages when inputs are empty", async () => {
    const user = userEvent.setup();
    render(
      <MortgageCalculator
        setMonthlyPayment={setMonthlyPayment}
        setTotalPayment={setTotalPayment}
      />
    );

    // submits form without inputs
    const submitFormBtn = screen.getByRole("button", {
      name: /calculate payments/i,
    });
    await user.click(submitFormBtn);

    expect(
      screen.getByText(/mortgage amount is required/i)
    ).toBeInTheDocument();
    expect(screen.getByText(/mortgage term is required/i)).toBeInTheDocument();
    expect(screen.getByText(/mortgage rate is required/i)).toBeInTheDocument();
    expect(screen.getByText(/mortgage type is required/i)).toBeInTheDocument();
    expect(screen.getByText(/mortgage type is required/i)).toBeInTheDocument();
  });

  test("displays error messages when inputs are zero", async () => {
    const user = userEvent.setup();
    render(
      <MortgageCalculator
        setMonthlyPayment={setMonthlyPayment}
        setTotalPayment={setTotalPayment}
      />
    );

    // adds 0 to number inputs
    await userEvent.type(screen.getByLabelText(/mortgage amount/i), "0");
    await userEvent.type(screen.getByLabelText(/mortgage term/i), "0");
    await userEvent.type(screen.getByLabelText(/interest rate/i), "0");

    // submits form
    const submitFormBtn = screen.getByRole("button", {
      name: /calculate payments/i,
    });
    await user.click(submitFormBtn);

    expect(
      screen.getByText(/mortgage amount must be greater than zero/i)
    ).toBeInTheDocument();
    expect(
      screen.getByText(/mortgage term must be greater than zero/i)
    ).toBeInTheDocument();
    expect(
      screen.getByText(/interest rate must be greater than zero/i)
    ).toBeInTheDocument();
  });

  test("submits form when inputs are valid", async () => {
    const user = userEvent.setup();
    render(
      <MortgageCalculator
        setMonthlyPayment={setMonthlyPayment}
        setTotalPayment={setTotalPayment}
      />
    );

    // adds valid inputs
    await userEvent.type(screen.getByLabelText(/mortgage amount/i), "300000");
    await userEvent.type(screen.getByLabelText(/mortgage term/i), "25");
    await userEvent.type(screen.getByLabelText(/interest rate/i), "5");
    await userEvent.click(screen.getByLabelText(/repayment/i));

    // submits form
    const submitFormBtn = screen.getByRole("button", {
      name: /calculate payments/i,
    });
    await user.click(submitFormBtn);

    // onSubmit handler function applies state changes
    expect(setMonthlyPayment).toHaveBeenCalled();
    expect(setTotalPayment).toHaveBeenCalled();
  });
});
