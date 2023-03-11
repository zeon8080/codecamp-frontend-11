import { useRouter } from "next/router";
import { checkValidationFile } from "../../../../commons/libraries/validationFile";
import type { ChangeEvent } from "react";
import { useState } from "react";
import { UseFieldArrayReturn } from "react-hook-form";
import {
  IMutation,
  IMutationUploadFileArgs,
  IQuery,
} from "../../../../commons/types/generated/types";
import { Modal } from "antd";
import { useMutationNew } from "../mutation/useMutationNew";
import { useMutationUpload } from "../mutation/useMutationUploadFile";
import { Address } from "react-daum-postcode";

export interface IItemWrite {
  name: string;
  remarks: string;
  contents: string;
  price: number;
  fileUrls: UseFieldArrayReturn;
  isEdit: boolean;
  data?: Pick<IQuery, "fetchUseditem">;
}
export const useClickNew = () => {
  const router = useRouter();
  const [imageUrls, setImageUrls] = useState(["", "", ""]);
  const [isOpen, setIsOpen] = useState(false);
  const [, setZipcode] = useState("");
  const [address, setAddress] = useState("");
  const [createItem] = useMutationNew();
  const [uploadFile] = useMutationUpload();
  const onChangeFile = async (
    event: ChangeEvent<HTMLInputElement>
  ): Promise<void> => {
    const file = event.target.files?.[0]; // File Object
    const isValid = checkValidationFile(file);
    if (!isValid) return;
    try {
      const result = await uploadFile({ variables: { file } });
      onChangeFileUrls(result.data?.uploadFile.url, Number(event?.target.id));
    } catch (error) {
      if (error instanceof Error) Modal.error({ content: error.message });
    }
  };
  const onChangeFileUrls = (imageUrl: string, index: number): void => {
    const newFileUrls = [...imageUrls];
    newFileUrls[index] = imageUrl;
    setImageUrls(newFileUrls);
  };
  const onCompleteAddress = (data: Address) => {
    setAddress(data.address);
    setZipcode(data.zonecode);
    setIsOpen((prev) => !prev);
  };
  function onClickAddress() {
    setIsOpen((prev) => !prev);
  }
  const onClickNew = async (data: IItemWrite) => {
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
              useditemAddress: {
                address: address,
              },
            },
          },
        });
        alert("상품이 등록되었습니다!");
        void router.push(`/Items/${result.data?.createUseditem._id}`);
      }
    } catch (error) {
      if (error instanceof Error) alert(error.message);
    }
  };
  return {
    onClickNew,
    onChangeFile,
    imageUrls,
    onCompleteAddress,
    onClickAddress,
    isOpen,
    address,
  };
};
