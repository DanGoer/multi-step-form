import { useFormContext } from "@/utility/FormContext";
import styles from "./Steps.module.scss";

function Steps() {
  const { step } = useFormContext();

  return (
    <ul className={styles.steps}>
      <li>
        <div
          className={
            step === 1 ? `${styles.number} ${styles.highlight}` : styles.number
          }
        >
          1
        </div>
        <div>
          <p>Step 1</p>
          <h4>Your Info</h4>
        </div>
      </li>
      <li>
        <div
          className={
            step === 2 ? `${styles.number} ${styles.highlight}` : styles.number
          }
        >
          2
        </div>
        <div>
          <p>Step 2</p>
          <h4>Select Plan</h4>
        </div>
      </li>
      <li>
        <div
          className={
            step === 3 ? `${styles.number} ${styles.highlight}` : styles.number
          }
        >
          3
        </div>
        <div>
          <p>Step 3</p>
          <h4>Add-ons</h4>
        </div>
      </li>
      <li>
        <div
          className={
            step >= 4 ? `${styles.number} ${styles.highlight}` : styles.number
          }
        >
          4
        </div>
        <div>
          <p>Step 4</p>
          <h4>Summary</h4>
        </div>
      </li>
    </ul>
  );
}
export default Steps;
