import * as yup from "yup";

export const schema = yup.object({
  email: yup
    .string()
    .email("이메일 형식이 아닙니다.")
    .required("이메일은 필수입니다."),

  name: yup
    .string()
    .max(5, "5글자 이내로 적어주세요")
    .required("작성자를 입력해주세요."),
  password: yup
    .string()
    .min(4, "4자리 이상 입력해주세요.")
    .max(8, "8자리 이내로 입력해주세요.")
    .matches(
      /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]).{4,8}[^\s]*$/,
      "공백을 제외한, 알파벳, 숫자, 특수문자를 모두 포함한 4자리 이상, 8자리 이하로 입력해주세요"
    )
    .required("비밀번호를 입력해주세요."),

  passwordSecond: yup
    .string()
    .min(4, "4자리 이상 입력해주세요.")
    .max(8, "8자리 이내로 입력해주세요.")
    .matches(
      /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]).{4,8}[^\s]*$/,
      "공백을 제외한, 알파벳, 숫자, 특수문자를 모두 포함한 4자리 이상, 8자리 이하로 입력해주세요"
    )
    .required("비밀번호를 입력해주세요."),
});