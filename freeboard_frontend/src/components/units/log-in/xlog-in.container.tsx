// import LogInUI from "./log-in.index";
// import { useRouter } from "next/router";
// import { useMutation } from "@apollo/client";
// import { LOGIN_USER } from "./log-in.queries";
// import { useRecoilState } from "recoil";
// import { accessTokenState } from "../../../commons/stores";
// import { useForm } from "react-hook-form";
// import { yupResolver } from "@hookform/resolvers/yup";
// import { schema } from "./log-in.validation";

// export interface ILogInFormData {
//   email: string;
//   password: string;
// }

// export default function LogIn(): JSX.Element {
//   // const router = useRouter();
//   // const [user] = useMutation(LOGIN_USER);

//   const { register, handleSubmit, formState } = useForm<ILogInFormData>({
//     resolver: yupResolver(schema),
//     mode: "onChange",
//   });

//   const [, setAccessToken] = useRecoilState(accessTokenState);

//   const onClickLogin = async (data: ILogInFormData): Promise<void> => {
//     try {
//       if (data.email && data.password) {
//         const result = await user({
//           variables: {
//             email: data.email,
//             password: data.password,
//           },
//         });
//         const accessToken = result.data?.loginUser.accessToken;
//         console.log(accessToken);

//         if (accessToken === undefined) {
//           alert("로그인에 실패했습니다.");
//           return;
//         }
//         setAccessToken(accessToken);
//         void router.push("/boards");
//       }
//     } catch (error) {
//       if (error instanceof Error) alert(error.message);
//     }
//   };

//   const onClickJoin = (): void => {
//     void router.push("/join");
//   };

//   return (
//     <LogInUI
//       register={register}
//       handleSubmit={handleSubmit}
//       formState={formState}
//       onClickLogin={onClickLogin}
//       onClickJoin={onClickJoin}
//     />
//   );
// }
