import { useFormContext } from "@/utility/FormContext";
import BackButton from "./BackButton";
import ConfirmButton from "./ConfirmButton";

function AddStep() {
  const { setStep } = useFormContext();

  const handleNextStep = () => {
    setStep(4);
  };

  const handlePreviousStep = () => {
    setStep(2);
  };

  return (
    <div>
      <ul>
        <li>
          <input type="checkbox" />
          <span>
            <div>
              <h4>Online service</h4>
              <p>Access to multiplayer games</p>
            </div>
            <p>+$1/mo</p>
            <p>+$10/yr</p>
          </span>
        </li>
        <li>
          <input type="checkbox" />
          <span>
            <div>
              <h4>Larger storage</h4>
              <p>Extra 1TB of cloud save</p>
            </div>
            <p>+$2/mo</p>
            <p>+$20/yr</p>
          </span>
        </li>
        <li>
          <input type="checkbox" />
          <span>
            <div>
              <h4>Customizable profile</h4>
              <p>Custom theme on your profile</p>
            </div>
            <p>+$2/mo</p>
            <p>+$20/yr</p>
          </span>
        </li>
      </ul>
      <BackButton handler={handlePreviousStep} />
      <ConfirmButton handler={handleNextStep} text="Next Step" />
    </div>
  );
}
export default AddStep;
