import { useFormContext } from "@/utility/FormContext";
import Image from "next/image";
import styles from "./PlanStep.module.scss";
import SubTitle from "./SubTitle";
import Title from "./Title";

function PlanStep() {
  const { schedule, setSchedule, plan, setPlan } = useFormContext();

  return (
    <div className={`card ${styles.plan}`}>
      <Title title={"Select your plan"} />
      <SubTitle
        subTitle={"You have the option of monthly or yearly billing."}
      />
      <ul>
        <li
          className={`${styles.option} ${plan === 1 && styles.marked}`}
          onClick={() => setPlan(0)}
        >
          <Image
            src="icon-arcade.svg"
            alt="Arcade option logo"
            width={40}
            height={40}
          />
          <div>
            <h4>Arcade</h4>
            {schedule ? (
              <p>$9/mo</p>
            ) : (
              <>
                <p>$90/yr</p>
                <p>2 months free</p>
              </>
            )}
          </div>
        </li>
        <li className={styles.option} onClick={() => setPlan(1)}>
          <Image
            src="icon-advanced.svg"
            alt="Arcade option logo"
            width={40}
            height={40}
          />
          <div>
            <h4>Advanced</h4>
            {schedule ? (
              <p>$12/mo</p>
            ) : (
              <>
                <p>$120/yr</p>
                <p>2 months free</p>
              </>
            )}
          </div>
        </li>
        <li className={styles.option} onClick={() => setPlan(2)}>
          <Image
            src="icon-pro.svg"
            alt="Arcade option logo"
            width={40}
            height={40}
          />
          <div>
            <h4>Pro</h4>
            {schedule ? (
              <p>$15/mo</p>
            ) : (
              <>
                <p>$150/yr</p>
                <p>2 months free</p>
              </>
            )}
          </div>
        </li>
      </ul>
      <div className={styles.switch}>
        <label>
          <strong className={styles.monthly}>Monthly</strong>
          <input
            onClick={() => setSchedule(!schedule)}
            defaultChecked={schedule}
            type="checkbox"
            name="switch schedule"
          />
          <span />
          <strong className={styles.yearly}>Yearly</strong>
        </label>
      </div>
    </div>
  );
}
export default PlanStep;
