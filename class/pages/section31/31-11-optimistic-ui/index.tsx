import { gql, useMutation, useQuery } from "@apollo/client";
import type {
  IMutation,
  IMutationLikeBoardArgs,
  IQuery,
  IQueryFetchBoardArgs,
} from "../../../src/commons/types/generated/types";

const FETCH_BOARD = gql`
  query fetchBoard($boardId: ID!) {
    fetchBoard(boardId: $boardId) {
      _id
      likeCount
    }
  }
`;

const LIKE_BOARD = gql`
  mutation likeBoard($boardId: ID!) {
    likeBoard(boardId: $boardId)
  }
`;

export default function OptimisticUiPage(): JSX.Element {
  const { data } = useQuery<Pick<IQuery, "fetchBoard">, IQueryFetchBoardArgs>(
    FETCH_BOARD,
    {
      variables: { boardId: "63ff823faef9f000281b3083" },
    }
  );

  const [likeBoard] = useMutation<
    Pick<IMutation, "likeBoard">,
    IMutationLikeBoardArgs
  >(LIKE_BOARD);

  const onClickLike = (): void => {
    void likeBoard({
      variables: {
        boardId: "63ff823faef9f000281b3083",
      },
      //   refetchQueries:[{}]
      optimisticResponse: {
        likeBoard: (data?.fetchBoard.likeCount ?? 0) + 1,
      },
      update: (cache, { data }) => {
        cache.writeQuery({
          query: FETCH_BOARD,
          variables: { boardId: "63ff823faef9f000281b3083" },
          data: {
            fetchBoard: {
              id: "63ff823faef9f000281b3083",
              __typename: "Board", // id,typename은 꼭 같이 적어주어야한다.
              likeCount: data?.likeBoard, // 좋아요(갯수)
            },
          },
        });
      },
    });
  };

  return (
    <>
      <div>현재 카운트(좋아요):{data?.fetchBoard.likeCount}</div>
      <button onClick={onClickLike}>좋아요 올리기</button>
    </>
  );
}
