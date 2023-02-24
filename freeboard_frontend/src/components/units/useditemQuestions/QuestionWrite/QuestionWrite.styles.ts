import styled from "@emotion/styled";

export const Form = styled.form`
  display: flex;
  flex-direction: row;
  justify-content: center;
  background-color: #0d110f;
`;

export const QuestionBox = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #0d110f;
  width: 1000px;
  height: 100px;
  margin-bottom: 40px;
`;

export const QuestionInput = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const QuestionButton = styled.button`
  width: 15%;
  height: 70px;
  background-color: #8cf2b3;
  border: 1px solid gray;
  cursor: pointer;
  border-radius: 15px;
`;

export const Errors = styled.div`
  color: red;
  font-size: 8px;
  margin: 10px 0 0 5px;
`;
