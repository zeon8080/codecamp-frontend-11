import { useForm } from "react-hook-form";
import { wrapAsync } from "../../../src/commons/libraries/asyncFunc";

interface IFormData {
  writer: string;
  title: string;
  contents: string;
  boardAddress: {
    addressDetail: string;
  };
}

export default function GraphqlMutationPage(): JSX.Element {
  const { register, handleSubmit } = useForm<IFormData>();

  const onClickSubmit = (data: IFormData): void => {
    console.log(data);
  };

  return (
    <form onSubmit={wrapAsync(handleSubmit(onClickSubmit))}>
      작성자:
      <input type="text" {...register("writer")} />
      제목:
      <input type="text" {...register("title")} />
      내용:
      <input type="text" {...register("contents")} />
      주소:
      <input type="text" {...register("boardAddress.addressDetail")} />
      <button>GRAPHQL-API 요청하기</button>
    </form>
  );
}

// <button type="reset">지우기</button>
// <button type="submit">등록하기</button>  => 기본값
// <button type="button"></button> => form에 있는 onSubmit 무시하고 해당 버튼만 실행시키는 방법
