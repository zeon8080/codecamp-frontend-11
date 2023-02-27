import { gql, useMutation } from "@apollo/client";
import { useState } from "react";

const CREATE_ANSWER = gql`
  mutation createUseditemQuestionAnswer(
    $createUseditemQuestionAnswerInput: CreateUseditemQuestionAnswerInput!
    $useditemQuestionId: ID!
  ) {
    createUseditemQuestionAnswer(
      createUseditemQuestionAnswerInput: $createUseditemQuestionAnswerInput
      useditemQuestionId: $useditemQuestionId
    ) {
      _id
    }
  }
`;
export const useClickAnswer = () => {
  const [createAnswer] = useMutation(CREATE_ANSWER);
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
