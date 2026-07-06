// Button "Calculate Repayments"

import React from 'react';
import CalculatorIcon from '../icons/CalculatorIcon';

const SubmitButton = () => {
  return (
    <button type="submit" className="flex items-center gap-2 mt-6 bg-(--color-lime) text-sm text-(--color-slate-900) font-semibold py-3 px-6 rounded-full hover:bg-(--color-lime)/80 focus:outline-none focus:ring-2 focus:ring-(--color-lime) focus:ring-offset-2 transition-colors duration-200 cursor-pointer">
      <CalculatorIcon className="inline-block mr-2" />
      Calculate Repayments
    </button>
  )
}

export default SubmitButton