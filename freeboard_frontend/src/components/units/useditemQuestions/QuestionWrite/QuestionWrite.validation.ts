import * as yup from "yup";

export const schema = yup.object({
  contents: yup
    .string()
    .max(80, "80글자 이내로 적어주세요")
    .required("질문 내용을 입력해주세요."),
});
