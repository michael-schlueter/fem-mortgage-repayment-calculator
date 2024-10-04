type MortgageRadioButtonProps = {
  mortgageType: "repayment" | "interest-only";
  label: "Repayment" | "Interest Only";
};

export default function MortgageRadioButton({
  mortgageType,
  label,
}: MortgageRadioButtonProps) {
  return (
    <label
      htmlFor={mortgageType}
      className="border border-slate-500 has-[:checked]:border-lime has-[:checked]:bg-lime/15 hover:border-lime flex items-center gap-4 rounded-[4px] py-3 px-4 cursor-pointer transition-colors duration-300"
    >
      <input
        type="radio"
        id={mortgageType}
        name="mortage-type"
        value={mortgageType}
        className="custom-radio w-5 h-5"
        checked
      />
      <span className="text-slate-900 text-lg font-bold">{label}</span>
    </label>
  );
}
