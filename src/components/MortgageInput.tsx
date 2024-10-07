import { useState } from "react";
import { cn } from "../lib/utils";

type MortgageInputProps = {
  orientation: "left" | "right";
  id: string;
  unit: string;
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>
};

export default function MortgageInput({
  orientation,
  id,
  unit,
  value,
  setValue,
}: MortgageInputProps) {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <div className="flex items-center border rounded-[0.25rem] overflow-hidden border-slate-500 hover:border-slate-900 has-[:focus]:border-lime transition-colors duration-300">
      {orientation === "left" ? (
        <>
          <div className={cn("flex flex-shrink-0 items-center px-4 py-[12.5px] transition-colors duration-300",
            isFocused ? "bg-lime" : "bg-slate-100"
           )}>
            <span className="text-lg font-bold text-slate-700">{unit}</span>
          </div>
          <input
            type="number"
            value={value}
            id={id}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            onChange={(e) => setValue(e.target.value)}
            required
            className="flex-grow px-4 py-[12.5px] text-lg font-bold text-slate-900 focus:outline-none [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
          />
        </>
      ) : (
        <>
          <input
            type="number"
            value={value}
            id={id}
            onChange={(e) => setValue(e.target.value)}
            required
            className="min-w-0 flex-grow px-4 py-[12.5px] text-lg font-bold text-slate-900 focus:outline-none [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none peer"
          />
          <div className="flex flex-shrink-0 items-center px-4 py-[12.5px] bg-slate-100 transition-colors duration-300 peer-focus:bg-lime">
            <span className="text-lg font-bold text-slate-700">{unit}</span>
          </div>
        </>
      )}
    </div>
  );
}
