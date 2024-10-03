type MortgageInputProps = {
  orientation: "left" | "right";
  id: string;
  unit: string;
};

export default function MortgageInput({ orientation, id, unit }: MortgageInputProps) {
  return (
    <div className="flex items-center border rounded-[0.25rem] overflow-hidden border-slate-500">
      {orientation === "left" ? (
        <>
          <div className="flex flex-shrink-0 items-center px-4 py-[12.5px] bg-slate-100">
            <span className="text-lg font-bold text-slate-700">{unit}</span>
          </div>
          <input
            type="number"
            id={id}
            required
            className="flex-grow px-4 py-[12.5px] text-lg font-bold text-slate-900 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
          />
        </>
      ) : (
        <>
          <input
            type="number"
            id={id}
            required
            className="min-w-0 flex-grow px-4 py-[12.5px] text-lg font-bold text-slate-900 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
          />
          <div className="flex flex-shrink-0 items-center px-4 py-[12.5px] bg-slate-100">
            <span className="text-lg font-bold text-slate-700">{unit}</span>
          </div>
        </>
      )}
    </div>
  );
}
