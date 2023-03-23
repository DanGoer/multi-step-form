import { useFormContext } from "@/utility/FormContext";
import { useEffect, useState } from "react";
import SubTitle from "./SubTitle";
import Title from "./Title";
import styles from "./SummaryStep.module.scss";

interface summaryProps {
  monthly?: string;
  yearly?: string;
}

function summaryCalc(
  add: { service: boolean; storage: boolean; profile: boolean },
  plan: number
): summaryProps {
  const getYearly = () => {
    let yearlyTemp = 0;
    if (plan === 0) yearlyTemp = 90;
    if (plan === 1) yearlyTemp = 120;
    if (plan === 2) yearlyTemp = 150;
    if (add.service) yearlyTemp = yearlyTemp + 10;
    if (add.storage) yearlyTemp = yearlyTemp + 20;
    if (add.profile) yearlyTemp = yearlyTemp + 20;
    return yearlyTemp.toString();
  };

  const getMonthly = () => {
    let monthlyTemp = 0;
    if (plan === 0) monthlyTemp = 9;
    if (plan === 1) monthlyTemp = 12;
    if (plan === 2) monthlyTemp = 15;
    if (add.service) monthlyTemp = monthlyTemp + 1;
    if (add.storage) monthlyTemp = monthlyTemp + 2;
    if (add.profile) monthlyTemp = monthlyTemp + 2;
    return monthlyTemp.toString();
  };

  const value = { monthly: getMonthly(), yearly: getYearly() };
  return value;
}

function SummaryStep() {
  const [result, setResult] = useState<summaryProps>({});
  const { schedule, setSchedule, add, plan } = useFormContext();

  useEffect(() => {
    setResult(summaryCalc(add, plan));
  }, []);

  return (
    <div className="card">
      <Title title={"Finishing up"} />
      <SubTitle
        subTitle={"Double-check everything looks OK before confirming."}
      />
      <ul className={styles.summary}>
        <li>
          <div>
            {schedule ? (
              <h4>
                {plan === 0 && "Arcade"}
                {plan === 1 && "Advanced"}
                {plan === 2 && "Pro"} (Monthly)
              </h4>
            ) : (
              <h4>
                {plan === 0 && "Arcade"}
                {plan === 1 && "Advanced"}
                {plan === 2 && "Pro"} (Yearly)
              </h4>
            )}
            <button onClick={() => setSchedule(!schedule)}>Change</button>
          </div>
          {schedule ? (
            <p className={styles.sum}>
              ${plan === 0 && "9"}
              {plan === 1 && "12"}
              {plan === 2 && "15"}/mo
            </p>
          ) : (
            <p>
              ${plan === 0 && "90"}
              {plan === 1 && "120"}
              {plan === 2 && "150"}/yr
            </p>
          )}
        </li>
        <hr />
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
      <span className={styles.total}>
        {schedule ? (
          <>
            <p>Total (per month)</p>
            <p>+${result?.monthly}/mo</p>
          </>
        ) : (
          <>
            <p>Total (per year)</p>
            <p>${result?.yearly}/mo</p>
          </>
        )}
      </span>
    </div>
  );
}
export default SummaryStep;
