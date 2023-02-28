import { useQuery, gql, useApolloClient } from "@apollo/client";
import { useRouter } from "next/router";
import { wrapAsync } from "../../../src/commons/libraries/asyncFunc";
import type {
  IQuery,
  IQueryFetchBoardsArgs,
} from "../../../src/commons/types/generated/types";

const FETCH_BOARDS = gql`
  query fetchBoards($page: Int) {
    fetchBoards(page: $page) {
      _id
      writer
      title
    }
  }
`;

const FETCH_BOARD = gql`
  query fetchBoard($boardId: ID!) {
    fetchBoard(boardId: $boardId) {
      _id
      writer
      title
      contents
    }
  }
`;
export default function StaticRoutingMovedPage(): JSX.Element {
  const router = useRouter();
  const { data } = useQuery<Pick<IQuery, "fetchBoards">, IQueryFetchBoardsArgs>(
    FETCH_BOARDS
  );

  const client = useApolloClient();

  const prefetchBoard = (boardId: string) => async () => {
    await client.query({
      query: FETCH_BOARD,
      variables: { boardId },
    });
  };

  const onClickMove = (boardId: string) => () => {
    void router.push(`section31/31-10-data-prefetch-moved/${boardId}`);
  };

  return (
    <div>
      {data?.fetchBoards.map((el) => (
        <div key={el._id}>
          <span
            style={{ margin: "10px" }}
            onMouseOver={wrapAsync(prefetchBoard(el._id))}
            onClick={onClickMove(el._id)}
          >
            {el.title}
          </span>
          <span style={{ margin: "10px" }}>{el.writer}</span>
        </div>
      ))}
    </div>
  );
}
