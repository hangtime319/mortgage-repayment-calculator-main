// Reusable input (£, years, %)

import React from "react";

const InputField = ({ id, label, prefix, suffix, value, onChange, error }) => {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={id} className="text-sm font-medium text-(--color-slate-700)">
        {label}
      </label>
      <div
        className={`group flex h-12 w-full overflow-hidden rounded-md border bg-white shadow-sm transition-colors duration-200
          ${error ? "border-red-500 focus-within:ring-1 focus-within:ring-red-500" : "border-(--color-slate-300) focus-within:border-(--color-lime) focus-within:ring-1 focus-within:ring-(--color-lime) hover:border-(--color-slate-500)"}`}>
        {prefix && <span className={`flex h-full items-center justify-center px-5 text-sm font-bold transition-colors
            ${error ? "bg-red-500 text-white" : "bg-(--color-slate-100) text-(--color-slate-700) group-focus-within:bg-(--color-lime)"}`}>{prefix}</span>}
        <input type="number" id={id} value={value} onChange={(e) => onChange(e.target.value)} className="min-w-0 flex-1 border-none bg-transparent px-4 text-lg font-semibold text-(--color-slate-900) outline-none cursor-pointer" />
        {suffix && <span className={`flex h-full items-center justify-center px-5 text-sm font-bold transition-colors
            ${error ? "bg-red-500 text-white" : "bg-(--color-slate-100) text-(--color-slate-700) group-focus-within:bg-(--color-lime)"}`}>{suffix}</span>}
      </div>
      {error && <p className="text-red-500 text-sm">{error}</p>}
    </div>
  );
};

export default InputField;
