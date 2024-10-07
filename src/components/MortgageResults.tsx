import EmptyResults from "./EmptyResults";
import Results from "./Results";

type MortgageResultsProps = {
  monthlyRepayment: number;
  totalRepayment: number;
};

export default function MortgageResults({
  monthlyRepayment,
  totalRepayment,
}: MortgageResultsProps) {
  return (
    <>
      {monthlyRepayment === 0 ? (
        <EmptyResults />
      ) : (
        <Results
          monthlyRepayment={monthlyRepayment}
          totalRepayment={totalRepayment}
        />
      )}
    </>
  );
}
