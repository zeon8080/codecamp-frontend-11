import { ChangeEvent, Dispatch, SetStateAction } from "react";
import { IBoardComment } from "../../../../commons/types/generated/types";

export interface ICommentsWriteUI {
  onClickCommentBtn: () => Promise<void>;
  onChangeCommentWriter: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeCommentContents: (event: ChangeEvent<HTMLTextAreaElement>) => void;
  onChangeCommentPassword: (event: ChangeEvent<HTMLInputElement>) => void;
  onClickUpdateBtn: () => Promise<void>;
  onChangeRate: (event: SetStateAction<number>) => void;
  writer: string;
  password: string;
  contents: string;
  isEdit?: boolean;
  el?: IBoardComment;
  value: number;
}

export interface ICommentsWrite {
  isEdit?: boolean;
  setIsEdit?: Dispatch<SetStateAction<boolean>>;
  el?: IBoardComment;
}
