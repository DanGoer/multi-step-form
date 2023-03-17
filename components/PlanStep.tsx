import { useFormContext } from "@/utility/FormContext";
import BackButton from "./BackButton";
import ConfirmButton from "./ConfirmButton";

function PlanStep() {
  const { setStep } = useFormContext();

  const handleNextStep = () => {
    setStep(3);
  };

  const handlePreviousStep = () => {
    setStep(1);
  };

  return (
    <div>
      <ul>
        <li>
          <div>Logo</div>
          <h4>Arcade</h4>
          <p>$9/mo</p>
          <p>$90/yr</p>
          <p>2 months free</p>
        </li>
        <li>
          <div>Logo</div>
          <h4>Advanced</h4>
          <p>$12/mo</p>
          <p>$120/yr</p>
          <p>2 months free</p>
        </li>
        <li>
          <div>Logo</div>
          <h4>Pro</h4>
          <p>$15/mo</p>
          <p>$150/yr</p>
          <p>2 months free</p>
        </li>
      </ul>
      <BackButton handler={handlePreviousStep} />
      <ConfirmButton handler={handleNextStep} text="Next Step" />
    </div>
  );
}
export default PlanStep;
