// container 부분
export default function Container() {
  return (
    <>
      {/* <Presenter child="철수" age={13} /> */}
      {Presenter({ child: "철수", age: 13 })}
    </>
  );
}

// presenter 부분
export default function Presenter(props) {
  return (
    <div>
      {props.child}는 {props.age}살 입니다.
    </div>
  );
}
