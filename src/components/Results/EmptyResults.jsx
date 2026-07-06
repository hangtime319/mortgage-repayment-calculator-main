// Initial state (without calculation)

import React from "react";
import EmptyIllustration from "../icons/EmptyIllustration";

const EmptyResults = () => {
  return (
    <article className="flex flex-col items-center justify-center h-full">
      <EmptyIllustration />
      <h2 className="text-base text-center font-semibold text-(--color-slate-100) mb-3">Results shown here</h2>
      <p className="text-(--color-slate-300) text-sm text-center">Complete the form and click “calculate repayments” to see what your monthly repayments would be.</p>
    </article>
  );
};

export default EmptyResults;
