import SubTitle from "./SubTitle";
import Title from "./Title";
import styles from "./ThankStep.module.scss";

function ThankStep() {
  return (
    <div>
      <div>Icon</div>
      <Title title="Thank you!" />
      <SubTitle
        subTitle="Thanks for confirming your subscription! We hope you have fun 
                using our platform. If you ever need support, please feel free 
                to email us at support@loremgaming.com."
      />
    </div>
  );
}
export default ThankStep;
