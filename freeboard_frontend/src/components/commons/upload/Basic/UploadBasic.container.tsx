import { useMutation } from "@apollo/client";
import type { ChangeEvent } from "react";
import { useRef } from "react";
import { UPLOAD_FILE } from "./UploadBasic.quries";
import { Modal } from "antd";
import type { IUploadBasic } from "./UploadBasic.types";
import UploadBasicUi from "./UploadBasic.presenter";
import { checkValidationImage } from "./UploadBasic.validation";

export default function UploadBasic(props: IUploadBasic): JSX.Element {
  const fileRef = useRef<any>(null);
  const [uploadFile] = useMutation(UPLOAD_FILE);

  const onClickUpload = (): void => {
    fileRef.current?.click();
  };

  const onChangeFile = async (
    e: ChangeEvent<HTMLInputElement>
  ): Promise<void> => {
    const file = e.target.files?.[0]; // File Object
    const isValid = checkValidationImage(file);
    if (!isValid) return;

    try {
      const result = await uploadFile({ variables: { file } });
      props.onChangeFileUrls(result.data.uploadFile.url, props.index);
    } catch (error) {
      if (error instanceof Error) Modal.error({ content: error.message });
    }
  };

  return (
    <UploadBasicUi
      fileRef={fileRef}
      fileUrl={props.fileUrl}
      defaultFileUrl={props.defaultFileUrl}
      onClickUpload={onClickUpload}
      onChangeFile={onChangeFile}
    />
  );
}
