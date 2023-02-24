import { useRouter } from "next/router";
import { useMutation } from "@apollo/client";
import { IJoinFormData } from "../../../units/Join/Join.types";
import { gql } from "@apollo/client";

const CREATE_USER = gql`
  mutation ($createUserInput: CreateUserInput!) {
    createUser(createUserInput: $createUserInput) {
      _id
    }
  }
`;

export const useClickJoin = () => {
  const [createUser] = useMutation(CREATE_USER);
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
        void router.push("/boards");
      }
    } catch (error) {
      if (error instanceof Error) alert(error.message);
    }
  };
  return { onClickJoin };
};
