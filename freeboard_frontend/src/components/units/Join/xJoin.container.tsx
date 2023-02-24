// import { useState } from "react";
// import JoinUI from "./Join.presenter";
// import type { ChangeEvent } from "react";
// import { useRouter } from "next/router";
// import { useMutation } from "@apollo/client";
// import { CREATE_USER } from "./Join.queries";

// export default function Join(): JSX.Element {
//   const router = useRouter();

//   const [email, setEmail] = useState("");
//   const [name, setName] = useState("");
//   const [password, setPassword] = useState("");
//   const [passwordSecond, setPasswordSecond] = useState("");

//   const [emailErr, setEmailErr] = useState("");
//   const [nameErr, setNameErr] = useState("");
//   const [passwordErr, setPasswordErr] = useState("");
//   const [passwordSecondErr, setPasswordSecondErr] = useState("");

//   const [createUser] = useMutation(CREATE_USER);

//   const onChangeEmail = (e: ChangeEvent<HTMLInputElement>): void => {
//     setEmail(e.target.value);

//     if (e.target.value !== "") {
//       setEmailErr("");
//     }
//   };
//   const onChangeName = (e: ChangeEvent<HTMLInputElement>): void => {
//     setName(e.target.value);

//     if (e.target.value !== "") {
//       setNameErr("");
//     }
//   };
//   const onChangePassword = (e: ChangeEvent<HTMLInputElement>): void => {
//     setPassword(e.target.value);

//     if (e.target.value !== "") {
//       setPasswordErr("");
//     }
//   };
//   const onChangePasswordSecond = (e: ChangeEvent<HTMLInputElement>): void => {
//     setPasswordSecond(e.target.value);

//     if (e.target.value !== "") {
//       setPasswordSecondErr("");
//     }
//   };

//   const onClickJoin = async (): Promise<void> => {
//     if (!email) {
//       setEmailErr("이메일을 입력해주세요.");
//     }
//     if (!name) {
//       setNameErr("이름을 입력해주세요.");
//     }
//     if (!password) {
//       setPasswordErr("비밀번호를 입력해주세요.");
//     }

//     if (!passwordSecond) {
//       setPasswordSecondErr("비밀번호를 입력해주세요.");
//     }

//     if (email && name && password && passwordSecond) {
//       const result = await createUser({
//         variables: {
//           createUserInput: {
//             email,
//             password,
//             name,
//           },
//         },
//       });
//       alert("회원가입이 완료되었습니다.");
//       void router.push("/boards");
//     }
//   };

//   return (
//     <JoinUI
//       onChangeEmail={onChangeEmail}
//       onChangeName={onChangeName}
//       onChangePassword={onChangePassword}
//       onChangePasswordSecond={onChangePasswordSecond}
//       onClickJoin={onClickJoin}
//       emailErr={emailErr}
//       nameErr={nameErr}
//       passwordErr={passwordErr}
//       passwordSecondErr={passwordSecondErr}
//     />
//   );
// }
