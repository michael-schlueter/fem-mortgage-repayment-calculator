import MortgageRadioButton from "./MortgageRadioButton";

export default function MortgageTypeRadioGroup() {
  return (
    <fieldset className="grid gap-3">
      <div>
        <legend className="text-slate-700 text-base">Mortgage Type</legend>
      </div>
      <MortgageRadioButton mortgageType="repayment" label="Repayment" defaultChecked={true} />
      <MortgageRadioButton mortgageType="interest-only" label="Interest Only" defaultChecked={false} />
    </fieldset>
  );
}
