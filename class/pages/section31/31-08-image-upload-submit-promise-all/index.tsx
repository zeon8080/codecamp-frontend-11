import { gql, useMutation } from "@apollo/client";
import { async } from "@firebase/util";

import type { ChangeEvent } from "react";
import { useState } from "react";
import { wrapAsync } from "../../../src/commons/libraries/asyncFunc";
import type {
  IMutation,
  IMutationUploadFileArgs,
} from "../../../src/commons/types/generated/types";

const UPLOAD_FILE = gql`
  mutation uploadFile($file: Upload!) {
    uploadFile(file: $file) {
      url
      # url만 가져올래
    }
  }
`;

const 나의그래프큐엘셋팅 = gql`
  mutation createBoard($createBoardInput: CreateBoardInput!) {
    createBoard(createBoardInput: $createBoardInput) {
      _id
    }
  }
`;
export default function ImageUploadPage(): JSX.Element {
  const [imageUrls, setImageUrls] = useState(["", "", ""]);
  const [files, setFiles] = useState<File[]>([]); // 파일은 타입을 초기값으로 알 수가 없어서 <파일>타입을 바로 선언
  const [uploadFile] = useMutation<
    Pick<IMutation, "uploadFile">,
    IMutationUploadFileArgs
  >(UPLOAD_FILE);

  const [나의함수] = useMutation(나의그래프큐엘셋팅);

  const onClickSubmit = async (): Promise<void> => {
    // 1. uploadFile
    // 1-1) 안좋은 예제 - await를 매번 기다림... => 리팩토링으로 코드를 한줄로 바꾸더라도 실제로 실행되는건 세번이기때문에 성능은 똑같이 별로다.
    // const resultFile0 = await uploadFile({ variables: { file: files[0] } });
    // const resultFile1 = await uploadFile({ variables: { file: files[1] } });
    // const resultFile2 = await uploadFile({ variables: { file: files[2] } });

    // const url0 = resultFile0.data?.uploadFile.url;
    // const url1 = resultFile1.data?.uploadFile.url;
    // const url2 = resultFile2.data?.uploadFile.url;

    // const resultUrls = [url0, url1, url2];

    // 1-2) 좋은 예제 - Promise.all 사용
    // const results = await Promise.all([
    //   uploadFile({ variables: { file: files[0] } }),
    //   uploadFile({ variables: { file: files[1] } }),
    //   uploadFile({ variables: { file: files[2] } }),
    // ]);
    // console.log(results); // [file0,file1,file2] 이런식으로 들어옴.
    // const resultUrls = results.map((el) => el.data?.uploadFile.url); // [url0,url1,url2]

    // 1-3) 좋은 예제 - Promise.all 사용 => 리팩토링
    // const files = [File0, File1, File2];
    // files.map((el) => uploadFile({ variables: { file: el } }));
    const results = await Promise.all(
      files.map(async (el) => await uploadFile({ variables: { file: el } }))
    );
    console.log(results); // [file0,file1,file2] 이런식으로 들어옴.
    const resultUrls = results.map((el) => el.data?.uploadFile.url); // [url0,url1,url2]

    // 2. createBoard
    const result = await 나의함수({
      variables: {
        // variables === $
        createBoardInput: {
          writer: "철수",
          password: "1234",
          title: "제목",
          contents: "내용",
          images: resultUrls,
        },
      },
    });
    console.log(result);
  };

  const onChangeFile =
    (index: number) =>
    async (event: ChangeEvent<HTMLInputElement>): Promise<void> => {
      const file = event.target.files?.[0]; // 배열로 들어오는 이유: multiple을 주면 여러개의 파일을 드래그하여 가져올 수 있음
      if (file === undefined) return;
      console.log(file);

      // const result = await uploadFile({ variables: { file } });
      // console.log(result.data?.uploadFile.url);
      // setImageUrl(result.data?.uploadFile.url ?? "");

      // 1. 임시 url 생성 => (가짜url - 내 브라우저에서만 접근 가능 )
      const result = URL.createObjectURL(file);
      console.log(result);

      // 2. 임시 url 생성 => ( 진짜url - 다른 브라우저에서도 접근 가능 ) 사진 자체를 txt형식으로 바꾼거라 용량이 큼.
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);
      fileReader.onload = (event) => {
        console.log(event.target?.result); // 게시판에서 e.target.id를 쓰면 eslint가 잡았던 이유: e.target은 태그만을 가르키지 않음.
        if (typeof event.target?.result === "string") {
          const tempUrls = [...imageUrls];
          tempUrls[index] = event.target?.result;
          setImageUrls(tempUrls);

          const tempFiles = [...files];
          tempFiles[index] = file;
          setFiles(tempFiles);
        }
      };

      // 미리보기파일은 어차피 미리보기라서 백엔드에 보내는게 아니라 두가지 중에 선택해도된다. 근데 첫번째꺼는 지원 안하는 브라우저도 있어서 2번째꺼를 일단은...
    };

  return (
    <>
      <input type="file" onChange={onChangeFile(0)} multiple={true} />
      <input type="file" onChange={onChangeFile(1)} multiple={true} />
      <input type="file" onChange={onChangeFile(2)} multiple={true} />
      <img src={imageUrls[0]} />
      <img src={imageUrls[1]} />
      <img src={imageUrls[2]} />
      <button onClick={wrapAsync(onClickSubmit)}>게시글 등록</button>
      {/* <img src={`https://storage.googleapis.com/${imageUrl}`} /> */}
    </>
  );
}
