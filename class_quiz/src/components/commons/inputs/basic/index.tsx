import { UseFormRegisterReturn } from "react-hook-form";
interface IInput {
  type?: "text" | "password";
  register: UseFormRegisterReturn;
}

export default function InputBasic(props: IInput): JSX.Element {
  return <input type={props.type} {...props.register} />;
}
