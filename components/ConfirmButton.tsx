interface Props {
  text: string;
  handler: () => void;
}

function ConfirmButton({ text, handler }: Props) {
  return <button onClick={handler}>{text}</button>;
}
export default ConfirmButton;
