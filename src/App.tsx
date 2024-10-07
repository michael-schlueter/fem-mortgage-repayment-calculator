import { useState } from "react";
import MortgageCalculator from "./components/MortgageCalculator";
import MortgageResults from "./components/MortgageResults";

function App() {
  const [monthlyPayment, setMonthlyPayment] = useState(0);

  return (
    <div className="bg-slate-100 w-full lg:min-h-screen lg:flex justify-center lg:items-center">
      <main className="w-full max-w-[1008px] grid md:p-10 lg:p-0 lg:grid-cols-2">
        <MortgageCalculator setMonthlyPayment={setMonthlyPayment} />
        <div className="w-full bg-white lg:rounded-e-3xl">
          <div className="w-full h-full bg-slate-900 py-8 px-6 md:rounded-b-3xl lg:rounded-none lg:rounded-e-3xl lg:rounded-es-[80px] md:p-10">
            <MortgageResults monthlyPayment={monthlyPayment} />
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
