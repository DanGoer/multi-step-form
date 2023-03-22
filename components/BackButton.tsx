import { useFormContext } from "@/utility/FormContext";

function BackButton() {
  const { step, setStep } = useFormContext();

  const handlePreviousStep = () => {
    setStep((prevStep: number) => prevStep - 1);
  };
  return <button onClick={handlePreviousStep}>Go Back</button>;
}

export default BackButton;
