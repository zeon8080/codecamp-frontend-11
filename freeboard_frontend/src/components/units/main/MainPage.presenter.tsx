import { MainPageUI } from "./MainPage.type";
import * as S from "./MainPage.styles";

export default function MainPagePresenter(props: MainPageUI): JSX.Element {
  return (
    <>
      <S.Wrapper>
        {/* <S.MainPageBackground> */}
        <S.TitleBox>
          <S.Texts>Show your colors</S.Texts>
        </S.TitleBox>

        <div>
          <S.Video autoPlay muted playsInline loop={true}>
            <source src="/greenpainting.mov"></source>
          </S.Video>
        </div>

        <S.WheelBtn onClick={props.onClickMoveBoardLists}>
          <S.Wheel src="../../../wheel.png"></S.Wheel>
        </S.WheelBtn>
        {/* </S.MainPageBackground> */}
      </S.Wrapper>
    </>
  );
}
