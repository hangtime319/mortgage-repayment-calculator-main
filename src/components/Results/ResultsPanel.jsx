// Decide which state to show(EmptyResults or CompletedResults)

import React from 'react';
import EmptyResults from './EmptyResults';
import CompletedResults from './CompletedResults';

const ResultsPanel = ({results}) => {
  return (
    <section className="flex flex-col p-6 w-full lg:w-[50%] lg:rounded-r-2xl lg:rounded-bl-[4em] bg-(--color-slate-900)">
      {results ? (
      <CompletedResults monthlyPayment={results.monthlyPayment} totalRepayment={results.totalRepayment} />
      ) : (
      <EmptyResults />
      )}
  </section>
  )
}

export default ResultsPanel