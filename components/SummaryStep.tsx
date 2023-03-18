import { useFormContext } from "@/utility/FormContext";
import BackButton from "./BackButton";
import ConfirmButton from "./ConfirmButton";

function SummaryStep() {
  const { setStep, schedule, setSchedule, add } = useFormContext();

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
          {schedule ? <h4>Arcade (Monthly)</h4> : <h4>Arcade (Yearly)</h4>}
          <button onClick={() => setSchedule(!schedule)}>Change</button>
          {schedule ? <p>$9/mo</p> : <p>$90/yr</p>}
        </li>
        {add.service && (
          <li>
            <p>Online Service</p>
            {schedule ? <p>$1/mo</p> : <p>$10/yr</p>}
          </li>
        )}
        {add.storage && (
          <li>
            <p>Larger Storage</p>
            {schedule ? <p>$2/mo</p> : <p>$20/yr</p>}
          </li>
        )}
        {add.profile && (
          <li>
            <p>Customizable Profile</p>
            {schedule ? <p>$2/mo</p> : <p>$20/yr</p>}
          </li>
        )}
      </ul>
      <span>
        {schedule ? (
          <>
            <p>Total (per month)</p>
            <p>+$12/mo</p>
          </>
        ) : (
          <>
            <p>Total (per year)</p>
            <p>+$120/mo</p>
          </>
        )}
      </span>
      <BackButton handler={handlePreviousStep} />
      <ConfirmButton handler={handleNextStep} text="Next Step" />
    </div>
  );
}
export default SummaryStep;
