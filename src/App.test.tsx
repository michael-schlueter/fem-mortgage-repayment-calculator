import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";

test("displays correct results for repayment mortgage", async () => {
  const user = userEvent.setup();
  render(<App />);

  // fills out the form
  await user.type(screen.getByLabelText(/mortgage amount/i), "300000");
  await user.type(screen.getByLabelText(/mortgage term/i), "25");
  await user.type(screen.getByLabelText(/interest rate/i), "5.25");
  await userEvent.click(screen.getByLabelText(/repayment/i));

  // submits the form
  const submitFormBtn = screen.getByRole("button", {
    name: /calculate payments/i,
  });
  await user.click(submitFormBtn);

  // results are correct
  const monthlyPaymentResult = screen.getByTestId("monthly-payment-result");
  const totalPaymentResult = screen.getByTestId("total-payment-result");
  expect(monthlyPaymentResult).toHaveTextContent("£1,797.74");
  expect(totalPaymentResult).toHaveTextContent("£539,322.94");
});

test("displays correct results for interest-only mortgage", async () => {
  const user = userEvent.setup();
  render(<App />);

  // fills out the form
  await user.type(screen.getByLabelText(/mortgage amount/i), "300000");
  await user.type(screen.getByLabelText(/mortgage term/i), "25");
  await user.type(screen.getByLabelText(/interest rate/i), "5.25");
  await userEvent.click(screen.getByLabelText(/interest only/i));

  // submits the form
  const submitFormBtn = screen.getByRole("button", {
    name: /calculate payments/i,
  });
  await user.click(submitFormBtn);

  // results are correct
  const monthlyPaymentResult = screen.getByTestId("monthly-payment-result");
  const totalPaymentResult = screen.getByTestId("total-payment-result");
  expect(monthlyPaymentResult).toHaveTextContent("£1,312.50");
  expect(totalPaymentResult).toHaveTextContent("£393,750.00");
});

test("displays no results if inputs are invalid", async () => {
    const user = userEvent.setup();
    render(<App />);
  
    // submits the form
    const submitFormBtn = screen.getByRole("button", {
      name: /calculate payments/i,
    });
    await user.click(submitFormBtn);
  
    // no results are displayed
    const monthlyPaymentResult = screen.queryByTestId("monthly-payment-result");
    const totalPaymentResult = screen.queryByTestId("total-payment-result");
    expect(monthlyPaymentResult).not.toBeInTheDocument();
    expect(totalPaymentResult).not.toBeInTheDocument();
  });

test("displays no results after clearing the form inputs", async () => {
    const user = userEvent.setup();
    render(<App />);

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

    // no results are displayed
    const monthlyPaymentResult = screen.queryByTestId("monthly-payment-result");
    const totalPaymentResult = screen.queryByTestId("total-payment-result");
    expect(monthlyPaymentResult).not.toBeInTheDocument();
    expect(totalPaymentResult).not.toBeInTheDocument();
  });


