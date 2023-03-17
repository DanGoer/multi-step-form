import { useFormContext } from "@/utility/FormContext";
import AddStep from "./AddStep";
import BackButton from "./BackButton";
import ConfirmButton from "./ConfirmButton";
import InfoStep from "./InfoStep";
import PlanStep from "./PlanStep";
import Steps from "./Steps";
import SubTitle from "./SubTitle";
import SummaryStep from "./SummaryStep";
import Title from "./Title";

function FormCard() {
  const { a } = useFormContext();
  console.log(a);
  return (
    <section>
      <Steps />
      <Title />
      <SubTitle />
      <InfoStep />
      <PlanStep />
      <AddStep />
      <SummaryStep />
      <BackButton />
      <ConfirmButton />
    </section>
  );
}
export default FormCard;
