import type { ApolloQueryResult } from "@apollo/client";
import type { ChangeEvent, MouseEvent } from "react";
import type {
  IQuery,
  IQueryFetchBoardsArgs,
} from "../../../../commons/types/generated/types";

export interface IBoardListsUI {
  data?: Pick<IQuery, "fetchBoards">;
  onClickMoveBoard: () => void;
  onClickMoveBoardDetail: (event: MouseEvent<HTMLDivElement>) => void;
  onChangeSearch: (event: ChangeEvent<HTMLInputElement>) => void;
  refetch: (
    variables?: Partial<IQueryFetchBoardsArgs> | undefined
  ) => Promise<ApolloQueryResult<Pick<IQuery, "fetchBoards">>>;
  count?: number;
  keyword: string;
}
