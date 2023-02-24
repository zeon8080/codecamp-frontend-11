import * as yup from "yup";

export const schema = yup.object({
  name: yup
    .string()
    .max(10, "10글자 이내로 적어주세요")
    .required("상품명을 입력해주세요."),
});
