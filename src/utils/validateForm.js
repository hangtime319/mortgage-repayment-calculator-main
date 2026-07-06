// pure validation

export function validateForm({amount, term, rate, mortgageType}) {
  const errors = {};

  if (!amount || isNaN(amount) || parseFloat(amount) <= 0) {
    errors.amount = "Please enter a valid mortgage amount.";
  }

  if (!term || isNaN(term) || parseFloat(term) <= 0) {
    errors.term = "Please enter a valid mortgage term.";
  }

  if (!rate || isNaN(rate) || parseFloat(rate) <= 0) {
    errors.rate = "Please enter a valid interest rate.";
  }

  if (!mortgageType){
    errors.mortgageType = "Please select a valid option.";
  }

  return errors;
}
