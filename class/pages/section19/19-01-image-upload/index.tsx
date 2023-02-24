import { useMutation, gql } from "@apollo/client";
import type { ChangeEvent } from "react";
import { useState } from "react";

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

export default function ImageUploadPage(): JSX.Element {
  const [imageUrl, setImageUrl] = useState("");
  const [uploadFile] = useMutation<
    Pick<IMutation, "uploadFile">,
    IMutationUploadFileArgs
  >(UPLOAD_FILE);

  const onChangeFile = async (
    e: ChangeEvent<HTMLInputElement>
  ): Promise<void> => {
    const file = e.target.files?.[0]; // 배열로 들어오는 이유: multiple을 주면 여러개의 파일을 드래그하여 가져올 수 있음
    console.log(file);

    const result = await uploadFile({ variables: { file } });
    console.log(result);
    console.log(result.data?.uploadFile.url);
    setImageUrl(result.data?.uploadFile.url ?? "");
  };

  return (
    <>
      <input type="file" onChange={onChangeFile} multiple={true} />

      <img src={`https://storage.googleapis.com/${imageUrl}`} />
    </>
  );
}
