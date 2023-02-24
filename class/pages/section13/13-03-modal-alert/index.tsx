import { Modal } from "antd";

export default function ModalAlertPage(): JSX.Element {
  const onClickSuccess = (): void => {
    Modal.success({
      content: "게시글 등록 성공!",
    });
  };
  const onClickError = (): void => {
    Modal.error({
      content: "틀렸습니다.",
    });
  };
  return (
    <div>
      <button onClick={onClickSuccess}>성공모달</button>
      <button onClick={onClickError}>실패모달</button>
    </div>
  );
}
