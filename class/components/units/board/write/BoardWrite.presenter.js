import { BlueButton, RedInput } from "./BoardWrite.styles";

export default function BoardWriteUI(props) {
  return (
    <div>
      <div>@@@@@@@여기는 프리젠터입니다.@@@@@@@</div>
      <div>
        작성자:
        <RedInput type="text" onChange={props.bbb} />
        제목:
        <RedInput type="text" onChange={props.ccc} />
        내용:
        <RedInput type="text" onChange={props.ddd} />
        <BlueButton onClick={props.aaa}>GRAPHQL-API 요청하기</BlueButton>
      </div>
      <div>@@@@@@@여기는 프리젠터입니다.@@@@@@@</div>
    </div>
  );
}
