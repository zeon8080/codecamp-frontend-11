import { gql, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import InfiniteScroll from "react-infinite-scroller";
import {
  IQuery,
  IQueryFetchUseditemQuestionsArgs,
} from "../../../../commons/types/generated/types";
import * as S from "./QuestionList.styles";
import { useClickAnswer } from "../../../commons/hooks/customs/useClickAnswer";
import { useClickQuestionEdit } from "../../../commons/hooks/customs/useClickQuestionEdit";
import { useClickQuestion } from "../../../commons/hooks/customs/useClickQuestion";
import AnswerList from "../../useditemAnswer/AnswerList";

export const FETCH_QUESTIONS = gql`
  query fetchUseditemQuestions($useditemId: ID!, $page: Int) {
    fetchUseditemQuestions(useditemId: $useditemId, page: $page) {
      _id
      contents
      createdAt
      user {
        name
      }
    }
  }
`;
export const UPDATE_QUESTION = gql`
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

export default function QuestionList() {
  const router = useRouter();

  const { data, fetchMore } = useQuery<
    Pick<IQuery, "fetchUseditemQuestions">,
    IQueryFetchUseditemQuestionsArgs
  >(FETCH_QUESTIONS, {
    variables: {
      useditemId: String(router.query.useditemId),
    },
  });

  const { register, handleSubmit } = useForm();
  const { onClickQuestionDelete } = useClickQuestion();
  const { answerIndex, onClickAnswer, onClickNewAnswer } = useClickAnswer();
  const { myIndex, onClickQuestionEdit, onClickQuestionEditComplete } =
    useClickQuestionEdit();

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
                    {el.user.name} : {el.contents}
                  </S.QuestionContents>
                  <S.QuestionCreated>
                    {el.createdAt.slice(0, 10)}
                  </S.QuestionCreated>
                  <button onClick={onClickQuestionEdit} id={String(index)}>
                    Edit
                  </button>
                  <button
                    id={el._id}
                    type="button"
                    onClick={onClickQuestionDelete}
                  >
                    Delete
                  </button>
                  <button onClick={onClickNewAnswer} id={String(index)}>
                    Answer
                  </button>
                </S.QuestionBox>
                <AnswerList el={el._id} />
              </S.Container>

              {index === answerIndex ? (
                <form onSubmit={handleSubmit(onClickAnswer)} id={el._id}>
                  <input type="text" {...register("contents")} />
                  <button>Answer Complete</button>
                </form>
              ) : (
                <div></div>
              )}
            </div>
          ) : (
            <form
              onSubmit={handleSubmit(onClickQuestionEditComplete)}
              id={el._id}
            >
              <div key={el._id}>
                <S.Container>
                  <S.QuestionBox>
                    <input
                      type="text"
                      {...register("contents")}
                      defaultValue={
                        data?.fetchUseditemQuestions[index].contents
                      }
                    />
                    <button id={el._id}>Edit Complete</button>
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
