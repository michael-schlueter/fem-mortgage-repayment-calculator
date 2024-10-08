import { useState } from "react";
import { cn } from "../lib/utils";

type MortgageInputProps = {
  orientation: "left" | "right";
  id: string;
  unit: string;
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
  resetError: React.Dispatch<React.SetStateAction<string>>;
  error?: string;
  errorId: string;
};

export default function MortgageInput({
  orientation,
  id,
  unit,
  value,
  setValue,
  resetError,
  error,
  errorId,
}: MortgageInputProps) {
  const [isFocused, setIsFocused] = useState(false);

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (
      event.key === "e" ||
      event.key === "E" ||
      event.key === "+" ||
      event.key === "-"
    ) {
      event.preventDefault();
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
    if (error) {
      resetError("");
    }
  };

  const handleFocus = () => {
    setIsFocused(true);
    resetError("");
  };

  return (
    <div
      className={cn(
        "flex items-center border rounded-[0.25rem] overflow-hidden border-slate-500 hover:border-slate-900 has-[:focus]:border-lime transition-colors duration-300",
        error !== "" ? "border-red" : ""
      )}
    >
      {orientation === "left" ? (
        <>
          <div
            className={cn(
              "flex flex-shrink-0 items-center px-4 py-[12.5px] transition-colors duration-300",
              isFocused ? "bg-lime" : "bg-slate-100",
              error !== "" ? "bg-red" : ""
            )}
          >
            <span
              className={cn(
                "text-lg font-bold text-slate-700",
                error !== "" ? "text-white" : ""
              )}
            >
              {unit}
            </span>
          </div>
          <input
            type="number"
            value={value}
            id={id}
            onFocus={handleFocus}
            onBlur={() => setIsFocused(false)}
            aria-describedby={errorId}
            onChange={handleChange}
            onKeyDown={handleKeyDown}
            className="flex-grow px-4 py-[12.5px] text-lg font-bold text-slate-900 focus:outline-none [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
          />
        </>
      ) : (
        <>
          <input
            type="number"
            value={value}
            id={id}
            onFocus={handleFocus}
            onChange={handleChange}
            onKeyDown={handleKeyDown}
            className="min-w-0 flex-grow px-4 py-[12.5px] text-lg font-bold text-slate-900 focus:outline-none [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none peer"
          />
          <div
            className={cn(
              "flex flex-shrink-0 items-center px-4 py-[12.5px] bg-slate-100 transition-colors duration-300 peer-focus:bg-lime",
              error !== "" ? "bg-red" : ""
            )}
          >
            <span
              className={cn(
                "text-lg font-bold text-slate-700",
                error !== "" ? "text-white" : ""
              )}
            >
              {unit}
            </span>
          </div>
        </>
      )}
    </div>
  );
}
