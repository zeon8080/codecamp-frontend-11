// import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import dynamic from "next/dynamic";
import { wrapFormAsync } from "../../../src/commons/libraries/asyncFunc";
import { useForm } from "react-hook-form";
// import { useEffect } from "react";

const ReactQuill = dynamic(async () => await import("react-quill"), {
  ssr: false,
});

export default function WebEditorPage(): JSX.Element {
  const { register, setValue, trigger } = useForm({
    mode: "onChange",
  });

  // ReactQuill 만든 사람들이 만든 onChange이므로 event 는 안들어옴
  const onChangeContents = (value: string): void => {
    console.log(value);
    // register로 등록하지않고 강제로 값을 넣어주는 기능
    setValue("contents", value === "<p><br></p>" ? "" : value); // 기본적으로 가지고 있는 에디터 공백(?)
    // onChange됐으니까 에러 검증 같은 것들 요청 react-hook-form에 알려주는 기능.
    void trigger("contents");
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
      작성자 : <input type="text" {...register("writer")} />
      <br />
      비밀번호 : <input type="password" {...register("password")} />
      <br />
      제목 : <input type="text" {...register("title")} />
      <br />
      내용 : <ReactQuill onChange={onChangeContents} />
      <button>등록!</button>
    </form>
  );
}
