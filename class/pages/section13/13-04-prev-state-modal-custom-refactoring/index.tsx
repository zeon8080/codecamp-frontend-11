import { Modal } from "antd";
import { useState } from "react";
import DaumPostcodeEmbed from "react-daum-postcode";
import type { Address } from "react-daum-postcode";

export default function ModalAlertPage(): JSX.Element {
  const [isOpen, setIsOpen] = useState(false);

  const onToggleModal = (): void => {
    // setIsOpen(true)
    setIsOpen((prev) => !prev);
  };

  // const handleOk = (): void => {
  //   // setIsOpen(false);
  //   setIsOpen((prev) => !prev);
  // };
  // const handleCancel = (): void => {
  //   // setIsOpen(false);
  //   setIsOpen((prev) => !prev);
  // };

  const handleComplete = (data: Address): void => {
    console.log(data);
    // setIsOpen(false);
    onToggleModal();
  };

  return (
    <div>
      <button onClick={onToggleModal}>** 모 달 창 열 기**</button>
      {/* 모달 종료 방식 - 1. 모달 숨기는 방법  => 이력서 등.. */}
      <Modal open={isOpen} onOk={onToggleModal} onCancel={onToggleModal}>
        <DaumPostcodeEmbed onComplete={handleComplete} />
      </Modal>
      {/* 모달 종료 방식 -2. 모달 삭제하는 방법  => 신용카드, 비밀번호.. */}
      {isOpen && (
        <Modal open={true} onOk={onToggleModal} onCancel={onToggleModal}>
          <DaumPostcodeEmbed onComplete={handleComplete} />
        </Modal>
      )}
    </div>
  );
}
