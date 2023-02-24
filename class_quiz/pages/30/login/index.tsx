import { gql, useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { useState } from "react";
import type { ChangeEvent } from "react";
import { useRecoilState } from "recoil";
import { accessTokenState } from "../../../src/components/commons/recoil";

const LOGIN_USER = gql`
  mutation loginUserExample($email: String!, $password: String!) {
    loginUserExample(email: $email, password: $password) {
      accessToken
    }
  }
`;

export default function Login() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginUserExample] = useMutation(
    //   <
    //     Pick<IMutation, "loginUserExample">,
    //     IMutationLoginUserExampleArgs
    //   >
    LOGIN_USER
  );
  const [, setAccessToken] = useRecoilState(accessTokenState);

  const onChangeEmail = (e: ChangeEvent<HTMLInputElement>): void => {
    setEmail(e.target.value);
  };
  const onChangePassword = (e: ChangeEvent<HTMLInputElement>): void => {
    setPassword(e.target.value);
  };

  const onClickLogin = async () => {
    try {
      const result = await loginUserExample({
        variables: {
          email,
          password,
        },
      });
      const accessToken = result.data?.loginUserExample.accessToken;
      console.log(accessToken);

      if (accessToken === undefined) {
        alert("다시시도해주세요");
        return;
      }
      setAccessToken(accessToken);
      void router.push("/30/login-success");
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
      <button onClick={onClickLogin}>LOG-IN</button>
    </>
  );
}
