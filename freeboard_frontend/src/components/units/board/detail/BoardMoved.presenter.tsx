import * as S from "./BoardMoved.styles";
import { IBoardMovedUI } from "./BoardMoved.type";
import ReactPlayer from "react-player";
import { Tooltip } from "antd";
import { getDate } from "../../../../commons/libraries/util";

export default function BoardMovedUI(props: IBoardMovedUI) {
  return (
    <S.Container>
      <S.Wrapper>
        <S.BoardWrapper>
          <S.WriterHeader>
            <S.WriterProfile>
              <img src="/profile.png"></img>
              <S.WriterBox>
                <S.WriterName>{props.data?.fetchBoard?.writer}</S.WriterName>
                <S.CreateDate>
                  {getDate(props.data?.fetchBoard?.createdAt)}
                </S.CreateDate>
              </S.WriterBox>
            </S.WriterProfile>
            <S.ImgBox>
              <S.ImageBtn>
                <img src="/link.png"></img>
              </S.ImageBtn>
              <S.ImageBtn>
                <Tooltip
                  placement="topRight"
                  title={props.data?.fetchBoard.boardAddress?.address}
                >
                  <div style={{ border: "none" }}>
                    <img src="/location.png" />
                  </div>
                </Tooltip>
              </S.ImageBtn>
            </S.ImgBox>
          </S.WriterHeader>
          <S.DivideLine></S.DivideLine>

          <S.WriterContents>
            <S.BoardTitle>{props.data?.fetchBoard?.title}</S.BoardTitle>

            <S.ImageWrapper>
              {props.data?.fetchBoard.images
                ?.filter((el) => el)
                .map((el) => (
                  <S.Image
                    key={el}
                    src={`https://storage.googleapis.com/${el}`}
                  />
                ))}
            </S.ImageWrapper>

            <S.BoardContents>
              {props.data?.fetchBoard?.contents}
            </S.BoardContents>
            <S.YoutubeView>
              <ReactPlayer
                url={String(props.data?.fetchBoard?.youtubeUrl)}
                controls
              />
            </S.YoutubeView>
          </S.WriterContents>
          <S.LikeImgBox>
            <S.LikeUpBox>
              <S.LikeButton onClick={props.onClickLike}>
                <S.LikeBtnImg src="/like.png"></S.LikeBtnImg>
              </S.LikeButton>
              <S.LikeFont>{props.data?.fetchBoard?.likeCount}</S.LikeFont>
            </S.LikeUpBox>
            <S.LikeDownBox>
              <S.LikeButton onClick={props.onClickDislike}>
                <S.LikeBtnImg src="/dislike.png"></S.LikeBtnImg>
              </S.LikeButton>
              <S.DislikeFont>
                {props.data?.fetchBoard?.dislikeCount}
              </S.DislikeFont>
            </S.LikeDownBox>
          </S.LikeImgBox>
        </S.BoardWrapper>

        <S.ButtonBox>
          <S.ContentsBtn onClick={props.onClickMovedList}>
            목록으로
          </S.ContentsBtn>
          <S.ContentsBtn onClick={props.onClickMove}>수정하기</S.ContentsBtn>

          <S.ContentsBtn onClick={props.onClickDelete}>삭제하기</S.ContentsBtn>
        </S.ButtonBox>

        <S.DivideLine2></S.DivideLine2>
      </S.Wrapper>
    </S.Container>
  );
}
