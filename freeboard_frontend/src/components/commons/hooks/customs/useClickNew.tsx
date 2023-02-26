import { gql, useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { checkValidationFile } from "../../../../commons/libraries/validationFile";
import { useState } from "react";
import { UseFieldArrayReturn } from "react-hook-form";
import {
  IMutation,
  IMutationUploadFileArgs,
  IQuery,
} from "../../../../commons/types/generated/types";
import type { ChangeEvent } from "react";
import { Modal } from "antd";

const CREATE_ITEM = gql`
  mutation ($createUseditemInput: CreateUseditemInput!) {
    createUseditem(createUseditemInput: $createUseditemInput) {
      _id
    }
  }
`;

export const UPLOAD_FILE = gql`
  mutation uploadFile($file: Upload!) {
    uploadFile(file: $file) {
      url
    }
  }
`;

export interface IItemWrite {
  name: string;
  remarks: string;
  contents: string;
  price: number;
  fileUrls: UseFieldArrayReturn;
  onClickNew: (data: IItemWrite) => void;
  // defaultValues: {
  //   name?: string | undefined;
  //   remarks?: string | undefined;
  //   contents?: string | undefined;
  //   price?: number | undefined;
  // };
  isEdit: boolean;
  data?: Pick<IQuery, "fetchUseditem">;
}

export const useClickNew = () => {
  const router = useRouter();
  const [imageUrls, setImageUrls] = useState(["", "", ""]);
  const [uploadFile] = useMutation<
    Pick<IMutation, "uploadFile">,
    IMutationUploadFileArgs
  >(UPLOAD_FILE);
  const [createItem] = useMutation(CREATE_ITEM);

  const onChangeFile = async (
    event: ChangeEvent<HTMLInputElement>
  ): Promise<void> => {
    const file = event.target.files?.[0]; // File Object
    const isValid = checkValidationFile(file);
    if (!isValid) return;

    try {
      const result = await uploadFile({ variables: { file } });
      onChangeFileUrls(result.data.uploadFile.url, Number(event?.target.id));
    } catch (error) {
      if (error instanceof Error) Modal.error({ content: error.message });
    }
  };

  const onChangeFileUrls = (imageUrl: string, index: number): void => {
    const newFileUrls = [...imageUrls];
    newFileUrls[index] = imageUrl;
    setImageUrls(newFileUrls);
  };

  // const onChangeFile = async (
  //   e: ChangeEvent<HTMLInputElement>
  // ): Promise<void> => {
  //   const file = e.target.files?.[0]; // 배열로 들어오는 이유: multiple을 주면 여러개의 파일을 드래그하여 가져올 수 있음
  //   console.log(file);

  //   const result = await uploadFile({ variables: { file } });
  //   if (typeof result.data?.uploadFile.url !== "string") return;
  //   console.log(result.data?.uploadFile.url);
  //   setImageUrls(result.data?.uploadFile.url ?? "");
  // };

  const onClickNew = async (data: IItemWrite) => {
    console.log(data);
    try {
      if (data.name && data.remarks && data.contents && data.price) {
        const result = await createItem({
          variables: {
            createUseditemInput: {
              name: data.name,
              remarks: data.remarks,
              contents: data.contents,
              price: Number(data.price),
              images: [...imageUrls],
            },
          },
        });
        console.log(result);
        alert("상품이 등록되었습니다!");
        void router.push(`/Items/${result.data?.createUseditem._id}`);
      }
    } catch (error) {
      if (error instanceof Error) alert(error.message);
    }
  };

  return { onClickNew, onChangeFile, imageUrls };
};
