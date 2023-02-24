import { useMutation } from "@apollo/client";
import { useState } from "react";
import BoardWriteUI from "./BoardWrite.presenter";
//export default는 하나만 가져오는 거라서 중괄호 안해도 됨.
//어차피 하나만 가져오는 거라서 경로만 맞으면 이름 아무렇게나 써도 됨.
import { 나의그래프큐엘셋팅 } from "./BoardWrite.queries";
//export는 골라서 가져오기 가능.

// 커맨드 i 로 검색가능

export default function BoardWrite() {
  const [writer, setWriter] = useState();
  const [title, setTitle] = useState();
  const [contents, setContents] = useState();

  const [isActive, setIsActive] = useState(false);

  const [나의함수] = useMutation(나의그래프큐엘셋팅);

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
  };

  const onChangeWriter = (event) => {
    setWriter(event.target.value);
    if (!event.target.value || !title || !contents) {
      setIsActive(false);
    } else {
      setIsActive(true);
    }
  };
  const onChangeTitle = (event) => {
    setTitle(event.target.value);
    if (!writer || !event.target.value || !contents) {
      setIsActive(false);
    } else {
      setIsActive(true);
    }
  };
  const onChangeContents = (event) => {
    setContents(event.target.value);
    if (!writer || !title || !event.target.value) {
      setIsActive(false);
    } else {
      setIsActive(true);
    }
  };

  return (
    <div>
      <div>$$$$$$$여기는 컨테이너입니다.$$$$$$$</div>
      <BoardWriteUI
        onClickSubmit={onClickSubmit}
        onChangeWriter={onChangeWriter}
        onChangeTitle={onChangeTitle}
        onChangeContents={onChangeContents}
        isActive={isActive}
      />
      <div>$$$$$$$여기는 컨테이너입니다.$$$$$$$</div>
    </div>
  );
}
