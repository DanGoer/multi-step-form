import styles from "./Title.module.scss";

interface Props {
  title: string;
}

function Title({ title }: Props) {
  return <h2 className={styles.title}>{title}</h2>;
}

export default Title;
