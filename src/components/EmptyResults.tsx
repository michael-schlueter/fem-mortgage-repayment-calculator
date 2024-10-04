export default function EmptyResults() {
  return (
    <div className="grid gap-4 text-center">
      <img className="mx-auto" src="./public/assets/images/illustration-empty.svg" alt="" />
      <h2 className="text-white text-xl font-bold">Results shown here</h2>
      <p className="text-slate-300 text-base">
        Complete the form and click "calculate repayments" to see what your
        monthly repayments would be.
      </p>
    </div>
  );
}
