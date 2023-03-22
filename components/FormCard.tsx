import { useFormContext } from "@/utility/FormContext";
import AddStep from "./AddStep";
import BackButton from "./BackButton";
import ConfirmButton from "./ConfirmButton";

import styles from "./FormCard.module.scss";

import InfoStep from "./InfoStep";
import PlanStep from "./PlanStep";
import Steps from "./Steps";
import SummaryStep from "./SummaryStep";
import ThankStep from "./ThankStep";

function FormCard() {
  const { step } = useFormContext();

  return (
    <section className={styles["form-card"]}>
      <Steps />
      {step === 1 && <InfoStep />}
      {step === 2 && <PlanStep />}
      {step === 3 && <AddStep />}
      {step === 4 && <SummaryStep />}
      {step === 5 && <ThankStep />}
      <span className={styles["buttons-control"]}>
        {step !== 1 && step !== 5 ? <BackButton /> : <div></div>}
        {step !== 5 && <ConfirmButton />}
      </span>
    </section>
  );
}
export default FormCard;
