import styled from "@emotion/styled";

export const SubmitBtn = styled.button`
  background-color: ${(props) => (props.isActive === true ? "aqua" : "")};
`;
