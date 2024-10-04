import MortgageCalculator from "./components/MortgageCalculator";
import MortgageResults from "./components/MortgageResults";

function App() {
  return (
    <div className="bg-slate-100 w-full lg:min-h-screen lg:flex justify-center lg:items-center">
      <main className="w-full max-w-[1008px] grid md:p-10 lg:p-0 lg:grid-cols-2">
        <MortgageCalculator />
        <div className="w-full bg-white lg:rounded-e-3xl">
          <div className="w-full h-full lg:flex lg:items-center lg:justify-center bg-slate-900 py-8 px-6 md:rounded-b-3xl lg:rounded-none lg:rounded-e-3xl lg:rounded-es-[80px] lg:p-10">
            <MortgageResults />
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
