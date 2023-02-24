import { useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { useRecoilState } from "recoil";
import { accessTokenState } from "../../../../commons/stores";
import { LOGIN_USER } from "../../../units/log-in/log-in.queries";
import { ILogInFormData } from "../../../units/log-in/log-in.types";

export const useClickLogin = () => {
  const router = useRouter();
  const [user] = useMutation(LOGIN_USER);
  const [, setAccessToken] = useRecoilState(accessTokenState);

  const onClickLogin = async (data: ILogInFormData): Promise<void> => {
    try {
      if (data.email && data.password) {
        const result = await user({
          variables: {
            email: data.email,
            password: data.password,
          },
        });
        const accessToken = result.data?.loginUser.accessToken;
        console.log(accessToken);

        if (accessToken === undefined) {
          alert("로그인에 실패했습니다.");
          return;
        }
        setAccessToken(accessToken);
        localStorage.setItem("accessToken", accessToken);
        void router.push("/Items");
      }
    } catch (error) {
      if (error instanceof Error) alert(error.message);
    }
  };
  return { onClickLogin };
};
