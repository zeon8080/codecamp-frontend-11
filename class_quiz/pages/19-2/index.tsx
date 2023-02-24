import { useMutation, gql } from "@apollo/client";
import { useState, useRef } from "react";
import { ChangeEvent } from "react";
import { LikeOutlined } from "@ant-design/icons";
import { checkValidationFile } from "../../src/components/commons/library/validationFile";

const UPLOAD_FILE = gql`
  mutation uploadFile($file: Upload!) {
    uploadFile(file: $file) {
      url
    }
  }
`;
const CREATE_BOARD = gql`
  mutation createBoard($createBoardInput: CreateBoardInput!) {
    createBoard(createBoardInput: $createBoardInput) {
      _id
    }
  }
`;

export default function ImgUpload(): JSX.Element {
  const [writer, setWriter] = useState("");
  const [title, setTitle] = useState("");
  const [password, setPassword] = useState("");
  const [contents, setContents] = useState("");

  const [uploadFile] = useMutation(UPLOAD_FILE);
  const [createBoard] = useMutation(CREATE_BOARD);

  const fileRef = useRef<HTMLInputElement>(null);
  const [imageUrl, setImageUrl] = useState("");

  const onChangeWriter = (event: ChangeEvent<HTMLInputElement>): void => {
    setWriter(event.currentTarget.value);
  };
  const onChangeTitle = (event: ChangeEvent<HTMLInputElement>): void => {
    setTitle(event.currentTarget.value);
  };
  const onChangePassword = (event: ChangeEvent<HTMLInputElement>): void => {
    setPassword(event.currentTarget.value);
  };
  const onChangeContents = (event: ChangeEvent<HTMLInputElement>): void => {
    setContents(event.currentTarget.value);
  };

  const onChangeFile = async (
    e: ChangeEvent<HTMLInputElement>
  ): Promise<void> => {
    const file = e.target.files?.[0];

    const isValid = checkValidationFile(file);
    if (!isValid) return;

    const result = await uploadFile({ variables: { file } });
    setImageUrl(result.data?.uploadFile.url ?? "");
  };

  const onClickImage = (): void => {
    fileRef.current?.click();
  };

  const onClickSubmit = async (): Promise<void> => {
    const result = await createBoard({
      variables: {
        createBoardInput: {
          writer,
          password,
          title,
          contents,
          images: [imageUrl],
        },
      },
    });
    console.log(result);
  };

  return (
    <>
      작성자:
      <input type="text" onChange={onChangeWriter} />
      비밀번호:
      <input type="password" onChange={onChangePassword} />
      제목:
      <input type="text" onChange={onChangeTitle} />
      내용:
      <input type="text" onChange={onChangeContents} />
      <LikeOutlined
        style={{ width: "100px", height: "100px" }}
        onClick={onClickImage}
      />
      <input
        style={{ display: "none" }}
        type="file"
        onChange={onChangeFile}
        multiple={true}
        ref={fileRef}
      />
      <img src={`https://storage.googleapis.com/${imageUrl}`} />
      <button onClick={onClickSubmit}>GRAPHQL-API 요청하기</button>
    </>
  );
}
