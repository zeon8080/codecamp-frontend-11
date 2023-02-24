import * as S from "./CommentsWrite.styles";
import { Rate } from "antd";
import { ICommentsWriteUI } from "./CommentsWrite.type";

export default function CommentsWriteUI(props: ICommentsWriteUI): JSX.Element {
  return (
    <div>
      <S.Container>
        <S.CommentContainer>
          <S.CommentHead>
            <img src="/commentImg.png"></img>

            <S.CommentSpan>댓글</S.CommentSpan>
          </S.CommentHead>

          <S.CommentWriteNew>
            <div>
              <S.CommentInfoInput
                placeholder="작성자"
                onChange={props.onChangeCommentWriter}
                value={
                  props.writer !== "" ? props.writer : props.el?.writer ?? ""
                }
              ></S.CommentInfoInput>

              <S.CommentInfoInput
                type="password"
                placeholder="비밀번호"
                onChange={props.onChangeCommentPassword}
                value={props.password}
              ></S.CommentInfoInput>
              <span>
                <Rate onChange={props.onChangeRate} value={props.value} />
              </span>
            </div>
            <S.CommentTextareaBox>
              <S.CommentInput
                maxLength={80}
                placeholder="개인정보를 공유 및 요청하거나, 명예훼손, 무단 광고, 불법 정보 유포시 모니터링 후 삭제될 수 있으며, 이에 대한 민형사상 책임은 게시자에게 있습니다."
                onChange={props.onChangeCommentContents}
                value={
                  props.contents !== ""
                    ? props.contents
                    : props.el?.contents ?? ""
                }
              ></S.CommentInput>

              <S.CommentBtnBox>
                <S.CommentLimit>
                  {props.contents !== ""
                    ? props.contents.length
                    : props.el?.contents.length ?? 0}
                  /80
                </S.CommentLimit>
                <S.CommentBtn
                  onClick={
                    props.isEdit === true
                      ? props.onClickUpdateBtn
                      : props.onClickCommentBtn
                  }
                >
                  등록하기
                </S.CommentBtn>
              </S.CommentBtnBox>
            </S.CommentTextareaBox>
          </S.CommentWriteNew>
        </S.CommentContainer>
      </S.Container>
    </div>
  );
}
