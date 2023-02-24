import * as S from "./BoardWrite.styles";
import { IBoardWriteUI } from "./BoardWrite.type";
import { Modal } from "antd";
import DaumPostcodeEmbed from "react-daum-postcode";
import { v4 as uuidv4 } from "uuid";
import UploadBasic from "../../../commons/upload/Basic/UploadBasic.container";

export default function BoardWriteUI(props: IBoardWriteUI) {
  return (
    <S.Container>
      <S.Wrapper>
        <S.Title>게시글 {props.isEdit ? "수정" : "등록"}</S.Title>
        <S.InputBox>
          <S.WriterInfoBox>
            <S.Spans>작성자</S.Spans>
            <S.WriterInput
              type="text"
              onChange={props.changeWriter}
              placeholder="이름을 적어 주세요"
              defaultValue={props.data?.fetchBoard.writer ?? ""}
            />
            <S.AllErr>{props.writerErr}</S.AllErr>
          </S.WriterInfoBox>
          <S.WriterInfoBox>
            <S.Spans>비밀번호</S.Spans>
            <S.PasswordInput
              type="password"
              onChange={props.changePassword}
              placeholder="비밀번호를 입력해 주세요"
            />
            <S.AllErr>{props.passwordErr}</S.AllErr>
          </S.WriterInfoBox>
        </S.InputBox>
        <S.TitleInputBox>
          <S.Spans>제목</S.Spans>
          <S.TitleInput
            type="text"
            onChange={props.changeTitle}
            placeholder="제목을 작성해주세요."
            defaultValue={props.data?.fetchBoard.title}
          />
          <S.AllErr>{props.titleErr}</S.AllErr>
        </S.TitleInputBox>

        <S.ContentsInputBox>
          <S.Spans>내용</S.Spans>
          <S.ContentsInput
            onChange={props.changeContents}
            placeholder="내용을 작성해주세요."
            defaultValue={props.data?.fetchBoard.contents}
          />
          <S.AllErr>{props.contentsErr}</S.AllErr>
        </S.ContentsInputBox>

        <S.LocationInputBox>
          <S.Spans>주소</S.Spans>
          <S.ZipcodeInput
            placeholder="00000"
            readOnly
            value={
              props.zipcode !== ""
                ? props.zipcode
                : props.data?.fetchBoard.boardAddress?.zipcode ?? ""
            }
          />
          <S.Search onClick={props.onClickAddress}>우편번호 검색</S.Search>
          {props.isOpen && (
            <Modal
              open={true}
              onOk={props.onClickAddress}
              onCancel={props.onClickAddress}
            >
              <DaumPostcodeEmbed onComplete={props.onCompleteAddress} />
            </Modal>
          )}
        </S.LocationInputBox>
        <S.SearchInput
          readOnly
          value={
            props.address !== ""
              ? props.address
              : props.data?.fetchBoard.boardAddress?.address ?? ""
          }
        />
        <S.SearchInput
          onChange={props.onChangeAddressDetail}
          defaultValue={
            props.data?.fetchBoard.boardAddress?.addressDetail ?? ""
          }
        />
        <div>
          <S.Spans>유튜브</S.Spans>
          <S.YouInput
            type="text"
            onChange={props.onChangeYoutubeUrl}
            defaultValue={props.data?.fetchBoard.youtubeUrl}
            placeholder="링크를 복사해주세요."
          />
        </div>

        <S.ImgText>사진 첨부</S.ImgText>
        <S.ImgUpdateBox>
          {props.fileUrls.map((el, index) => (
            <UploadBasic
              key={uuidv4()}
              index={index}
              fileUrl={el}
              onChangeFileUrls={props.onChangeFileUrls}
            />
          ))}
        </S.ImgUpdateBox>

        <S.RadioBox>
          <S.Spans>메인 설정</S.Spans>
          <input type="radio" name="choose" />
          <S.RadioText>유튜브</S.RadioText>
          <S.RadioBtn type="radio" name="choose" />
          <S.RadioText>사진</S.RadioText>
        </S.RadioBox>
        <S.BtnDiv>
          <S.FinalBtn
            isActive={props.isActive}
            onClick={props.isEdit ? props.clickEdit : props.clickJoin}
          >
            {props.isEdit ? "수정하기" : "등록하기"}
          </S.FinalBtn>
        </S.BtnDiv>
      </S.Wrapper>
    </S.Container>
  );
}
