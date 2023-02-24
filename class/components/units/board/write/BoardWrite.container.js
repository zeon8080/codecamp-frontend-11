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
        aaa={onClickSubmit}
        bbb={onChangeWriter}
        ccc={onChangeTitle}
        ddd={onChangeContents}
      />
      <div>$$$$$$$여기는 컨테이너입니다.$$$$$$$</div>
    </div>
  );
}
