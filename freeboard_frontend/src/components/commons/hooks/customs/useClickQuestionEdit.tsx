import { useRouter } from "next/router";
import { useState } from "react";
import { useMutationQuestionEdit } from "../mutation/useMutationQuestionEdit";
import { FETCH_QUESTIONS } from "../query/useQueryQuestion";

export const useClickQuestionEdit = () => {
  const router = useRouter();
  const [updateQuestion] = useMutationQuestionEdit();
  const [myIndex, setMyIndex] = useState(-1);

  const onClickQuestionEdit = (event: any) => {
    setMyIndex(Number(event.currentTarget.id));
  };

  const onClickQuestionEditComplete = async (data: any, event: any) => {
    await updateQuestion({
      variables: {
        updateUseditemQuestionInput: {
          contents: data.contents,
        },
        useditemQuestionId: event.target.id,
      },
      refetchQueries: [
        {
          query: FETCH_QUESTIONS,
          variables: { useditemId: router.query.useditemId },
        },
      ],
    });
    setMyIndex(-1);
  };
  return { myIndex, onClickQuestionEdit, onClickQuestionEditComplete };
};
