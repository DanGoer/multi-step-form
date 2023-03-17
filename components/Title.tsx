interface Props {
  title: string;
}

function Title({ title }: Props) {
  return <h2>{title}</h2>;
}

export default Title;
