import { gql, useMutation } from "@apollo/client";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import "react-quill/dist/quill.snow.css";

const CREATE_BOARD = gql`
  mutation createBoard($createBoardInput: CreateBoardInput!) {
    createBoard(createBoardInput: $createBoardInput) {
      _id
      writer
      title
      contents
    }
  }
`;

const ReactQuill = dynamic(async () => await import("react-quill"), {
  ssr: false,
});

interface ICreateBoard {
  writer?: string;
  password?: string;
  title?: string;
  contents?: string;
}

export default function WebEditor() {
  const router = useRouter();
  const [createBoard] = useMutation(CREATE_BOARD);
  const { register, handleSubmit, setValue, trigger } = useForm({
    mode: "onChange",
  });

  const onChangeContents = (value: string): void => {
    console.log(value);
    setValue("contents", value === "<p><br></p>" ? "" : value);
    void trigger("contents"); // setValue에 컨텐츠를 억지로 강제로 담아주는데 담기기만하고 onChange된 값을 보내주려면 트리거를 써야한다.
  };

  const onClickSubmit = async (data: ICreateBoard): Promise<void> => {
    const result = await createBoard({
      variables: {
        createBoardInput: {
          writer: data.writer,
          password: data.password,
          title: data.title,
          contents: data.contents,
        },
      },
    });
    alert("등록되었습니다.");
    const boardId = result.data.createBoard._id;
    void router.push(`/27/editor/detail/${boardId}`);
  };

  return (
    <form onSubmit={handleSubmit(onClickSubmit)}>
      작성자: <input type="text" {...register("writer")} />
      <br />
      비밀번호: <input type="password" {...register("password")} />
      <br />
      제목: <input type="text" {...register("title")} />
      <br />
      내용: <ReactQuill onChange={onChangeContents} />
      <br />
      <button>등록!</button>
    </form>
  );
}
