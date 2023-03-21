import { useFormContext } from "@/utility/FormContext";
import AddStep from "./AddStep";

import InfoStep from "./InfoStep";
import PlanStep from "./PlanStep";
import Steps from "./Steps";
import SummaryStep from "./SummaryStep";
import ThankStep from "./ThankStep";

function FormCard() {
  const { step } = useFormContext();

  return (
    <section>
      <Steps />
      {step === 1 && <InfoStep />}
      {step === 2 && <PlanStep />}
      {step === 3 && <AddStep />}
      {step === 4 && <SummaryStep />}
      {step === 5 && <ThankStep />}
    </section>
  );
}
export default FormCard;
