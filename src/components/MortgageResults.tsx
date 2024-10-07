import Results from "./Results";

type MortgageResultsProps = {
  monthlyPayment: number;
}

export default function MortgageResults({ monthlyPayment }: MortgageResultsProps) {
  return (
    <Results monthlyPayment={monthlyPayment} />
  )
}
