import { gql, useMutation, useQuery } from "@apollo/client";

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
  const { data } = useQuery(FETCH_BOARD, {
    variables: { boardId: "63ff823faef9f000281b3083" },
  });

  const [likeBoard] = useMutation(LIKE_BOARD);

  const onClickLike = (): void => {
    void likeBoard({
      variables: {
        boardId: "63ff823faef9f000281b3083",
      },

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
              __typename: "Board",
              likeCount: data?.likeBoard,
            },
          },
        });
      },
    });
  };

  return (
    <>
      <div>좋아요:{data?.fetchBoard.likeCount}</div>
      <button onClick={onClickLike}>Up</button>
    </>
  );
}
