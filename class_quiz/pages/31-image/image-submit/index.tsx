import { gql, useMutation } from "@apollo/client";
import { useState } from "react";

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

export default function WritePage() {
  const [createBoard] = useMutation(CREATE_BOARD);
  const [uploadFile] = useMutation(UPLOAD_FILE);
  const [imageUrl, setImageUrl] = useState([""]);
  const [file, setFile] = useState<File>();

  const [writer, setWriter] = useState("");
  const [password, setPassword] = useState("");
  const [title, setTitle] = useState("");
  const [contents, setContents] = useState("");

  const onChangeWriter = (e) => {
    setWriter(e.target.value);
  };
  const onChangePassword = (e) => {
    setPassword(e.target.value);
  };
  const onChangeTitle = (e) => {
    setTitle(e.target.value);
  };
  const onChangeContents = (e) => {
    setContents(e.target.value);
  };

  const onClickSubmit = async () => {
    console.log(password, title, contents, file);
    let url;
    if (file !== undefined) {
      const resultFile = await uploadFile({ variables: { file } }); // url
      url = resultFile.data?.uploadFile.url; // url 변수에 넣어줌
      console.log(url); // url 주소나옴
    }

    const result = await createBoard({
      variables: {
        createBoardInput: {
          writer,
          password,
          title,
          contents,
          images: [url],
        },
      },
    });
    console.log(result);
  };

  const onChangeFile = (event) => {
    const imageFile = event.target.files?.[0];
    if (imageFile === undefined) return;
    console.log("asdf", imageFile);

    const fileReader = new FileReader();
    fileReader.readAsDataURL(imageFile);
    fileReader.onload = (event) => {
      setImageUrl(event.target?.result);
      setFile(imageFile);
    };
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
      사진:
      <input type="file" onChange={onChangeFile} />
      <img src={imageUrl} />
      <button onClick={onClickSubmit}>ㄷㄹ</button>
    </>
  );
}
