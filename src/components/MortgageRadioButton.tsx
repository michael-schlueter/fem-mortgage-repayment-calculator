type MortgageRadioButtonProps = {
  mortgageTypeId: "repayment" | "interest-only";
  label: "Repayment" | "Interest Only";
  mortgageType: string;
  setMortgageType: React.Dispatch<React.SetStateAction<string>>;
  setMortgageTypeError: React.Dispatch<React.SetStateAction<string>>;
};

export default function MortgageRadioButton({
  mortgageTypeId,
  label,
  setMortgageType,
  mortgageType,
  setMortgageTypeError,
}: MortgageRadioButtonProps) {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMortgageType(e.target.value);
    setMortgageTypeError("");
  };
  return (
    <label
      htmlFor={mortgageTypeId}
      className="border border-slate-500 has-[:checked]:border-lime has-[:checked]:bg-lime/15 hover:border-lime flex items-center gap-4 rounded-[4px] py-3 px-4 cursor-pointer transition-colors duration-300"
    >
      <input
        type="radio"
        id={mortgageTypeId}
        name="mortage-type"
        value={mortgageTypeId}
        className="custom-radio w-5 h-5"
        onChange={handleChange}
        checked={mortgageType === mortgageTypeId}
      />
      <span className="text-slate-900 text-lg font-bold">{label}</span>
    </label>
  );
}
