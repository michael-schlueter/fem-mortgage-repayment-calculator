import MortgageRadioButton from "./MortgageRadioButton";

type MortgageTypeRadioGroupProps = {
  setMortgageType: React.Dispatch<
    React.SetStateAction<"repayment" | "interest-only" | "">
  >;
  mortgageTypeError?: string;
  setMortgageTypeError: React.Dispatch<React.SetStateAction<string>>;
  mortgageType: "repayment" | "interest-only" | "";
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
        errorId={mortgageTypeError && "mortgageTypeError"}
        mortgageType={mortgageType}
        setMortgageType={setMortgageType}
        setMortgageTypeError={setMortgageTypeError}
      />
      <MortgageRadioButton
        mortgageTypeId="interest-only"
        label="Interest Only"
        errorId={mortgageTypeError && "mortgageTypeError"}
        mortgageType={mortgageType}
        setMortgageType={setMortgageType}
        setMortgageTypeError={setMortgageTypeError}
      />
      {mortgageTypeError && (
        <span role="alert" id="mortgageTypeError" className="text-sm text-red">
          {mortgageTypeError}
        </span>
      )}
    </fieldset>
  );
}
