// pure financial formula

export function calculateMortgage({ amount, term, rate, mortgageType }) {
  const principal = Number(amount);
  const monthlyRate = Number(rate) / 100 / 12;
  const months = Number(term) * 12;

  let monthlyPayment;

  if (mortgageType === "repayment") {
    monthlyPayment = (principal * monthlyRate * Math.pow(1 + monthlyRate, months)) / (Math.pow(1 + monthlyRate, months) - 1);
  } else if (mortgageType === "interest-only") {
    monthlyPayment = principal * monthlyRate;
  } else {
    throw new Error("Invalid mortgage type");
  }

  const totalRepayment = monthlyPayment * months;

  return { monthlyPayment, totalRepayment };
}
