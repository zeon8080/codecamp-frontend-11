import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import {
  IQuestionWrite,
  useClickQuestion,
} from "../../../commons/hooks/customs/useClickQuestion";
import InputQuestion from "../../../commons/inputs/questionWrite";
import { schema } from "./QuestionWrite.validation";
import * as S from "./QuestionWrite.styles";

export default function QuestionWrite(props: IQuestionWrite): JSX.Element {
  const { onClickQuestion } = useClickQuestion();
  const { register, handleSubmit, formState, setValue } =
    useForm<IQuestionWrite>({
      resolver: yupResolver(schema),
      mode: "onChange",
      defaultValues: { contents: "" },
    });

  return (
    <S.Form onSubmit={handleSubmit(onClickQuestion(setValue))}>
      <S.QuestionBox>
        <S.QuestionInput>
          <InputQuestion register={register("contents")} />
          <S.QuestionButton>질문 등록</S.QuestionButton>
        </S.QuestionInput>
        <S.Errors>{formState.errors.contents?.message}</S.Errors>
      </S.QuestionBox>
    </S.Form>
  );
}
