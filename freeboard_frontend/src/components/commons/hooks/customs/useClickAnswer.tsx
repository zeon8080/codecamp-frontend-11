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
  const [isAnswer, setIsAnswer] = useState(false);
  const [createAnswer] = useMutation(CREATE_ANSWER);

  const onClickNewAnswer = () => {
    setIsAnswer(true);
  };

  const onClickAnswer = (data, event) => {
    console.log("대댓글 데이터", data);
    const result = createAnswer({
      variables: {
        createUseditemQuestionAnswerInput: {
          contents: data.contents,
        },
        useditemQuestionId: event.target.id,
      },
    });
    console.log(result);
    console.log("대댓글 ㅇㅂ", event.target.id);
    setIsAnswer(false);
  };
  return { isAnswer, onClickAnswer, onClickNewAnswer };
};
