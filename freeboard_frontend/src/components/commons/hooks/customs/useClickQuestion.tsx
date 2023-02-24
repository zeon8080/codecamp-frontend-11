import { gql, useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { useState } from "react";
import { FETCH_QUESTIONS } from "../../../units/useditemQuestions/QuestionList/QuestionList.index";
// import {
//   IMutation,
//   IMutationCreateUseditemQuestionArgs,
// } from "../../../../commons/types/generated/types";

const CREATE_QUESTION = gql`
  mutation createUseditemQuestion(
    $createUseditemQuestionInput: CreateUseditemQuestionInput!
    $useditemId: ID!
  ) {
    createUseditemQuestion(
      createUseditemQuestionInput: $createUseditemQuestionInput
      useditemId: $useditemId
    ) {
      _id
    }
  }
`;

export interface IQuestionWrite {
  contents: string;
  //   onClickQuestion: (data: IQuestionWrite) => void;
}

export const useClickQuestion = () => {
  const router = useRouter();
  const [contents, setQuestionContents] = useState("");

  const [createQuestion] = useMutation(
    //   <
    //     Pick<IMutation, "createUseditemQuestion">,
    //     IMutationCreateUseditemQuestionArgs
    //   >
    CREATE_QUESTION
  );

  const onClickQuestion = async (data: IQuestionWrite) => {
    try {
      const result = await createQuestion({
        variables: {
          createUseditemQuestionInput: {
            contents: String(data.contents),
          },
          useditemId: router.query.useditemId,
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

    // setQuestionContents("");
  };
  return { onClickQuestion };
};
