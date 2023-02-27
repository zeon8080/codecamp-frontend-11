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

  const onClickAnswer = async (data, event) => {
    console.log("대댓글 데이터", data);
    const result = await createAnswer({
      variables: {
        createUseditemQuestionAnswerInput: {
          contents: data.contents,
        },
        useditemQuestionId: event.target.id,
        // useditemQuestionId: "63fbf104aef9f000281b2bc9",
      },
    });
    console.log(event);
    setIsAnswer(false);
  };
  return { isAnswer, onClickAnswer, onClickNewAnswer };
};
