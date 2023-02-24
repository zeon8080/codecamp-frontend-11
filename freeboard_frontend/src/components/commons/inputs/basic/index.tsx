import styled from "@emotion/styled";
import type { UseFormRegisterReturn } from "react-hook-form";

interface IInputProps {
  type?: "text" | "password";
  register: UseFormRegisterReturn;
}

export const Inputs = styled.input`
  width: 400px;
  height: 50px;
  padding-left: 10px;
  font-family: "Malgun gothic", dotum, sans-serif;
  border: 1px solid #0d110f;
  border-radius: 10px;
  background-color: #d6fae4;
  color: #0d110f;
`;

export default function InputBasic(props: IInputProps): JSX.Element {
  return <Inputs type={props.type} {...props.register} />;
}
