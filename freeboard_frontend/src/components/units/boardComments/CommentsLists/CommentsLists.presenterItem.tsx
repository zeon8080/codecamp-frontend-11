import { useState } from "react";
import { useMutation } from "@apollo/client";
import type { MouseEvent } from "react";
import { FETCH_COMMENT, DELETE_COMMENT } from "./CommentsLists.queries";
import { useRouter } from "next/router";
import * as S from "./CommentsLists.styles";
import { Rate } from "antd";
import CommentsWrite from "../CommentsWrite/CommentsWrite.container";

export default function CommentsListsUIItem(props: any) {
  const router = useRouter();
  const [isEdit, setIsEdit] = useState(false);
  const [password, setPassword] = useState("");
  const [deleteBoardComment] = useMutation(DELETE_COMMENT);

  const onClickUpdate = (): void => {
    setIsEdit(true);
  };
  const onClickDelete = async (
    e: MouseEvent<HTMLImageElement>
  ): Promise<void> => {
    const password = prompt("비밀번호를 입력하세요.");

    if (!(e.target instanceof HTMLImageElement)) {
      alert("시스템에 문제가 있습니다.");
      return;
    }

    await deleteBoardComment({
      variables: {
        password,
        boardCommentId: e.target.id,
        // boardCommentId:props.el._id
      },
      refetchQueries: [
        {
          query: FETCH_COMMENT,
          variables: { boardId: router.query.number },
        },
      ],
    });
    alert("댓글이 삭제되었습니다.");
    router.push(`/freeboard_moved/${router.query.number}`);
  };

  //   onChangeDeletePassword = (e: ChangeEvent<HTMLInputElement>): void => {
  //     setPassword(e.target.value);
  //   };

  return (
    <>
      {!isEdit ? (
        <div key={props.el._id}>
          <S.Container>
            <S.CommentContainer>
              <S.WriterHeader>
                <S.WriterProfile>
                  <div>
                    <img src="/profile.png"></img>
                  </div>

                  <S.WriterBox>
                    <div>
                      <S.CommentWriterName>
                        {props.el.writer}
                      </S.CommentWriterName>
                      <Rate
                        disabled={props.el.rating}
                        value={props.el.rating}
                      ></Rate>
                    </div>
                    <S.CommentContents>{props.el.contents}</S.CommentContents>
                  </S.WriterBox>
                </S.WriterProfile>
                <S.ImgBox>
                  <S.ImageBtn>
                    <img src="/edit.png" onClick={onClickUpdate}></img>
                  </S.ImageBtn>
                  <S.ImageBtn>
                    <img
                      src="/deleteX.png"
                      id={props.el._id}
                      onClick={onClickDelete}
                    ></img>
                  </S.ImageBtn>
                </S.ImgBox>
              </S.WriterHeader>

              <S.CommentDate>{props.el.createdAt.slice(0, 10)}</S.CommentDate>
              <S.CommentDivide></S.CommentDivide>
            </S.CommentContainer>
          </S.Container>
        </div>
      ) : (
        <CommentsWrite isEdit={true} setIsEdit={setIsEdit} el={props.el} />
      )}
    </>
  );
}
