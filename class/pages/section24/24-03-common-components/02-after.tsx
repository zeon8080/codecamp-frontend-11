import { useForm } from "react-hook-form";
import { wrapAsync } from "../../../src/commons/libraries/asyncFunc";
import { yupResolver } from "@hookform/resolvers/yup";
import { schema } from "./02-after.validation";
import Input01 from "../../../src/commons/inputs/01";
import Button01 from "../../../src/commons/buttons/01";

interface IFormData {
  writer: string;
  title: string;
  contents: string;
  email: string;
  password: string;
  phone: string;
  // boardAddress: {
  //   addressDetail: string;
  // };
}

export default function GraphqlMutationPage(): JSX.Element {
  const { register, handleSubmit, formState } = useForm<IFormData>({
    resolver: yupResolver(schema),
    mode: "onChange",
  });

  const onClickSubmit = (data: IFormData): void => {
    console.log(data);
  };

  return (
    <form onSubmit={wrapAsync(handleSubmit(onClickSubmit))}>
      이메일:
      <Input01 register={register("email")} />
      <div style={{ color: "red" }}>{formState.errors.email?.message}</div>
      비밀번호:
      <Input01 type="password" register={register("password")} />
      <div style={{ color: "red" }}>{formState.errors.password?.message}</div>
      폰번호:
      <Input01 register={register("phone")} />
      <div style={{ color: "red" }}>{formState.errors.phone?.message}</div>
      작성자:
      <Input01 register={register("writer")} />
      <div style={{ color: "red" }}>{formState.errors.writer?.message}</div>
      제목:
      <Input01 type="text" register={register("title")} />
      <div style={{ color: "red" }}>{formState.errors.title?.message}</div>
      내용:
      <Input01 type="text" register={register("contents")} />
      <div style={{ color: "red" }}>{formState.errors.contents?.message}</div>
      {/* 주소:
      <input type="text" {...register("boardAddress.addressDetail")} /> */}
      <Button01 title="등록하기" isActive={formState.isValid} />
    </form>
  );
}

// <button type="reset">지우기</button>
// <button type="submit">등록하기</button>  => 기본값
// <button type="button"></button> => form에 있는 onSubmit 무시하고 해당 버튼만 실행시키는 방법
