// Container

import React from "react";
import MortgageForm from "../Form/MortgageForm";
import ResultsPanel from "../Results/ResultsPanel";

const MortgageCalculator = () => {
  const [results, setResults] = React.useState(null);

  const handleClearResults = () => {
    setResults(null);
  }

  return (
    <section className="flex flex-col lg:flex-row bg-white lg:rounded-2xl overflow-hidden">
      <MortgageForm onCalculate={setResults} onClearAll={handleClearResults} />
      <ResultsPanel results={results} />
    </section>
  );
};

export default MortgageCalculator;
