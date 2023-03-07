import { useState } from "react";
import { useMutationAnswer } from "../mutation/useMutationAnswer";

export const useClickAnswer = () => {
  const [createAnswer] = useMutationAnswer();
  const [answerIndex, setAnswerIndex] = useState(-1);

  const onClickNewAnswer = (event) => {
    setAnswerIndex(Number(event.currentTarget.id));
  };

  const onClickAnswer = async (data, event) => {
    console.log("대댓글 데이터", data);
    await createAnswer({
      variables: {
        createUseditemQuestionAnswerInput: {
          contents: data.contents,
        },
        useditemQuestionId: event.target.id,
      },
    });
    setAnswerIndex(-1);
  };
  return { answerIndex, onClickAnswer, onClickNewAnswer };
};
