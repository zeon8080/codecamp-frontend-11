// import * as S from "./Join.styles";
// import { IJoinUI } from "./Join.types";

// export default function JoinUI(props: IJoinUI) {
//   return (
//     <S.Container>
//       <S.Wrapper>
//         <S.Title>회원가입</S.Title>
//         <S.Texts>이메일</S.Texts>
//         <S.Inputs
//           type="text"
//           onChange={props.onChangeEmail}
//           placeholder="이메일을 입력해주세요."
//         />
//         <S.Errors>{props.emailErr}</S.Errors>
//         <S.Texts>이름</S.Texts>
//         <S.Inputs
//           type="text"
//           onChange={props.onChangeName}
//           placeholder="이름을 입력해주세요."
//         />
//         <S.Errors>{props.nameErr}</S.Errors>
//         <S.Texts>비밀번호</S.Texts>
//         <S.Inputs
//           type="password"
//           onChange={props.onChangePassword}
//           placeholder="비밀번호를 입력해주세요."
//         />
//         <S.Errors>{props.passwordErr}</S.Errors>
//         <S.Texts>비밀번호 확인</S.Texts>
//         <S.Inputs
//           type="password"
//           onChange={props.onChangePasswordSecond}
//           placeholder="비밀번호를 입력해주세요."
//         />
//         <S.Errors>{props.passwordSecondErr}</S.Errors>
//         <S.JoinDiv>
//           <S.JoinBtn onClick={props.onClickJoin}>가입하기</S.JoinBtn>
//         </S.JoinDiv>
//       </S.Wrapper>
//     </S.Container>
//   );
// }
