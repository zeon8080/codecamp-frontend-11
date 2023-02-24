import { useQuery, useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import {
  IMutation,
  IMutationDeleteBoardArgs,
  IQuery,
  IQueryFetchBoardArgs,
} from "../../../../commons/types/generated/types";
import BoardMovedUI from "./BoardMoved.presenter";
import {
  FETCH_BOARD,
  DELETE_BOARD,
  LIKE_BOARD,
  DISLIKE_BOARD,
} from "./BoardMoved.queries";

export default function BoardMoved(): JSX.Element {
  const router = useRouter();

  const { data } = useQuery<Pick<IQuery, "fetchBoard">, IQueryFetchBoardArgs>(
    FETCH_BOARD,
    {
      variables: {
        boardId: String(router.query.boardId),
      },
    }
  );
  console.log(data);
  const [deleteBoard] = useMutation<
    Pick<IMutation, "deleteBoard">,
    IMutationDeleteBoardArgs
  >(DELETE_BOARD);
  const [likeBoard] = useMutation(LIKE_BOARD);
  const [dislikeBoard] = useMutation(DISLIKE_BOARD);

  const onClickMove = () => {
    router.push(`/boards/${router.query.boardId}/edit`);
  };

  const onClickLike = async () => {
    await likeBoard({
      variables: {
        boardId: router.query.boardId,
      },
      refetchQueries: [
        {
          query: FETCH_BOARD,
          variables: { boardId: router.query.boardId },
        },
      ],
    });
  };
  const onClickDislike = async () => {
    await dislikeBoard({
      variables: {
        boardId: router.query.boardId,
      },
      refetchQueries: [
        {
          query: FETCH_BOARD,
          variables: { boardId: router.query.boardId },
        },
      ],
    });
  };

  const onClickDelete = async () => {
    await deleteBoard({
      variables: {
        boardId: String(router.query.boardId),
      },
    });
    alert("삭제되었습니다.");
    router.push("/boards");
  };

  const onClickMovedList = async () => {
    await deleteBoard({
      variables: {
        boardId: String(router.query.boardId),
      },
    });

    router.push("/boards");
  };

  return (
    <BoardMovedUI
      data={data}
      onClickMove={onClickMove}
      onClickDelete={onClickDelete}
      onClickMovedList={onClickMovedList}
      onClickLike={onClickLike}
      onClickDislike={onClickDislike}
    />
  );
}
