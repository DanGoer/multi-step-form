import { useFormContext } from "@/utility/FormContext";
import BackButton from "./BackButton";
import ConfirmButton from "./ConfirmButton";

function SummaryStep() {
  const { setStep } = useFormContext();

  const handleNextStep = () => {
    setStep(5);
  };

  const handlePreviousStep = () => {
    setStep(3);
  };

  return (
    <div>
      <ul>
        <li>
          <h4>Arcade (Monthly)</h4>
          <h4>Arcade (Yearly)</h4>
          <button>Change</button>
          <p>$9/mo</p>
          <p>$90/yr</p>
        </li>
        <li>
          <p>Online Service</p>
          <p>$1/mo</p>
          <p>$10/yr</p>
        </li>
        <li>
          <p>Larger Storage</p>
          <p>$2/mo</p>
          <p>$20/yr</p>
        </li>
      </ul>
      <span>
        <p>Total (per month)</p>
        <p>Total (per year)</p>
        <p>+$12/mo</p>
        <p>+$120/mo</p>
      </span>
      <BackButton handler={handlePreviousStep} />
      <ConfirmButton handler={handleNextStep} text="Next Step" />
    </div>
  );
}
export default SummaryStep;
