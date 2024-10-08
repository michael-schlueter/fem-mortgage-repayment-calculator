import EmptyResults from "./EmptyResults";
import Results from "./Results";

type MortgageResultsProps = {
  monthlyPayment: number;
  totalPayment: number;
};

export default function MortgageResults({
  monthlyPayment,
  totalPayment,
}: MortgageResultsProps) {
  return (
    <>
      {monthlyPayment === 0 ? (
        <EmptyResults />
      ) : (
        <Results
          monthlyPayment={monthlyPayment}
          totalPayment={totalPayment}
        />
      )}
    </>
  );
}
