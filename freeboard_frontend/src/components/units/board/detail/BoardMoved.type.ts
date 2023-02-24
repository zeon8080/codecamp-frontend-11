import { IQuery } from "../../../../commons/types/generated/types";

export interface IBoardMovedUI {
  data?: Pick<IQuery, "fetchBoard">;
  onClickMove: () => void;
  onClickDelete: () => Promise<void>;
  onClickMovedList: () => Promise<void>;
  onClickLike: () => Promise<void>;
  onClickDislike: () => Promise<void>;
}
