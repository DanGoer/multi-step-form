import { useFormContext } from "@/utility/FormContext";
import BackButton from "./BackButton";
import ConfirmButton from "./ConfirmButton";

function PlanStep() {
  const { setStep, schedule, setSchedule, plan, setPlan } = useFormContext();

  const handleNextStep = () => {
    setStep(3);
  };

  const handlePreviousStep = () => {
    setStep(1);
  };

  return (
    <div>
      <ul>
        <li onClick={() => setPlan(0)}>
          <div>Logo</div>
          <h4>Arcade</h4>
          {schedule ? (
            <p>$9/mo</p>
          ) : (
            <>
              <p>$90/yr</p>
              <p>2 months free</p>
            </>
          )}
        </li>
        <li onClick={() => setPlan(1)}>
          <div>Logo</div>
          <h4>Advanced</h4>
          {schedule ? (
            <p>$12/mo</p>
          ) : (
            <>
              <p>$120/yr</p>
              <p>2 months free</p>
            </>
          )}
        </li>
        <li onClick={() => setPlan(2)}>
          <div>Logo</div>
          <h4>Pro</h4>
          {schedule ? (
            <p>$15/mo</p>
          ) : (
            <>
              <p>$150/yr</p>
              <p>2 months free</p>
            </>
          )}
        </li>
      </ul>
      <div>
        Monthly{" "}
        <input
          onClick={() => setSchedule(!schedule)}
          defaultChecked={schedule}
          type="checkbox"
          name="switch schedule"
        />{" "}
        Yearly
      </div>
      <BackButton handler={handlePreviousStep} />
      <ConfirmButton handler={handleNextStep} text="Next Step" />
    </div>
  );
}
export default PlanStep;
