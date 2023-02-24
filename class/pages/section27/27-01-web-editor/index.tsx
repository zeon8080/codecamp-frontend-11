// import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import dynamic from "next/dynamic";
import { wrapFormAsync } from "../../../src/commons/libraries/asyncFunc";
// import { useEffect } from "react";

const ReactQuill = dynamic(async () => await import("react-quill"), {
  ssr: false,
});

export default function WebEditorPage(): JSX.Element {
  // ReactQuill 만든 사람들이 만든 onChange이므로 event 는 안들어옴

  const onChangeContents = (value: string): void => {
    console.log(value);
  };

  // useEffect(() => {
  //   async function aaa(): Promise<void> {
  //     const { Modal } = await import("antd"); // code=splitting(코드 스플릿팅)
  //   }
  //   void aaa();
  // }, []);

  const onClickSubmit = async (): Promise<void> => {
    // event.preventDefault(); // form onSubmit의 기본속성 페이지 이동을 없애주는 속성
    const { Modal } = await import("antd");
    Modal.success({ content: "등록되었습니다." });
  };

  return (
    <form onSubmit={wrapFormAsync(onClickSubmit)}>
      작성자 : <input type="text" />
      <br />
      비밀번호 : <input type="password" />
      <br />
      제목 : <input type="text" />
      <br />
      내용 : <ReactQuill onChange={onChangeContents} />
      <button>등록!</button>
    </form>
  );
}
