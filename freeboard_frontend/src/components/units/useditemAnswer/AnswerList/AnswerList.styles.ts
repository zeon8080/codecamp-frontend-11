import styled from "@emotion/styled";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #0d110f;
`;

export const AnswerListBox = styled.div`
  width: 1000px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0 30px;
  background-color: #d6fae4;
  height: 100px;
  border-radius: 10px;
  filter: drop-shadow(0 0 0.3rem gray);
  margin-bottom: 20px;
`;

export const Buttons = styled.button`
  width: 70px;
  height: 40px;
  background-color: #8cf2b3;
  cursor: pointer;
  border-radius: 5px;
  margin-left: 8px;
`;

export const AnswerInput = styled.input`
  width: 800px;
  height: 70px;
  padding: 0 30px;
  background-color: #d6fae4;
`;
