import { IUploadBasicUI } from "./UploadBasic.types";
import * as S from "./UploadBasic.styles";

export default function UploadBasicUi(props: IUploadBasicUI): JSX.Element {
  return (
    <>
      {props.fileUrl !== "" ? (
        <S.UploadImage
          onClick={props.onClickUpload}
          src={`https://storage.googleapis.com/${props.fileUrl}`}
        />
      ) : (
        <S.UploadButton onClick={props.onClickUpload}>
          <>+추가</>
        </S.UploadButton>
      )}
      <S.UploadFileHidden
        type="file"
        ref={props.fileRef}
        onChange={props.onChangeFile}
      />
    </>
  );
}
