import { gql, useMutation, useQuery } from "@apollo/client";
import { useState } from "react";
import type { MouseEvent } from "react";
import { useForm } from "react-hook-form";
import {
  IMutation,
  IMutationDeleteUseditemQuestionAnswerArgs,
  IMutationUpdateUseditemQuestionAnswerArgs,
} from "../../../../commons/types/generated/types";
import { useRouter } from "next/router";
import * as S from "./AnswerList.styles";

const FETCH_ANSWER = gql`
  query fetchUseditemQuestionAnswers($useditemQuestionId: ID!) {
    fetchUseditemQuestionAnswers(useditemQuestionId: $useditemQuestionId) {
      _id
      contents
    }
  }
`;

const UPDATE_ANSWER = gql`
  mutation updateUseditemQuestionAnswer(
    $updateUseditemQuestionAnswerInput: UpdateUseditemQuestionAnswerInput!
    $useditemQuestionAnswerId: ID!
  ) {
    updateUseditemQuestionAnswer(
      updateUseditemQuestionAnswerInput: $updateUseditemQuestionAnswerInput
      useditemQuestionAnswerId: $useditemQuestionAnswerId
    ) {
      _id
    }
  }
`;

const DELETE_ANSWER = gql`
  mutation deleteUseditemQuestionAnswer($useditemQuestionAnswerId: ID!) {
    deleteUseditemQuestionAnswer(
      useditemQuestionAnswerId: $useditemQuestionAnswerId
    )
  }
`;

interface IAnswer {
  _id: string;
  contents: string;
}

interface IEl {
  _id: string;
  contents: string;
}

interface IProps {
  el: string;
}

export default function AnswerList(props: IProps) {
  const router = useRouter();
  const { register, handleSubmit } = useForm<IAnswer>();
  const [updateAnswer] = useMutation<
    Pick<IMutation, "updateUseditemQuestionAnswer">,
    IMutationUpdateUseditemQuestionAnswerArgs
  >(UPDATE_ANSWER);
  const [deleteAnswer] = useMutation<
    Pick<IMutation, "deleteUseditemQuestionAnswer">,
    IMutationDeleteUseditemQuestionAnswerArgs
  >(DELETE_ANSWER);

  const [answerEditIndex, setAnswerEditIndex] = useState("");

  const { data: answerData } = useQuery(FETCH_ANSWER, {
    variables: {
      useditemQuestionId: props.el,
    },
  });

  const onClickUpdateAnswerComplete = async (data: IAnswer, event: any) => {
    await updateAnswer({
      variables: {
        updateUseditemQuestionAnswerInput: {
          contents: data.contents,
        },
        useditemQuestionAnswerId: event.target.id,
      },
    });
    setAnswerEditIndex("");
  };

  const onClickUpdateAnswer = (event: MouseEvent<HTMLButtonElement>) => {
    setAnswerEditIndex(event.currentTarget.id);
  };

  const onClickDeleteAnswer = async (event: any) => {
    await deleteAnswer({
      variables: {
        useditemQuestionAnswerId: event.target.id,
      },
      refetchQueries: [
        {
          query: FETCH_ANSWER,
          variables: { useditemQuestionId: router.query.useditemQuestionId },
        },
      ],
    });
    alert("삭제되었습니다.");
  };

  return (
    <S.Container>
      {answerData?.fetchUseditemQuestionAnswers.map((el: IEl) => (
        <>
          {el._id !== answerEditIndex ? (
            <S.AnswerListBox>
              <div>답변 : {el.contents}</div>
              <div>
                <S.Buttons id={el._id} onClick={onClickUpdateAnswer}>
                  수정
                </S.Buttons>
                <S.Buttons id={el._id} onClick={onClickDeleteAnswer}>
                  삭제
                </S.Buttons>
              </div>
            </S.AnswerListBox>
          ) : (
            <S.AnswerListBox>
              <form
                id={el._id}
                onSubmit={handleSubmit(onClickUpdateAnswerComplete)}
              >
                <S.AnswerInput type="text" {...register("contents")} />
                <S.Buttons>수정</S.Buttons>
              </form>
            </S.AnswerListBox>
          )}
        </>
      ))}
    </S.Container>
  );
}
