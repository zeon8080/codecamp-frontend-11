import { gql, useMutation, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { useState } from "react";
import { useForm } from "react-hook-form";
import InfiniteScroll from "react-infinite-scroller";
import {
  IQuery,
  IQueryFetchUseditemQuestionsArgs,
} from "../../../../commons/types/generated/types";
import * as S from "./QuestionList.styles";
import InputQuestion from "../../../commons/inputs/questionWrite";

export const FETCH_QUESTIONS = gql`
  query fetchUseditemQuestions($useditemId: ID!, $page: Int) {
    fetchUseditemQuestions(useditemId: $useditemId, page: $page) {
      _id
      contents
      createdAt
      #   user {
      #     picture
      #     name
      #   }
    }
  }
`;

const UPDATE_QUESTION = gql`
  mutation updateUseditemQuestion(
    $updateUseditemQuestionInput: UpdateUseditemQuestionInput!
    $useditemQuestionId: ID!
  ) {
    updateUseditemQuestion(
      updateUseditemQuestionInput: $updateUseditemQuestionInput
      useditemQuestionId: $useditemQuestionId
    ) {
      _id
    }
  }
`;

const DELETE_QUESTION = gql`
  mutation deleteUseditemQuestion($useditemQuestionId: ID!) {
    deleteUseditemQuestion(useditemQuestionId: $useditemQuestionId)
  }
`;

interface IQusetionList {
  data?: Pick<IQuery, "fetchUseditemQuestions">;
  onLoadMore: () => void;
}

interface IQuestionUpdate {
  contents: string;
}

export default function QuestionList() {
  const router = useRouter();
  const [updateQuestion] = useMutation(UPDATE_QUESTION);
  const [deleteQuestion] = useMutation(DELETE_QUESTION);
  const { data, fetchMore } = useQuery<
    Pick<IQuery, "fetchUseditemQuestions">,
    IQueryFetchUseditemQuestionsArgs
  >(FETCH_QUESTIONS, {
    variables: {
      useditemId: String(router.query.useditemId),
    },
  });
  const { register, handleSubmit, formState } = useForm<IQuestionUpdate>({
    mode: "onChange",
  });

  const [myIndex, setMyIndex] = useState(-1);
  const onLoadMore = (): void => {
    if (data === undefined) return;
    void fetchMore({
      variables: {
        page: Math.ceil((data?.fetchUseditemQuestions.length ?? 10) / 10 + 1),
      },
      updateQuery: (prev, { fetchMoreResult }) => {
        if (fetchMoreResult.fetchUseditemQuestions === undefined) {
          return {
            fetchUseditemQuestions: [...prev.fetchUseditemQuestions],
          };
        }
        return {
          fetchUseditemQuestions: [
            ...prev.fetchUseditemQuestions,
            ...fetchMoreResult.fetchUseditemQuestions,
          ],
        };
      },
    });
  };

  const onClickQuestionEdit = (event) => {
    setMyIndex(Number(event.currentTarget.id));
  };

  const onClickQuestionUpdate = async (data, event) => {
    console.log(data);
    console.log(event);

    const result = await updateQuestion({
      variables: {
        updateUseditemQuestionInput: {
          contents: data.contents,
        },
        useditemQuestionId: event.target.id,
      },
    });
    console.log(result);
    setMyIndex(-1);
  };

  const onClickDelete = async (event) => {
    await deleteQuestion({
      variables: {
        useditemQuestionId: event.target.id,
      },
    });
    alert("삭제되었습니다.");
  };

  return (
    <>
      <InfiniteScroll
        pageStart={0}
        loadMore={onLoadMore}
        hasMore={true}
        useWindow={false}
      >
        {data?.fetchUseditemQuestions.map((el: any, index) =>
          index !== myIndex ? (
            <div key={el._id}>
              <S.Container>
                <S.QuestionBox>
                  <S.QuestionContents id={el._id}>
                    {el.contents}
                  </S.QuestionContents>
                  <S.QuestionCreated>
                    {el.createdAt.slice(0, 10)}
                  </S.QuestionCreated>
                  <button onClick={onClickQuestionEdit} id={String(index)}>
                    Edit
                  </button>
                  <button id={el._id} type="button" onClick={onClickDelete}>
                    Delete
                  </button>
                </S.QuestionBox>
              </S.Container>
            </div>
          ) : (
            <form onSubmit={handleSubmit(onClickQuestionUpdate)} id={el._id}>
              <div key={el._id}>
                <S.Container>
                  <S.QuestionBox>
                    <InputQuestion register={register("contents")} />
                    <button id={el._id}>Edit</button>
                  </S.QuestionBox>
                </S.Container>
              </div>
            </form>
          )
        ) ?? <div></div>}
      </InfiniteScroll>
    </>
  );
}
