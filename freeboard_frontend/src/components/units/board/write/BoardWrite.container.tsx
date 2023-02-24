import { useState, useEffect } from "react";
import { useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import BoardWriteUI from "./BoardWrite.presenter";
import { CREATE_BOARD, UPDATE_BOARD } from "./BoardWrite.queries";
import { IBoardWrite } from "./BoardWrite.type";
import type { ChangeEvent } from "react";
import { Modal } from "antd";

import {
  IMutation,
  IMutationCreateBoardArgs,
  IMutationUpdateBoardArgs,
  IUpdateBoardInput,
} from "../../../../commons/types/generated/types";

import type { Address } from "react-daum-postcode";

export default function BoardWrite(props: IBoardWrite): JSX.Element {
  const router = useRouter();

  const [writer, setWriter] = useState("");
  const [password, setPassword] = useState("");
  const [title, setTitle] = useState("");
  const [contents, setContents] = useState("");
  const [youtubeUrl, setYoutubeUrl] = useState("");

  const [writerErr, setWriteErr] = useState("");
  const [passwordErr, setPasswordErr] = useState("");
  const [titleErr, setTitleErr] = useState("");
  const [contentsErr, setContentsErr] = useState("");

  const [isActive, setIsActive] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [zipcode, setZipcode] = useState("");
  const [address, setAddress] = useState("");
  const [addressDetail, setAddressDetail] = useState("");
  const [fileUrls, setFileUrls] = useState(["", "", ""]);

  const [createBoard] = useMutation<
    Pick<IMutation, "createBoard">,
    IMutationCreateBoardArgs
  >(CREATE_BOARD);
  const [updateBoard] = useMutation<
    Pick<IMutation, "updateBoard">,
    IMutationUpdateBoardArgs
  >(UPDATE_BOARD);

  function onChangeWriter(event: ChangeEvent<HTMLInputElement>) {
    setWriter(event.target.value);

    if (writer && title && password && contents) {
      setIsActive(true);
    }

    if (event.target.value !== "") {
      setWriteErr("");
    }
  }

  function onChangePassword(event: ChangeEvent<HTMLInputElement>) {
    setPassword(event.target.value);
    if (writer && title && password && contents) {
      setIsActive(true);
    }
    if (event.target.value !== "") {
      setPasswordErr("");
    }
  }

  console.log(password);
  function onChangeTitle(event: ChangeEvent<HTMLInputElement>) {
    setTitle(event.target.value);
    if (writer && title && password && contents) {
      setIsActive(true);
    }
    if (event.target.value !== "") {
      setTitleErr("");
    }
  }

  function onChangeContents(event: ChangeEvent<HTMLTextAreaElement>) {
    setContents(event.target.value);
    if (writer && title && password && contents) {
      setIsActive(true);
    }
    if (event.target.value !== "") {
      setContentsErr("");
    }
  }

  function onChangeYoutubeUrl(event: ChangeEvent<HTMLInputElement>) {
    setYoutubeUrl(event.target.value);
  }
  async function onClickAddress() {
    setIsOpen((prev) => !prev);
  }

  const onCompleteAddress = (data: Address) => {
    console.log(data);
    setAddress(data.address);
    setZipcode(data.zonecode);
    setIsOpen((prev) => !prev);
  };

  const onChangeAddressDetail = (event: ChangeEvent<HTMLInputElement>) => {
    setAddressDetail(event.target.value);
  };
  const onChangeFileUrls = (fileUrl: string, index: number): void => {
    const newFileUrls = [...fileUrls];
    newFileUrls[index] = fileUrl;
    setFileUrls(newFileUrls);
  };

  useEffect(() => {
    const images = props.data?.fetchBoard.images;
    if (images !== undefined && images !== null) setFileUrls([...images]);
  }, [props.data]);

  async function clickJoin() {
    if (!writer) {
      setWriteErr("이름을 입력해주세요.");
    }
    if (!password) {
      setPasswordErr("비밀번호를 입력해주세요.");
    }
    if (!title) {
      setTitleErr("제목을 입력해주세요.");
    }

    if (!contents) {
      setContentsErr("내용을 입력해주세요.");
    }

    if (writer && password && title && contents) {
      try {
        const result = await createBoard({
          variables: {
            createBoardInput: {
              writer,
              password,
              title,
              contents,
              youtubeUrl,
              boardAddress: {
                zipcode,
                address,
                addressDetail,
              },
              images: [...fileUrls],
            },
          },
        });

        router.push(`/boards/${result.data?.createBoard._id}`);
      } catch (error: any) {
        alert(error.message);
      }

      Modal.success({
        content: "등록되었습니다.",
      });
    }
  }

  const clickEdit = async (): Promise<void> => {
    const currentFiles = JSON.stringify(fileUrls);
    const defaultFiles = JSON.stringify(props.data?.fetchBoard.images);
    const isChangedFiles = currentFiles !== defaultFiles;

    const updateBoardInput: IUpdateBoardInput = {};
    if (title !== "") updateBoardInput.title = title;
    if (contents !== "") updateBoardInput.contents = contents;
    if (youtubeUrl !== "") updateBoardInput.youtubeUrl = youtubeUrl;
    if (zipcode !== "" || address !== "" || addressDetail !== "") {
      updateBoardInput.boardAddress = {};
      if (zipcode !== "") updateBoardInput.boardAddress.zipcode = zipcode;
      if (address !== "") updateBoardInput.boardAddress.address = address;
      if (addressDetail !== "")
        updateBoardInput.boardAddress.addressDetail = addressDetail;
    }
    if (isChangedFiles) updateBoardInput.images = fileUrls;

    try {
      if (typeof router.query.boardId !== "string") {
        alert("시스템에 문제가 있습니다.");
        return;
      }

      const result = await updateBoard({
        variables: {
          boardId: router.query.boardId,
          password,
          updateBoardInput,
        },
      });

      if (result.data?.updateBoard._id === undefined) {
        alert("요청에 문제가 있습니다.");
        return;
      }

      router.push(`/boards/${result.data?.updateBoard._id}`);
    } catch (error: any) {
      alert(error.message);
    }
    if (password !== "") {
      Modal.success({
        content: "수정되었습니다.",
      });
    }
  };

  return (
    <BoardWriteUI
      changeWriter={onChangeWriter}
      changePassword={onChangePassword}
      changeTitle={onChangeTitle}
      changeContents={onChangeContents}
      onChangeYoutubeUrl={onChangeYoutubeUrl}
      onChangeFileUrls={onChangeFileUrls}
      clickJoin={clickJoin}
      clickEdit={clickEdit}
      writerErr={writerErr}
      passwordErr={passwordErr}
      titleErr={titleErr}
      contentsErr={contentsErr}
      isEdit={props.isEdit}
      data={props.data}
      isActive={isActive}
      onClickAddress={onClickAddress}
      onCompleteAddress={onCompleteAddress}
      isOpen={isOpen}
      zipcode={zipcode}
      address={address}
      addressDetail={addressDetail}
      onChangeAddressDetail={onChangeAddressDetail}
      fileUrls={fileUrls}
    />
  );
}
