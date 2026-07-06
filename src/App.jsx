import React from "react";
import "./App.css";
import MortgageCalculator from "./components/MortgageCalculator/MortgageCalculator";


const App = () => {
  return (
    <main className="w-full lg:w-[60%]">
      <MortgageCalculator />
    </main>
  );
};

export default App;
