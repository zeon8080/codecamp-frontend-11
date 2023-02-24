import { useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { ChangeEvent, useState, SetStateAction } from "react";
import CommentsWriteUI from "./CommentsWrite.presenter";
import { CREATE_COMMENT, UPDATE_COMMENT } from "./CommentsWrite.queries";
import { FETCH_COMMENT } from "../CommentsLists/CommentsLists.queries";
import type { ICommentsWrite } from "./CommentsWrite.type";
import {
  IMutation,
  IMutationCreateBoardCommentArgs,
  IMutationUpdateBoardCommentArgs,
  IUpdateBoardCommentInput,
} from "../../../../commons/types/generated/types";

export default function CommentsWrite(props: ICommentsWrite): JSX.Element {
  const router = useRouter();

  const [createBoardComment] = useMutation<
    Pick<IMutation, "createBoardComment">,
    IMutationCreateBoardCommentArgs
  >(CREATE_COMMENT);

  const [updateBoardComment] = useMutation<
    Pick<IMutation, "updateBoardComment">,
    IMutationUpdateBoardCommentArgs
  >(UPDATE_COMMENT);

  const [writer, setCommentWriter] = useState("");
  const [contents, setCommentContents] = useState("");
  const [password, setCommentPassword] = useState("");
  const [value, setValue] = useState(0);

  const onChangeRate = (event: SetStateAction<number>): void => {
    setValue(event);
  };

  const onChangeCommentWriter = (
    event: ChangeEvent<HTMLInputElement>
  ): void => {
    setCommentWriter(event.target.value);
  };

  const onChangeCommentContents = (
    event: ChangeEvent<HTMLTextAreaElement>
  ): void => {
    setCommentContents(event.target.value);
  };

  const onChangeCommentPassword = (
    event: ChangeEvent<HTMLInputElement>
  ): void => {
    setCommentPassword(event.target.value);
  };

  const onClickCommentBtn = async (): Promise<void> => {
    try {
      await createBoardComment({
        variables: {
          boardId: String(router.query.boardId),
          createBoardCommentInput: {
            writer,
            contents,
            password,
            rating: value,
          },
        },
        refetchQueries: [
          {
            query: FETCH_COMMENT,
            variables: { boardId: router.query.boardId },
          },
        ],
      });
    } catch (error) {
      if (error instanceof Error) alert(error.message);
    }

    setCommentWriter("");
    setCommentPassword("");
    setCommentContents("");
    setValue(0);
  };
  const onClickUpdateBtn = async (): Promise<void> => {
    try {
      const updateBoardCommentInput: IUpdateBoardCommentInput = {};
      if (contents !== "") updateBoardCommentInput.contents = contents;
      if (value !== props.el?.rating) updateBoardCommentInput.rating = value;
      await updateBoardComment({
        variables: {
          updateBoardCommentInput: {
            contents,
            rating: value,
          },
          password,
          boardCommentId: String(props.el?._id),
        },
        refetchQueries: [
          {
            query: FETCH_COMMENT,
            variables: { boardId: router.query.boardId },
          },
        ],
      });

      props.setIsEdit?.(false);
    } catch (error) {
      if (error instanceof Error) alert(error.message);
    }
  };

  return (
    <CommentsWriteUI
      writer={writer}
      password={password}
      contents={contents}
      value={value}
      onChangeRate={onChangeRate}
      onClickCommentBtn={onClickCommentBtn}
      onChangeCommentWriter={onChangeCommentWriter}
      onChangeCommentContents={onChangeCommentContents}
      onChangeCommentPassword={onChangeCommentPassword}
      onClickUpdateBtn={onClickUpdateBtn}
      isEdit={props.isEdit}
      el={props.el}
    />
  );
}
