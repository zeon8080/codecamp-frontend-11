// import { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { schema } from "../validation";
import ButtonBasic from "../../../src/components/commons/buttons/basic";
import InputBasic from "../../../src/components/commons/inputs/basic";

interface IHookData {
  writer: string;
  password: string;
  title: string;
  contents: string;
}

export default function HookPage(): JSX.Element {
  //   const [writer, setWriter] = useState();
  //   const [title, setTitle] = useState();
  //   const [contents, setContents] = useState();

  const { register, handleSubmit, formState } = useForm<IHookData>({
    resolver: yupResolver(schema),
    mode: "onChange",
  });

  const onClickSubmit = (data: IHookData): void => {
    console.log(data);
  };

  //   const onChangeWriter = (event) => {
  //     setWriter(event.target.value);
  //   };
  //   const onChangeTitle = (event) => {
  //     setTitle(event.target.value);
  //   };
  //   const onChangeContents = (event) => {
  //     setContents(event.target.value);
  //   };

  return (
    <form onSubmit={handleSubmit(onClickSubmit)}>
      작성자:
      <InputBasic register={register("writer")} />
      <div>{formState.errors.writer?.message}</div>
      비밀번호:
      <InputBasic type="password" register={register("password")} />
      <div>{formState.errors.password?.message}</div>
      제목:
      <InputBasic register={register("title")} />
      <div>{formState.errors.title?.message}</div>
      내용:
      <InputBasic register={register("contents")} />
      <div>{formState.errors.contents?.message}</div>
      <ButtonBasic title="등록" isActive={formState.isValid} />
    </form>
  );
}
