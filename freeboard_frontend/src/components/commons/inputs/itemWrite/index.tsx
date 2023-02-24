// import styled from "@emotion/styled";
import type { UseFormRegisterReturn } from "react-hook-form";

interface IInputProps {
  type?: "text";
  register: UseFormRegisterReturn;
}

export default function InputItemWrite(props: IInputProps): JSX.Element {
  return (
    <input
      type={props.type}
      {...props.register}
      // defaultValue={props.register}
    />
  );
}
