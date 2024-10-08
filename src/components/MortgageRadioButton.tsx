type MortgageRadioButtonProps = {
  mortgageTypeId: "repayment" | "interest-only";
  label: "Repayment" | "Interest Only";
  mortgageType: string;
  setMortgageType: React.Dispatch<React.SetStateAction<string>>;
  setMortgageTypeError: React.Dispatch<React.SetStateAction<string>>;
  errorId: string;
};

export default function MortgageRadioButton({
  mortgageTypeId,
  label,
  errorId,
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
      className="border border-slate-500 has-[:checked]:border-lime has-[:checked]:bg-lime/15 hover:border-lime focus-within:border-lime focus-within:bg-lime/15 flex items-center gap-4 rounded-[4px] py-3 px-4 cursor-pointer transition-colors duration-300"
    >
      <input
        type="radio"
        id={mortgageTypeId}
        aria-describedby={errorId}
        name="mortage-type"
        value={mortgageTypeId}
        className="custom-radio w-5 h-5 focus:outline-slate-700"
        onChange={handleChange}
        checked={mortgageType === mortgageTypeId}
      />
      <span id={mortgageTypeId} className="text-slate-900 text-lg font-bold">{label}</span>
    </label>
  );
}
