import { useFormContext } from "@/utility/FormContext";

function ConfirmButton() {
  const { step, setStep } = useFormContext();
  const handleNextStep = () => {
    setStep((prevStep: number) => prevStep + 1);
  };

  return (
    <button onClick={handleNextStep}>
      {step === 4 ? "Confirm" : "Next Step"}
    </button>
  );
}
export default ConfirmButton;
