// State with calculated result

import React from "react";

const CompletedResults = ({monthlyPayment, totalRepayment}) => {
  return (
    <article className="flex flex-col gap-4">
      <h2 className="text-xl font-bold text-(--color-slate-100)">Your results</h2>
      <p className="text-sm text-(--color-slate-300)">Your results are shown below based on the information you provided. To adjust the results, edit the form and click “calculate repayments” again.</p>
      <div className="flex flex-col gap-2 p-6 w-[95%] bg-slate-950/40 rounded-md border-t-3 border-(--color-lime) mt-2">
        <div className="flex flex-col gap-2 border-b-[0.5px] border-(--color-slate-900) pb-4">
          <p className="text-(--color-slate-300) text-sm">Your monthly repayments</p>
          <span className="text-3xl font-bold text-(--color-lime)">£{monthlyPayment.toFixed(2)}</span>
        </div>
        <div>
          <p className="text-(--color-slate-300) text-sm pt-4 mb-1">Total you'll repay over the term</p>
          <span className="text-lg font-bold text-(--color-slate-100)">£{totalRepayment.toFixed(3)}</span>
        </div>
      </div>
    </article>
  );
};

export default CompletedResults;
