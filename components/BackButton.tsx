import { useFormContext } from "@/utility/FormContext";
import styles from "./BackButton.module.scss";

function BackButton() {
  const { setStep } = useFormContext();

  const handlePreviousStep = () => {
    setStep((prevStep: number) => prevStep - 1);
  };
  return (
    <button className={styles.back} onClick={handlePreviousStep}>
      Go Back
    </button>
  );
}

export default BackButton;
