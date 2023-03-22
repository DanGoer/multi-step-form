import { useFormContext } from "@/utility/FormContext";
import styles from "./ConfirmButton.module.scss";

function ConfirmButton() {
  const { step, setStep, setRequired, personalInfo } = useFormContext();

  const handleNextStep = () => {
    const requiredReset = { name: false, email: false, phone: false };

    if (personalInfo.name === "") {
      setRequired({ ...requiredReset, name: true });
      return;
    }
    if (personalInfo.email === "") {
      setRequired({ ...requiredReset, email: true });
      return;
    }
    if (personalInfo.phone === "") {
      setRequired({ ...requiredReset, phone: true });
      return;
    }
    setStep((prevStep: number) => prevStep + 1);
  };

  return (
    <button className={styles.confirm} onClick={handleNextStep}>
      {step === 4 ? "Confirm" : "Next Step"}
    </button>
  );
}
export default ConfirmButton;
