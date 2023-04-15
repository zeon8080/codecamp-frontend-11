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
  padding: 0 30px;
  background-color: #d6fae4;
  height: 100px;
  border-radius: 10px;
  filter: drop-shadow(0 0 0.3rem gray);
  margin-bottom: 20px;
  position: relative;
`;

export const UserBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const CreatedAt = styled.div`
  position: absolute;
  top: 65px;
  left: 30px;
  font-size: 16px;
  color: gray;
`;

export const Buttons = styled.button`
  width: 70px;
  height: 40px;
  background-color: #8cf2b3;
  cursor: pointer;
  border-radius: 5px;
  margin-left: 8px;
`;

export const Input = styled.input`
  width: 83%;
  height: 70px;
  padding: 0 30px;
  background-color: #d6fae4;
`;

export const AnswerInput = styled.input`
  width: 800px;
  height: 70px;
  padding: 0 30px;
  background-color: #d6fae4;
`;

export const AnswerBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 1000px;
  padding: 0 30px;
  background-color: #d6fae4;
  height: 100px;
  border-radius: 10px;
  filter: drop-shadow(0 0 0.3rem gray);
  margin-bottom: 20px;
  position: relative;
`;

export const AnswerBtn = styled.button`
  width: 70px;
  height: 40px;
  background-color: #8cf2b3;
  cursor: pointer;
  border-radius: 5px;
  margin-left: 8px;
  position: absolute;
  right: 30px;
  top: 30px;
`;
