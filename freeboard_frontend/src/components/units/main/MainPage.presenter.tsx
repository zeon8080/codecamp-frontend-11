import { MainPageUI } from "./MainPage.type";
import * as S from "./MainPage.styles";

export default function MainPagePresenter(props: MainPageUI): JSX.Element {
  return (
    <>
      <S.Wrapper>
        <S.TitleBox>
          <S.Texts>Show your colors</S.Texts>
        </S.TitleBox>

        <S.MainPageBackground>
          {/* <S.Video autoPlay muted playsInline loop={true}>
            <source src="/greenpainting.mov"></source>
          </S.Video> */}
          <img src="../../../greenImg.png" />
        </S.MainPageBackground>

        <S.WheelBtn onClick={props.onClickMoveBoardLists}>
          <S.Wheel src="../../../wheel.png"></S.Wheel>
        </S.WheelBtn>
      </S.Wrapper>
    </>
  );
}
