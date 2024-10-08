import { useState } from "react";
import Header from "./Header";
import MortgageInput from "./MortgageInput";
import MortgageTypeRadioGroup from "./RadioGroup";
import {
  calculateMonthlyInterestPayment,
  calculateMonthlyRepayment,
  calculateTotalInterestRepayment,
  calculateTotalRepayment,
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
  const [mortgageTerm, setMortageTerm] = useState("");
  const [mortgageTermError, setMortageTermError] = useState("");
  const [mortgageRate, setMortgageRate] = useState("");
  const [mortgageRateError, setMortgageRateError] = useState("");
  const [mortgageType, setMortgageType] = useState("");
  const [mortgageTypeError, setMortgageTypeError] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (
      mortgageAmount === "" ||
      mortgageTerm === "" ||
      mortgageRate === "" ||
      mortgageType === "" ||
      parseFloat(mortgageAmount) === 0 ||
      parseFloat(mortgageTerm) === 0
    ) {
      if (mortgageAmount === "") {
        setMortgageAmountError("This field is required");
      }
      if (mortgageTerm === "") {
        setMortageTermError("This field is required");
      }
      if (mortgageRate === "") {
        setMortgageRateError("This field is required");
      }

      if (mortgageType === "") {
        setMortgageTypeError("This field is required");
      }

      if (parseFloat(mortgageAmount) === 0) {
        setMortgageAmountError("Must be greater than zero");
      }

      if (parseFloat(mortgageTerm) === 0) {
        setMortageTermError("Must be greater than zero");
      }
      return;
    }

    if (mortgageType === "repayment") {
      const monthlyPayment = calculateMonthlyRepayment(
        parseFloat(mortgageAmount),
        parseFloat(mortgageTerm),
        parseFloat(mortgageRate)
      );
      const totalRepayment = calculateTotalRepayment(
        parseFloat(mortgageAmount),
        parseFloat(mortgageTerm),
        parseFloat(mortgageRate)
      );
      setMonthlyPayment(monthlyPayment);
      setTotalPayment(totalRepayment);
    } else {
      const monthlyInterestPayment = calculateMonthlyInterestPayment(parseFloat(mortgageAmount), parseFloat(mortgageRate));
      const totalInterestPayment = calculateTotalInterestRepayment(parseFloat(mortgageAmount), parseFloat(mortgageTerm), parseFloat(mortgageRate));
      setMonthlyPayment(monthlyInterestPayment);
      setTotalPayment(totalInterestPayment);
    }
  };

  const clearForm = () => {
    setMortgageAmount("");
    setMortageTerm("");
    setMortgageRate("");
    setMortgageType("");
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
          />
          {mortgageAmountError && (
            <p className="text-sm text-red">{mortgageAmountError}</p>
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
              setValue={setMortageTerm}
              resetError={setMortageTermError}
              error={mortgageTermError}
            />
            {mortgageTermError && (
              <p className="text-sm text-red">{mortgageTermError}</p>
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
            />
            {mortgageRateError && (
              <p className="text-sm text-red">{mortgageRateError}</p>
            )}
          </div>
        </div>
        <MortgageTypeRadioGroup
          mortgageType={mortgageType}
          setMortgageType={setMortgageType}
          setMortgageTypeError={setMortgageTypeError}
          mortgageTypeError={mortgageTypeError}
        />
        <button className="h-14 text-lg font-bold bg-lime hover:bg-lime/50 rounded-full flex gap-3 justify-center items-center md:max-w-[314px] transition-colors duration-300">
          <img src="./public/assets/images/icon-calculator.svg" />
          Calculate Payments
        </button>
      </form>
    </section>
  );
}
