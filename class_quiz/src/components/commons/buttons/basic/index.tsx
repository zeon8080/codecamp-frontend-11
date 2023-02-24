interface IButton {
  isActive: boolean;
  title: string;
}

export default function ButtonBasic(props: IButton): JSX.Element {
  return (
    <button style={{ backgroundColor: props.isActive ? "yellow" : "gray" }}>
      {props.title}
    </button>
  );
}
