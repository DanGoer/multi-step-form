import { useFormContext } from "@/utility/FormContext";
import styles from "./AddStep.module.scss";
import SubTitle from "./SubTitle";
import Title from "./Title";

interface addI {
  service: boolean;
  storage: boolean;
  profile: boolean;
}

function AddStep() {
  const { schedule, add, setAdd } = useFormContext();

  return (
    <div className="card">
      <Title title={"Pick add-ons"} />
      <SubTitle subTitle={"Add-ons help enhance your gaming experience."} />
      <ul className={styles.picks}>
        <li
          className={`${styles.add} ${add.service && styles.checkadd}`}
          onClick={() =>
            setAdd((prevAdd: addI) => ({
              ...prevAdd,
              service: !prevAdd.service,
            }))
          }
        >
          <label className={styles.container}>
            <input type="checkbox" checked={add.service} />
            <span
              onClick={() =>
                setAdd((prevAdd: addI) => ({
                  ...prevAdd,
                  service: !prevAdd.service,
                }))
              }
              className={styles.checkmark}
            ></span>
          </label>
          <div>
            <h4>Online service</h4>
            <p>Access to multiplayer games</p>
          </div>
          {schedule ? <p>+$1/mo</p> : <p>+$10/yr</p>}
        </li>
        <li
          className={`${styles.add} ${add.storage && styles.checkadd}`}
          onClick={() =>
            setAdd((prevAdd: addI) => ({
              ...prevAdd,
              storage: !prevAdd.storage,
            }))
          }
        >
          <label className={styles.container}>
            <input type="checkbox" checked={add.storage} />
            <span
              onClick={() =>
                setAdd((prevAdd: addI) => ({
                  ...prevAdd,
                  storage: !prevAdd.storage,
                }))
              }
              className={styles.checkmark}
            ></span>
          </label>
          <div>
            <h4>Larger storage</h4>
            <p>Extra 1TB of cloud save</p>
          </div>
          {schedule ? <p>+$2/mo</p> : <p>+$20/yr</p>}
        </li>
        <li
          className={`${styles.add} ${add.profile && styles.checkadd}`}
          onClick={() =>
            setAdd((prevAdd: addI) => ({
              ...prevAdd,
              profile: !prevAdd.profile,
            }))
          }
        >
          <label className={styles.container}>
            <input type="checkbox" checked={add.profile} />
            <span
              onClick={() =>
                setAdd((prevAdd: addI) => ({
                  ...prevAdd,
                  profile: !prevAdd.profile,
                }))
              }
              className={styles.checkmark}
            ></span>
          </label>
          <div>
            <h4>Customizable profile</h4>
            <p>Custom theme on your profile</p>
          </div>
          {schedule ? <p>+$2/mo</p> : <p>+$20/yr</p>}
        </li>
      </ul>
    </div>
  );
}
export default AddStep;
