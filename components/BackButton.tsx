interface Props {
  handler: () => void;
}

function BackButton({ handler }: Props) {
  return <button onClick={handler}>Go Back</button>;
}

export default BackButton;
