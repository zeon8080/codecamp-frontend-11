import * as S from "./Join.styles";
import InputBasic from "../../commons/inputs/basic";
import { yupResolver } from "@hookform/resolvers/yup";
import { schema } from "./Join.validation";
import { useForm } from "react-hook-form";
import { useClickJoin } from "../../commons/hooks/customs/useClickJoin";
import { IJoinFormData } from "./Join.types";

export default function JoinForm() {
  const { onClickJoin } = useClickJoin();
  const { register, handleSubmit, formState } = useForm<IJoinFormData>({
    resolver: yupResolver(schema),
    mode: "onChange",
  });

  return (
    <form onSubmit={handleSubmit(onClickJoin)}>
      <S.Container>
        <S.Wrapper>
          <S.Title>회원가입</S.Title>
          <S.Texts>이메일</S.Texts>
          <InputBasic register={register("email")} />
          <S.Errors>{formState.errors.email?.message}</S.Errors>
          <S.Texts>이름</S.Texts>
          <InputBasic register={register("name")} />
          <S.Errors>{formState.errors.name?.message}</S.Errors>
          <S.Texts>비밀번호</S.Texts>
          <InputBasic type="password" register={register("password")} />
          <S.Errors>{formState.errors.password?.message}</S.Errors>
          <S.Texts>비밀번호 확인</S.Texts>
          <InputBasic type="password" register={register("passwordSecond")} />
          <S.Errors>{formState.errors.passwordSecond?.message}</S.Errors>
          <S.JoinDiv>
            <S.JoinBtn>가입하기</S.JoinBtn>
          </S.JoinDiv>
        </S.Wrapper>
      </S.Container>
    </form>
  );
}
