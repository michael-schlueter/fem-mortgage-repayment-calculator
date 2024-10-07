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
    <Results
      monthlyRepayment={monthlyRepayment}
      totalRepayment={totalRepayment}
    />
  );
}
