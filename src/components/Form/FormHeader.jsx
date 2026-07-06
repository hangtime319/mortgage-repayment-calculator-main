// Title + "Clear All"

import React from "react";

const FormHeader = ({ onClearAll }) => {
  return (
    <div className="flex justify-between items-center mb-4">
      <h1 className="text-xl font-bold text-(--color-slate-900)">Mortgage Calculator</h1>
      <button type="button" className="text-(--color-slate-500) font-semibold underline cursor-pointer hover:text-(--color-slate-900) transition-colors duration-200" onClick={onClearAll}>
        Clear All
      </button>
    </div>
  );
};

export default FormHeader;
