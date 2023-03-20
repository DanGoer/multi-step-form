import { useFormContext } from "@/utility/FormContext";
import BackButton from "./BackButton";
import ConfirmButton from "./ConfirmButton";

function AddStep() {
  const { setStep, schedule, add, setAdd } = useFormContext();

  const handleNextStep = () => {
    setStep(4);
  };

  const handlePreviousStep = () => {
    setStep(2);
  };

  return (
    <div>
      <ul>
        <li onClick={() => setAdd({ ...add, service: !add.service })}>
          <input type="checkbox" checked={add.service} />
          <span>
            <div>
              <h4>Online service</h4>
              <p>Access to multiplayer games</p>
            </div>
            {schedule ? <p>+$1/mo</p> : <p>+$10/yr</p>}
          </span>
        </li>
        <li onClick={() => setAdd({ ...add, storage: !add.storage })}>
          <input type="checkbox" checked={add.storage} />
          <span>
            <div>
              <h4>Larger storage</h4>
              <p>Extra 1TB of cloud save</p>
            </div>
            {schedule ? <p>+$2/mo</p> : <p>+$20/yr</p>}
          </span>
        </li>
        <li onClick={() => setAdd({ ...add, profile: !add.profile })}>
          <input type="checkbox" checked={add.profile} />
          <span>
            <div>
              <h4>Customizable profile</h4>
              <p>Custom theme on your profile</p>
            </div>
            {schedule ? <p>+$2/mo</p> : <p>+$20/yr</p>}
          </span>
        </li>
      </ul>
      <BackButton handler={handlePreviousStep} />
      <ConfirmButton handler={handleNextStep} text="Next Step" />
    </div>
  );
}
export default AddStep;
