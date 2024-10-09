import userEvent from "@testing-library/user-event";
import { test, vi, describe } from "vitest";
import { render, screen } from "@testing-library/react";
import MortgageCalculator from "./MortgageCalculator";

describe("MortgageCalculator Input Validation", () => {
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

  test("clears all form fields when 'Clear All' button is clicked", async () => {
    const user = userEvent.setup();
    render(
      <MortgageCalculator
        setMonthlyPayment={setMonthlyPayment}
        setTotalPayment={setTotalPayment}
      />
    );

    // fills in the form fields
    const mortgageAmountInput = screen.getByLabelText(/mortgage amount/i);
    const mortgageTermInput = screen.getByLabelText(/mortgage term/i);
    const mortgageRateInput = screen.getByLabelText(/interest rate/i);
    const repaymentRadioButton = screen.getByLabelText(/repayment/i);

    await user.type(mortgageAmountInput, "300000");
    await user.type(mortgageTermInput, "25");
    await user.type(mortgageRateInput, "5");
    await user.click(repaymentRadioButton);

    // clicks the 'Clear All' button
    const clearButton = screen.getByRole("button", { name: /clear all/i });
    await user.click(clearButton);

    // input fields are cleared
    expect(mortgageAmountInput).toHaveValue(null);
    expect(mortgageTermInput).toHaveValue(null);
    expect(mortgageRateInput).toHaveValue(null);
    expect(repaymentRadioButton).not.toBeChecked();
  });
});

describe("MortgageCalculator Keyboard Navigation", () => {
  const setMonthlyPayment = vi.fn();
  const setTotalPayment = vi.fn();

  test("allows tab navigation through form fields", async () => {
    const user = userEvent.setup();
    render(
      <MortgageCalculator
        setMonthlyPayment={setMonthlyPayment}
        setTotalPayment={setTotalPayment}
      />
    );

    // tabs through the form fields
    await user.tab();
    expect(screen.getByRole("button", { name: /clear all/i })).toHaveFocus();
    await user.tab();
    expect(screen.getByLabelText(/mortgage amount/i)).toHaveFocus();
    await user.tab();
    expect(screen.getByLabelText(/mortgage term/i)).toHaveFocus();
    await user.tab();
    expect(screen.getByLabelText(/interest rate/i)).toHaveFocus();
    await user.tab();
    expect(screen.getByLabelText(/repayment/i)).toHaveFocus();
    await user.tab();
    expect(
      screen.getByRole("button", { name: /calculate payments/i })
    ).toHaveFocus();
  });

  test("submits form using Enter key", async () => {
    const user = userEvent.setup();
    render(
      <MortgageCalculator
        setMonthlyPayment={setMonthlyPayment}
        setTotalPayment={setTotalPayment}
      />
    );

    // fills out the form
    await user.type(screen.getByLabelText(/mortgage amount/i), "300000");
    await user.type(screen.getByLabelText(/mortgage term/i), "25");
    await user.type(screen.getByLabelText(/interest rate/i), "5");
    await user.click(screen.getByLabelText(/repayment/i));

    // focuses on the submit button and presses enter
    const submitFornBtn = screen.getByRole("button", {
      name: /calculate payments/i,
    });
    submitFornBtn.focus();
    await user.keyboard("{Enter}");

    // Form has been submitted
    expect(setMonthlyPayment).toHaveBeenCalled();
    expect(setTotalPayment).toHaveBeenCalled();
  });

  test("clears form inputs using Enter key", async () => {
    const user = userEvent.setup();
    render(
      <MortgageCalculator
        setMonthlyPayment={setMonthlyPayment}
        setTotalPayment={setTotalPayment}
      />
    );

    // fills out the form
    await user.type(screen.getByLabelText(/mortgage amount/i), "300000");
    await user.type(screen.getByLabelText(/mortgage term/i), "25");
    await user.type(screen.getByLabelText(/interest rate/i), "5");
    await user.click(screen.getByLabelText(/repayment/i));

    // submits form
    await user.click(
      screen.getByRole("button", { name: /calculate payments/i })
    );

    // focuses 'Clear All' button and presses enter
    await user.click(screen.getByRole("button", { name: /clear all/i }));

    // input fields are cleared

    expect(screen.getByLabelText(/mortgage amount/i)).toHaveValue(null);
    expect(screen.getByLabelText(/mortgage term/i)).toHaveValue(null);
    expect(screen.getByLabelText(/interest rate/i)).toHaveValue(null);
    expect(screen.getByLabelText(/repayment/i)).not.toBeChecked();
  });
});
