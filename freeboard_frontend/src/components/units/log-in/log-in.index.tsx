import * as S from "./log-in.styles";
import { useForm } from "react-hook-form";
import InputBasic from "../../commons/inputs/basic";
import { useRouter } from "next/router";
import { yupResolver } from "@hookform/resolvers/yup";
import { schema } from "./log-in.validation";
import { ILogInFormData } from "./log-in.types";
import { useClickLogin } from "../../commons/hooks/customs/useClickLogin";

export default function LogInForm() {
  const { onClickLogin } = useClickLogin();
  const router = useRouter();
  const { register, handleSubmit, formState } = useForm<ILogInFormData>({
    resolver: yupResolver(schema),
    mode: "onChange",
  });
  const onClickJoin = (): void => {
    void router.push("/join");
  };
  return (
    <S.Container>
      <S.Wrapper>
        <form onSubmit={handleSubmit(onClickLogin)}>
          <S.Title>로그인</S.Title>
          <S.Texts>이메일</S.Texts>

          <InputBasic type="text" register={register("email")} />

          <S.Errors>{formState.errors.email?.message}</S.Errors>
          <S.Texts>비밀번호</S.Texts>
          <InputBasic type="password" register={register("password")} />
          <S.Errors>{formState.errors.password?.message}</S.Errors>
          <S.Texts>로그인 상태 유지하기</S.Texts>

          <S.ButtonsBox>
            <S.LogInBtn>로그인</S.LogInBtn>
          </S.ButtonsBox>
          <S.DivideLine></S.DivideLine>
        </form>
        <S.ButtonsBox>
          <div>
            <S.OtherButtons>아이디 찾기</S.OtherButtons>
            <S.OtherButtons>비밀번호 찾기</S.OtherButtons>
            <S.OtherButtons onClick={onClickJoin}>회원가입</S.OtherButtons>
          </div>
        </S.ButtonsBox>
      </S.Wrapper>
    </S.Container>
  );
}
