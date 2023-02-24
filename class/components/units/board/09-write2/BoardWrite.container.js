import { useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { useState } from "react";
import BoardWriteUI from "./BoardWrite.presenter";
//export default는 하나만 가져오는 거라서 중괄호 안해도 됨.
//어차피 하나만 가져오는 거라서 경로만 맞으면 이름 아무렇게나 써도 됨.
import { 나의그래프큐엘셋팅, UPDATE_BOARD } from "./BoardWrite.queries";
//export는 골라서 가져오기 가능.

// 커맨드 i 로 검색가능

export default function BoardWrite(props) {
  const router = useRouter();

  const [writer, setWriter] = useState("");
  const [title, setTitle] = useState("");
  const [contents, setContents] = useState("");

  const [나의함수] = useMutation(나의그래프큐엘셋팅);
  const [updateBoard] = useMutation(UPDATE_BOARD);

  //등록
  const onClickSubmit = async () => {
    const result = await 나의함수({
      variables: {
        // variables === $
        writer: writer,
        title: title,
        contents: contents,
      },
    });
    console.log(result);
    router.push(`/section09/09-04-boards/${result.data.createBoard.number}`);
    //라우터.푸시 >> 상세페이지로 이동
  };

  //수정
  const onClickUpdate = async () => {
    const myVariables = {
      number: Number(router.query.number),
    };
    if (writer !== "") {
      myVariables.writer = writer;
    }
    if (title) myVariables.title = title;
    if (contents) myVariables.contents = contents;

    const result = await updateBoard({
      variables: myVariables,
      // number: Number(router.query.number),
      // writer,
      // title,
      // contents,
    });
    console.log(result);
    router.push(`/section09/09-03-boards/${result.data.updateBoard.number}`);
  };

  const onChangeWriter = (event) => {
    setWriter(event.target.value);
  };
  const onChangeTitle = (event) => {
    setTitle(event.target.value);
  };
  const onChangeContents = (event) => {
    setContents(event.target.value);
  };

  return (
    <div>
      <div>$$$$$$$여기는 컨테이너입니다.$$$$$$$</div>
      <BoardWriteUI
        onClickSubmit={onClickSubmit}
        onClickUpdate={onClickUpdate}
        onChangeWriter={onChangeWriter}
        onChangeTitle={onChangeTitle}
        onChangeContents={onChangeContents}
        isEdit={props.isEdit}
        data={props.data} //undefined 이거나 data 이거나
      />
      <div>$$$$$$$여기는 컨테이너입니다.$$$$$$$</div>
    </div>
  );
}
