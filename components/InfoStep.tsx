import { useFormContext } from "@/utility/FormContext";

import styles from "./InfoStep.module.scss";

import SubTitle from "./SubTitle";
import Title from "./Title";

function InfoStep() {
  const { personalInfo, setPersonalInfo, required } = useFormContext();

  return (
    <form className={`card ${styles.info}`}>
      <Title title="Personal info" />
      <SubTitle subTitle="Please provide your name, email address, and phone number." />
      <span>
        <label htmlFor="name">Name</label>
        {required.name ? <label>This field is required</label> : <div></div>}
      </span>
      <input
        className={
          required.name
            ? `${styles.error} ${styles["input-style"]}`
            : `${styles["input-style"]}`
        }
        type="text"
        id="name"
        placeholder="e.g. Stephen King"
        value={personalInfo.name}
        onChange={(e) =>
          setPersonalInfo({ ...personalInfo, name: e.target.value })
        }
        required
      />
      <span>
        <label htmlFor="email">Email-Address</label>
        {required.email ? <label>This field is required</label> : <div></div>}
      </span>
      <input
        className={
          required.email
            ? `${styles.error} ${styles["input-style"]}`
            : `${styles["input-style"]}`
        }
        type="email"
        id="email"
        placeholder="e.g. stephenking@lorem.com"
        value={personalInfo.email}
        onChange={(e) =>
          setPersonalInfo({ ...personalInfo, email: e.target.value })
        }
        required
      />
      <span>
        <label htmlFor="phone">Phone Number</label>
        {required.phone ? <label>This field is required</label> : <div></div>}
      </span>
      <input
        className={
          required.phone
            ? `${styles.error} ${styles["input-style"]}`
            : `${styles["input-style"]}`
        }
        type="text"
        id="phone"
        placeholder="e.g. +1 234 567 890"
        value={personalInfo.phone}
        onChange={(e) =>
          setPersonalInfo({ ...personalInfo, phone: e.target.value })
        }
        required
      />
    </form>
  );
}
export default InfoStep;
