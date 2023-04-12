import styled from "@emotion/styled";
export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  background-color: #0d110f;
  height: 1000px;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 600px;
  height: 400px;
  margin: 100px;
  background-color: #d6fae4;
  padding: 60px 100px 100px 100px;
  box-sizing: border-box;
  border: 1px solid black;
  border-radius: 5px;
  filter: drop-shadow(0 0 0.75rem #8cf2b3);
  margin-bottom: 50px;
`;

export const InfoBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Input = styled.input`
  width: 200px;
  height: 50px;
  padding: 0px 10px;
  margin-top: 16px;
  margin-right: 10px;
  box-sizing: border-box;
  font-family: "Malgun gothic", dotum, sans-serif;
  border: 1px solid #3e4149;
  border-radius: 10px;
  background-color: #d6fae4;
  color: #0d110f;
`;

export const Button = styled.button`
  width: 100px;
  height: 50px;
  font-size: 16px;
  cursor: pointer;
  border-radius: 10px;
  background-color: #8cf2b3;
  border: 3px solid #4ce185;
`;
