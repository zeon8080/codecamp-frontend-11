import styled from "@emotion/styled";
import type { UseFormRegisterReturn } from "react-hook-form";

interface IQuestion {
  type?: "text";
  register: UseFormRegisterReturn;
}

export default function InputQuestion(props: IQuestion): JSX.Element {
  return (
    <input
      style={{
        borderRadius: "12px",
        border: "1px solid gray",
        width: "83%",
        height: "70px",
        padding: "0 30px 0 30px",
        backgroundColor: "#d6fae4",
      }}
      type={props.type}
      {...props.register}
      // defaultValue={props.register}
    />
  );
}
