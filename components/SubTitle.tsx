import styles from "./SubTitle.module.scss";

interface Props {
  subTitle: string;
}

function SubTitle({ subTitle }: Props) {
  return <h3 className={styles["sub-title"]}>{subTitle}</h3>;
}

export default SubTitle;
