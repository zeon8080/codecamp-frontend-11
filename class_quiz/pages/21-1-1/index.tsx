// container 부분
export default function Container() {
  return <>{Presenter({ child: "철수" })}</>;
}

// presenter 부분
export default function Presenter(props) {
  return <div>{props.child}</div>;
}
