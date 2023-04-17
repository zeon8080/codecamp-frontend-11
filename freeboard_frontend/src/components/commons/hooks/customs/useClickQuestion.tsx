import { useRouter } from "next/router";
import { FETCH_QUESTIONS } from "../../../units/useditemQuestions/QuestionList/QuestionList.index";
import { useMutationQuestion } from "../mutation/useMutationQuestion";
import { useMutationQuestionDelete } from "../mutation/useMutationQuestionDelete";

export interface IQuestionWrite {
  contents?: string;
}

export const useClickQuestion = () => {
  const router = useRouter();
  const [createQuestion] = useMutationQuestion();
  const [deleteQuestion] = useMutationQuestionDelete();

  const onClickQuestion = (setValue: any) => async (data: IQuestionWrite) => {
    try {
      const result = await createQuestion({
        variables: {
          createUseditemQuestionInput: {
            contents: String(data.contents),
          },
          useditemId: String(router.query.useditemId),
        },
        refetchQueries: [
          {
            query: FETCH_QUESTIONS,
            variables: { useditemId: router.query.useditemId },
          },
        ],
      });
      console.log(result);
      alert("질문이 등록되었습니다.");
    } catch (error) {
      if (error instanceof Error) alert(error.message);
    }
    setValue("contents", "");
  };

  const onClickQuestionDelete = async (event: any) => {
    await deleteQuestion({
      variables: {
        useditemQuestionId: event.target.id,
      },
      refetchQueries: [
        {
          query: FETCH_QUESTIONS,
          variables: { useditemId: router.query.useditemId },
        },
      ],
    });
    alert("삭제되었습니다.");
  };

  return { onClickQuestion, onClickQuestionDelete };
};
