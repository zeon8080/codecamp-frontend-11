import {
  IBoardComment,
  IQuery,
} from "../../../../commons/types/generated/types";

export interface ICommentsListsUIProps {
  data?: Pick<IQuery, "fetchBoardComments">;

  onLoadMore: () => void;
}

export interface ICommentsListsUIItemProps {
  el: IBoardComment;
}
