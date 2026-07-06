// radio button Repayment/Interest Only

import React, { useState } from "react";

const options = [
  { id: "repayment", label: "Repayment" },
  { id: "interest-only", label: "Interest Only" },
];

const MortgageTypeSelector = ({ value, onChange, error }) => {
  return (
    <div className="flex flex-col gap-2 mt-4">
      <label className="text-sm font-medium text-(--color-slate-700)">Mortgage Type</label>
      <div className="flex flex-col gap-3">
        {options.map((option) => (
          <label key={option.id} className={`flex items-center gap-4 p-4 rounded-md border bg-white cursor-pointer transition-all duration-200
              ${error ? "border-red-500" : "border-(--color-slate-300) hover:border-(--color-lime) has-[:checked]:border-(--color-lime) has-[:checked]:bg-(--color-lime)/20"}`}>
            <input type="radio" id={option.id} name="mortgage-type" value={option.id} checked={value === option.id} onChange={(e) => onChange(e.target.value)} className="w-3 h-3 accent-(--color-lime) cursor-pointer" />
            <span className="text-sm font-semibold text-(--color-slate-900)">{option.label}</span>
          </label>
        ))}
      </div>
      {error && <p className="text-red-500 text-sm">{error}</p>}
    </div>
  );
};

export default MortgageTypeSelector;
