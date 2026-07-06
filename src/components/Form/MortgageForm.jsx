// Form composition

import React from "react";
import FormHeader from "./FormHeader";
import InputField from "./InputField";
import MortgageTypeSelector from "./MortgageTypeSelector";
import SubmitButton from "./SubmitButton";
import { validateForm } from "../../utils/validateForm";
import { calculateMortgage } from "../../utils/calculateMortgage";

const MortgageForm = ({onCalculate, onClearAll}) => {
  const [formData, setFormData] = React.useState({
    amount: "",
    term: "",
    rate: "",
    mortgageType: "",
  });

  const [errors, setErrors] = React.useState({});

  const updateField = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if(errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  };

  const handleClearAll = () => {
    setFormData({amount: "", term: "", rate: "", mortgageType: ""});
    setErrors({});
    onClearAll();
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm({ amount: formData.amount, term: formData.term, rate: formData.rate, mortgageType: formData.mortgageType });
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) {
      return;
    }

    const result = calculateMortgage(formData);
    onCalculate(result);
  };

  


  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 w-full lg:w-[50%]">
      <FormHeader onClearAll={handleClearAll} />
      <div className="space-y-4">
        <InputField id="mortgage-amount" label="Mortgage Amount" prefix="£" value={formData.amount} onChange={(value) => updateField("amount", value)} error={errors.amount} />
        <div className="flex flex-col gap-4 lg:flex-row">
          <div className="flex-1 min-w-0">
            <InputField id="mortgage-term" label="Mortgage Term" suffix="years" value={formData.term} onChange={(value) => updateField("term", value)} error={errors.term} />
          </div>
          <div className="flex-1 min-w-0">
            <InputField id="interest-rate" label="Interest Rate" suffix="%" value={formData.rate} onChange={(value) => updateField("rate", value)} error={errors.rate} />
          </div>
        </div>

        <MortgageTypeSelector value={formData.mortgageType} onChange={(value) => updateField("mortgageType", value)} error={errors.mortgageType} />
        <SubmitButton />
      </div>
    </form>
  );
};

export default MortgageForm;
