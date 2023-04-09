import * as yup from "yup";

export const schema = yup.object({
  email: yup
    .string()
    .email("이메일 형식이 아닙니다.")
    .required("이메일은 필수입니다."),

  password: yup.string().required("비밀번호를 입력해주세요."),
});
