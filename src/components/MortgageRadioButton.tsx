type MortgageRadioButtonProps = {
  mortgageType: "repayment" | "interest-only";
  label: "Repayment" | "Interest Only";
};

export default function MortgageRadioButton({
  mortgageType,
  label,
}: MortgageRadioButtonProps) {
  return (
    <div className="border border-slate-500 has-[:checked]:border-lime has-[:checked]:bg-lime/15 hover:border-lime  flex items-center gap-4 rounded-[4px] py-3 px-4">
      <input
        type="radio"
        id={mortgageType}
        name="mortage-type"
        value={mortgageType}
        className="custom-radio w-5 h-5"
        checked
      />
      <label
        className="text-slate-900 text-lg font-bold"
        htmlFor={mortgageType}
      >
        {label}
      </label>
    </div>
  );
}
