import MortgageCalculator from "./components/MortgageCalculator";
import MortgageResults from "./components/MortgageResults";

function App() {
  return (
    <div className="bg-slate-100 w-full h-screen flex justify-center items-center">
      <main className="w-full max-w-[1008px] grid md:p-10 lg:grid-cols-2">
        <MortgageCalculator />
        <div>
          <MortgageResults />
        </div>
      </main>
    </div>
  );
}

export default App;
