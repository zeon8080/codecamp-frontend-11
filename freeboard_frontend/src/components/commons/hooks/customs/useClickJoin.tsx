import { useRouter } from "next/router";
import { IJoinFormData } from "../../../units/Join/Join.types";
import { useMutationJoin } from "../mutation/useMutationJoin";

export const useClickJoin = () => {
  const [createUser] = useMutationJoin();
  const router = useRouter();

  const onClickJoin = async (data: IJoinFormData): Promise<void> => {
    try {
      if (data.email && data.name && data.password === data.passwordSecond) {
        const result = await createUser({
          variables: {
            createUserInput: {
              email: data.email,
              password: data.password,
              name: data.name,
            },
          },
        });
        console.log(result);
        alert("회원가입이 완료되었습니다.");
        void router.push("/log-in");
      }
    } catch (error) {
      if (error instanceof Error) alert(error.message);
    }
  };
  return { onClickJoin };
};
