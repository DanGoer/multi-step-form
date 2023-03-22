import { useFormContext } from "@/utility/FormContext";
import styles from "./ConfirmButton.module.scss";

function ConfirmButton() {
  const { step, setStep } = useFormContext();
  const handleNextStep = () => {
    setStep((prevStep: number) => prevStep + 1);
  };

  return (
    <button className={styles.confirm} onClick={handleNextStep}>
      {step === 4 ? "Confirm" : "Next Step"}
    </button>
  );
}
export default ConfirmButton;
