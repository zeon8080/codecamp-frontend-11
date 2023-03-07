import { useRouter } from "next/router";
import { useRecoilState } from "recoil";
import { accessTokenState } from "../../../../commons/stores";
import { ILogInFormData } from "../../../units/log-in/log-in.types";
import { useMutationLogin } from "../mutation/useMutationLogin";

export const useClickLogin = () => {
  const router = useRouter();
  const [user] = useMutationLogin();
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
        void router.push("/Items");
      }
    } catch (error) {
      if (error instanceof Error) alert(error.message);
    }
  };
  return { onClickLogin };
};
