import { gql, useMutation } from "@apollo/client";
import { useState } from "react";
import type { ChangeEvent } from "react";
import { wrapAsync } from "../../../src/commons/libraries/asyncFunc";
import { useRouter } from "next/router";
const CREATE_BOARD = gql`
  mutation createBoard($createBoardInput: CreateBoardInput!) {
    createBoard(createBoardInput: $createBoardInput) {
      _id
      writer
      title
      contents
      password
    }
  }
`;

export default function StaticRoutingMovedPage(): JSX.Element {
  const router = useRouter();
  const [createBoard] = useMutation(CREATE_BOARD);
  const [writer, setWriter] = useState("");

  const [title, setTitle] = useState("");
  const [contents, setContents] = useState("");

  const onClickSubmit = async (): Promise<void> => {
    const result = await createBoard({
      variables: {
        createBoardInput: { writer, title, password: "1234", contents },
      },
    });
    console.log(result);
    const boardId = result.data.createBoard._id;
    void router.push(`/boards/${boardId}`);
  };

  const onChangeWriter = (event: ChangeEvent<HTMLInputElement>): void => {
    setWriter(event.target.value);
  };
  const onChangeTitle = (event: ChangeEvent<HTMLInputElement>): void => {
    setTitle(event.target.value);
  };
  const onChangeContents = (event: ChangeEvent<HTMLInputElement>): void => {
    setContents(event.target.value);
  };

  return (
    <div>
      작성자:
      <input role="input-writer" type="text" onChange={onChangeWriter} />
      제목:
      <input role="input-title" type="text" onChange={onChangeTitle} />
      내용:
      <input role="input-contents" type="text" onChange={onChangeContents} />
      <button role="submit-button" onClick={wrapAsync(onClickSubmit)}>
        GRAPHQL-API 요청하기
      </button>
    </div>
  );
}
