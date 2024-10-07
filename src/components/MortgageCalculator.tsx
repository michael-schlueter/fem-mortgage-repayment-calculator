import { useState } from "react";
import Header from "./Header";
import MortgageInput from "./MortgageInput";
import MortgageTypeRadioGroup from "./RadioGroup";
import { calculateMonthlyPayment, calculateTotalRepayment } from "../lib/utils";

type MortgageCalculatorProps = {
  setMonthlyPayment: React.Dispatch<React.SetStateAction<number>>;
  setTotalRepayment: React.Dispatch<React.SetStateAction<number>>;
};

export default function MortgageCalculator({
  setMonthlyPayment,
  setTotalRepayment,
}: MortgageCalculatorProps) {
  const [mortgageAmount, setMortgageAmount] = useState("");
  const [mortgageTerm, setMortageTerm] = useState("");
  const [mortgageRate, setMortgageRate] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const monthlyPayment = calculateMonthlyPayment(
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
    setTotalRepayment(totalRepayment);
  };

  const clearForm = () => {
    setMortgageAmount("");
    setMortageTerm("");
    setMortgageRate("");
    setMonthlyPayment(0);
    setTotalRepayment(0);
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
          />
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="grid gap-3">
            <label className="text-slate-700 text-base" htmlFor="mortgageTerm">
              Mortgage Term
            </label>
            <MortgageInput
              orientation="right"
              id="mortgageTerm"
              unit="years"
              value={mortgageTerm}
              setValue={setMortageTerm}
            />
          </div>
          <div className="grid gap-3">
            <label className="text-slate-700 text-base" htmlFor="mortgageRate">
              Interest Rate
            </label>
            <MortgageInput
              orientation="right"
              id="mortgageRate"
              unit="%"
              value={mortgageRate}
              setValue={setMortgageRate}
            />
          </div>
        </div>
        <MortgageTypeRadioGroup />
        <button className="h-14 text-lg font-bold bg-lime hover:bg-lime/50 rounded-full flex gap-3 justify-center items-center md:max-w-[314px] transition-colors duration-300">
          <img src="./public/assets/images/icon-calculator.svg" />
          Calculate Payments
        </button>
      </form>
    </section>
  );
}
