type HeaderProps = {
  onClearForm: () => void;
};

export default function Header({ onClearForm }: HeaderProps) {
  return (
    <header className="flex flex-col gap-2 md:flex-row md:justify-between md:items-baseline">
      <h1 className="text-xl text-slate-900 font-bold">Mortgage Calculator</h1>
      <button
        onClick={onClearForm}
        className="w-fit text-slate-700 hover:text-slate-900 transition-colors duration-300 text-base underline underline-offset-2"
      >
        Clear All
      </button>
    </header>
  );
}
