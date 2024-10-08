import MortgageRadioButton from "./MortgageRadioButton";

type MortgageTypeRadioGroupProps = {
  setMortgageType: React.Dispatch<React.SetStateAction<string>>;
  mortgageTypeError?: string;
  setMortgageTypeError: React.Dispatch<React.SetStateAction<string>>;
};

export default function MortgageTypeRadioGroup({
  setMortgageType,
  mortgageTypeError,
  setMortgageTypeError,
}: MortgageTypeRadioGroupProps) {
  return (
    <fieldset className="grid gap-3">
      <div>
        <legend className="text-slate-700 text-base">Mortgage Type</legend>
      </div>
      <MortgageRadioButton
        mortgageType="repayment"
        label="Repayment"
        setMortgageType={setMortgageType}
        setMortgageTypeError={setMortgageTypeError}
      />
      <MortgageRadioButton
        mortgageType="interest-only"
        label="Interest Only"
        setMortgageType={setMortgageType}
        setMortgageTypeError={setMortgageTypeError}
      />
      {mortgageTypeError && (
        <p className="text-sm text-red">{mortgageTypeError}</p>
      )}
    </fieldset>
  );
}
