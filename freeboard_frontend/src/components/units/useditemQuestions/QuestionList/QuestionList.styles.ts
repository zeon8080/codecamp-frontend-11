import styled from "@emotion/styled";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  background-color: #0d110f;
`;

export const QuestionBox = styled.div`
  width: 1000px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: #d6fae4;
  height: 70px;
  border-radius: 10px;
  filter: drop-shadow(0 0 0.3rem gray);
  margin-bottom: 20px;
`;

export const QuestionContents = styled.span`
  margin-left: 30px;
`;
export const QuestionCreated = styled.span`
  margin-right: 30px;
`;
