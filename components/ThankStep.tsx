import SubTitle from "./SubTitle";
import Title from "./Title";
import styles from "./ThankStep.module.scss";
import Image from "next/image";

function ThankStep() {
  return (
    <div className={`card ${styles.thanks}`}>
      <Image
        src="icon-thank-you.svg"
        alt="thank you logo"
        width={60}
        height={60}
      />
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
