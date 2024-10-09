import { useState } from "react";
import Header from "./Header";
import MortgageInput from "./MortgageInput";
import MortgageTypeRadioGroup from "./RadioGroup";
import {
  calculateMonthlyInterestPayment,
  calculateMonthlyRepayment,
  calculateTotalInterestPayment,
  calculateTotalRepayment,
  formatCurrency,
} from "../lib/utils";

type MortgageCalculatorProps = {
  setMonthlyPayment: React.Dispatch<React.SetStateAction<number>>;
  setTotalPayment: React.Dispatch<React.SetStateAction<number>>;
};

export default function MortgageCalculator({
  setMonthlyPayment,
  setTotalPayment,
}: MortgageCalculatorProps) {
  const [mortgageAmount, setMortgageAmount] = useState("");
  const [mortgageAmountError, setMortgageAmountError] = useState("");
  const [mortgageTerm, setMortgageTerm] = useState("");
  const [mortgageTermError, setMortgageTermError] = useState("");
  const [mortgageRate, setMortgageRate] = useState("");
  const [mortgageRateError, setMortgageRateError] = useState("");
  const [mortgageType, setMortgageType] = useState<"repayment" | "interest-only" | "">("");
  const [mortgageTypeError, setMortgageTypeError] = useState("");
  const [resultsAnnouncement, setResultsAnnouncement] = useState("");

  const validateInputs = () => {
    let isValid = true;
    if (mortgageAmount === "") {
      setMortgageAmountError("Mortgage amount is required.");
      isValid = false;
    }
    if (mortgageTerm === "") {
      setMortgageTermError("Mortgage term is required.");
      isValid = false;
    }
    if (mortgageRate === "") {
      setMortgageRateError("Mortgage rate is required.");
      isValid = false;
    }
    if (mortgageType === "") {
      setMortgageTypeError("Mortgage type is required.");
      isValid = false;
    }
    if (parseFloat(mortgageAmount) === 0) {
      setMortgageAmountError("Mortgage amount must be greater than zero.");
      isValid = false;
    }
    if (parseFloat(mortgageTerm) === 0) {
      setMortgageTermError("Mortgage term must be greater than zero.");
      isValid = false;
    }
    if (parseFloat(mortgageRate) === 0) {
      setMortgageRateError("Interest rate must be greater than zero.");
      isValid = false;
    }

    return isValid;
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!validateInputs()) {
      return;
    }

    const parsedMortgageAmount = parseFloat(mortgageAmount);
    const parsedMortgageTerm = parseFloat(mortgageTerm);
    const parseMortgageRate = parseFloat(mortgageRate);

    if (mortgageType === "repayment") {
      const monthlyPayment = calculateMonthlyRepayment(
        parsedMortgageAmount,
        parsedMortgageTerm,
        parseMortgageRate
      );
      const totalRepayment = calculateTotalRepayment(
        parsedMortgageAmount,
        parsedMortgageTerm,
        parseMortgageRate
      );
      setMonthlyPayment(monthlyPayment);
      setTotalPayment(totalRepayment);
      setResultsAnnouncement(
        `The monthly payment is ${monthlyPayment} and the total payment is ${totalRepayment}. This is repayment.`
      );
    } else {
      const monthlyInterestPayment = calculateMonthlyInterestPayment(
        parsedMortgageAmount,
        parseMortgageRate
      );
      const totalInterestPayment = calculateTotalInterestPayment(
        parsedMortgageAmount,
        parsedMortgageTerm,
        parseMortgageRate
      );
      setMonthlyPayment(monthlyInterestPayment);
      setTotalPayment(totalInterestPayment);

      setResultsAnnouncement(
        `The monthly payment is ${formatCurrency(monthlyInterestPayment)} and the total payment is ${formatCurrency(totalInterestPayment)}. This is interest-only.`
      );
    }
  };

  const clearForm = () => {
    setMortgageAmount("");
    setMortgageTerm("");
    setMortgageRate("");
    setMortgageType("");
    setMortgageAmountError("");
    setMortgageTermError("");
    setMortgageRateError("");
    setMortgageTypeError("");
    setMonthlyPayment(0);
    setTotalPayment(0);
  };

  return (
    <section className="w-full bg-white py-8 px-6 lg:p-10 grid gap-6 md:gap-10 md:rounded-t-3xl lg:rounded-none lg:rounded-s-3xl">
      <Header onClearForm={clearForm} />
      <form className="grid gap-6" onSubmit={handleSubmit}>
        <div className="grid gap-3">
          <label className="text-slate-700 text-base" htmlFor="mortgageAmount">
            Mortgage Amount
          </label>
          <MortgageInput
            orientation="left"
            id="mortgageAmount"
            unit="£"
            value={mortgageAmount}
            setValue={setMortgageAmount}
            resetError={setMortgageAmountError}
            error={mortgageAmountError}
            errorId="mortgageAmountError"
          />
          {mortgageAmountError && (
            <span
              role="alert"
              id="mortgageAmountError"
              className="text-sm text-red"
            >
              {mortgageAmountError}
            </span>
          )}
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="flex flex-col gap-3">
            <label className="text-slate-700 text-base" htmlFor="mortgageTerm">
              Mortgage Term
            </label>
            <MortgageInput
              orientation="right"
              id="mortgageTerm"
              unit="years"
              value={mortgageTerm}
              setValue={setMortgageTerm}
              resetError={setMortgageTermError}
              error={mortgageTermError}
              errorId="mortgageTermError"
            />
            {mortgageTermError && (
              <span
                role="alert"
                id="mortgageTermError"
                className="text-sm text-red"
              >
                {mortgageTermError}
              </span>
            )}
          </div>
          <div className="flex flex-col gap-3">
            <label className="text-slate-700 text-base" htmlFor="mortgageRate">
              Interest Rate
            </label>
            <MortgageInput
              orientation="right"
              id="mortgageRate"
              unit="%"
              value={mortgageRate}
              setValue={setMortgageRate}
              resetError={setMortgageRateError}
              error={mortgageRateError}
              errorId="mortgageRateError"
            />
            {mortgageRateError && (
              <span
                role="alert"
                id="mortgageRateError"
                className="text-sm text-red"
              >
                {mortgageRateError}
              </span>
            )}
          </div>
        </div>
        <MortgageTypeRadioGroup
          mortgageType={mortgageType}
          setMortgageType={setMortgageType}
          setMortgageTypeError={setMortgageTypeError}
          mortgageTypeError={mortgageTypeError}
        />
        <div className="sr-only" aria-live="polite" data-testid="results-announcement">
          {resultsAnnouncement}
        </div>
        <button className="h-14 text-lg font-bold bg-lime hover:bg-lime/50 rounded-full flex gap-3 justify-center items-center md:max-w-[314px] transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-4 focus:ring-lime">
          <img src="./assets/images/icon-calculator.svg" />
          Calculate Payments
        </button>
      </form>
    </section>
  );
}
