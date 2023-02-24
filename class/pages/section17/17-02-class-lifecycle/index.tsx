// import { Component } from "react";
// import Router from "next/router";

// export default class ClassCounterPage extends Component {
//   // 클래서에서의 변수 선언 방식
//   state = {
//     count: 0,
//   };

//   componentDidMount(): void {
//     console.log("그려지고 나서 실행");
//   }

//   componentDidUpdate(): void {
//     console.log("변경 후 실행");
//   }

//   componentWillUnmount(): void {
//     console.log("사라지기 전에 실행");
//   } // 채팅방 나가기 API

//   // 클래스에서의 함수 사용 방식
//   onClickCountUp = (): void => {
//     this.setState({
//       count: 1,
//     });
//   };

//   onClickMove = (): void => {
//     void Router.push("/");
//   };
//   // 화면 출력 부분
//   render(): JSX.Element {
//     return (
//       <>
//         <div style={{ margin: "20px" }}>{this.state.count}</div>
//         <button style={{ marginLeft: "20px" }} onClick={this.onClickCountUp}>
//           카운트 업
//         </button>
//         <button style={{ marginLeft: "20px" }} onClick={this.onClickMove}>
//           나가기
//         </button>
//       </>
//     );
//   }
// }
