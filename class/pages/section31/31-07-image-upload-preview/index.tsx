// import { useMutation, gql } from "@apollo/client";
import type { ChangeEvent } from "react";
import { useState } from "react";

// const UPLOAD_FILE = gql`
//   mutation uploadFile($file: Upload!) {
//     uploadFile(file: $file) {
//       url
//       # url만 가져올래
//     }
//   }
// `;

export default function ImageUploadPage(): JSX.Element {
  const [imageUrl, setImageUrl] = useState("");
  //   const [uploadFile] = useMutation<
  //     Pick<IMutation, "uploadFile">,
  //     IMutationUploadFileArgs
  //   >(UPLOAD_FILE);

  const onChangeFile = async (
    event: ChangeEvent<HTMLInputElement>
  ): Promise<void> => {
    const file = event.target.files?.[0]; // 배열로 들어오는 이유: multiple을 주면 여러개의 파일을 드래그하여 가져올 수 있음
    if (file === undefined) return;
    console.log(file);

    // const result = await uploadFile({ variables: { file } });
    // console.log(result);
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
      if (typeof event.target?.result === "string")
        setImageUrl(event.target?.result);
    };

    // 미리보기파일은 어차피 미리보기라서 백엔드에 보내는게 아니라 두가지 중에 선택해도된다. 근데 첫번째꺼는 지원 안하는 브라우저도 있어서 2번째꺼를 일단은...
  };

  return (
    <>
      <input type="file" onChange={onChangeFile} multiple={true} />
      <img src={imageUrl} />

      {/* <img src={`https://storage.googleapis.com/${imageUrl}`} /> */}
    </>
  );
}
