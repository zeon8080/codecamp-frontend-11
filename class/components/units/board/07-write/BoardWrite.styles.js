import styled from "@emotion/styled";

export const RedInput = styled.input`
  border-color: red;
`;

export const YellowButton = styled.button`
  background-color: ${(props) => (props.isActive === true ? "yellow" : "")};
`;
