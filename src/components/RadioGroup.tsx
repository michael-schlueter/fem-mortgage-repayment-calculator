import MortgageRadioButton from "./MortgageRadioButton";

type MortgageTypeRadioGroupProps = {
  setMortgageType: React.Dispatch<React.SetStateAction<string>>;
  mortgageTypeError?: string;
  setMortgageTypeError: React.Dispatch<React.SetStateAction<string>>;
  mortgageType: string;
};

export default function MortgageTypeRadioGroup({
  setMortgageType,
  mortgageType,
  mortgageTypeError,
  setMortgageTypeError,
}: MortgageTypeRadioGroupProps) {
  return (
    <fieldset className="grid gap-3">
      <div>
        <legend className="text-slate-700 text-base">Mortgage Type</legend>
      </div>
      <MortgageRadioButton
        mortgageTypeId="repayment"
        label="Repayment"
        mortgageType={mortgageType}
        setMortgageType={setMortgageType}
        setMortgageTypeError={setMortgageTypeError}
      />
      <MortgageRadioButton
        mortgageTypeId="interest-only"
        label="Interest Only"
        mortgageType={mortgageType}
        setMortgageType={setMortgageType}
        setMortgageTypeError={setMortgageTypeError}
      />
      {mortgageTypeError && (
        <p className="text-sm text-red">{mortgageTypeError}</p>
      )}
    </fieldset>
  );
}
