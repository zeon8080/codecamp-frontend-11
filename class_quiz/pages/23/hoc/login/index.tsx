import { gql, useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import type { ChangeEvent } from "react";
import { useState } from "react";
import { useRecoilState } from "recoil";
import { accessTokenState } from "../../../../src/components/commons/recoil";

const LOGIN_USER = gql`
  mutation LoginUser($email: String!, $password: String!) {
    loginUser(email: $email, password: $password) {
      accessToken
    }
  }
`;

export default function LogInPage(): JSX.Element {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user] = useMutation(LOGIN_USER);
  const [, setAccessToken] = useRecoilState(accessTokenState);

  const onChangeEmail = (e: ChangeEvent<HTMLInputElement>): void => {
    setEmail(e.target.value);
  };
  const onChangePassword = (e: ChangeEvent<HTMLInputElement>): void => {
    setPassword(e.target.value);
  };

  const onClickLogIn = async (): Promise<void> => {
    try {
      const result = await user({
        variables: {
          email,
          password,
        },
      });
      const accessToken = result.data?.loginUser.accessToken;
      console.log(result);
      console.log(accessToken);
      if (accessToken === undefined) {
        alert("로그인 실패");
        return;
      }
      setAccessToken(accessToken);

      localStorage.setItem("accessToken", accessToken);
      void router.push("/23/hoc/main");
    } catch (error) {
      if (error instanceof Error) alert(error.message);
    }
  };
  return (
    <>
      이메일:
      <input type="text" onChange={onChangeEmail} />
      <div></div>
      비밀번호:
      <input type="password" onChange={onChangePassword} />
      <div></div>
      <button onClick={onClickLogIn}>LOG-IN</button>
    </>
  );
}
