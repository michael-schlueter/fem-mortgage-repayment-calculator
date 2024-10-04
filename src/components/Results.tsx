export default function Results() {
  return (
    <div className="grid gap-6">
      <div className="grid gap-4">
        <h2 className="text-white text-xl font-bold">Your results</h2>
        <p className="text-slate-300 text-base">
          Your results are shown below based on the information you provided. To
          adjust the results, edit the form and click "calculate repayments"
          again.
        </p>
      </div>
      <div className="grid py-6 px-4 md:p-8 bg-black/25 rounded-lg border-t-4 border-t-lime">
        <div className="grid gap-2 pb-4 md:pb-8 border-b border-slate-300/25">
          <p className="text-slate-300 text-base">Your monthly payments</p>
          <span className="text-lime text-2xl font-bold">£1,797.44</span>
        </div>
        <div className="pt-4 md:pt-8 grid gap-2">
          <p className="text-slate-300 text-base">
            Total you'll repay over the term
          </p>
          <span className="text-white text-xl font-bold">£539,322.94</span>
        </div>
      </div>
    </div>
  );
}
