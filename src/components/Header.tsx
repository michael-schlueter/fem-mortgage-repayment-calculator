export default function Header() {
  return (
    <header className="flex flex-col gap-2 md:flex-row md:justify-between">
      <h1 className="text-xl text-slate-900 font-bold">Mortgage Calculator</h1>
      <p className="text-slate-700 text-base underline underline-offset-2">
        Clear All
      </p>
    </header>
  );
}
