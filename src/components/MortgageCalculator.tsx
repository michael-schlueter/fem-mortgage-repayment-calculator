import MortgageInput from "./MortgageInput";
import MortgageTypeRadioGroup from "./RadioGroup";

export default function MortgageCalculator() {
  return (
    <section className="w-full bg-white py-8 px-6 lg:p-10 grid gap-6 md:gap-10">
      <header className="flex flex-col gap-2 md:flex-row md:justify-between">
        <h1 className="text-xl text-slate-900 font-bold">
          Mortgage Calculator
        </h1>
        <p className="text-slate-700 text-base underline underline-offset-2">
          Clear All
        </p>
      </header>
      <form className="grid gap-6">
        <div className="grid gap-3">
          <label className="text-slate-700 text-base" htmlFor="mortgageAmount">
            Mortgage Amount
          </label>
          <MortgageInput orientation="left" id="mortgageAmount" unit="£" />
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="grid gap-3">
            <label className="text-slate-700 text-base" htmlFor="mortgageTerm">
              Mortgage Term
            </label>
            <MortgageInput orientation="right" id="mortageTerm" unit="years" />
          </div>
          <div className="grid gap-3">
            <label className="text-slate-700 text-base" htmlFor="mortgageRate">
              Interest Rate
            </label>
            <MortgageInput orientation="right" id="mortgageRate" unit="%" />
          </div>
        </div>
        <MortgageTypeRadioGroup />
        <button className="h-14 text-lg font-bold bg-lime rounded-full flex gap-3 justify-center items-center md:max-w-[314px]">
          <img src="./public/assets/images/icon-calculator.svg" />
          Calculate Payments
        </button>
      </form>
    </section>
  );
}
