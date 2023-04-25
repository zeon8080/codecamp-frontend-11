import styled from "@emotion/styled";
export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
  background-color: #0d110f;
`;

export const Wrapper = styled.div`
  height: 800px;
  border-radius: 15px;
  padding: 20px 60px;
  border: 1px solid black;
  margin-bottom: 180px;
  margin-top: 50px;
  background-color: #3e4149;
  border: 1px solid #4ce185;
  opacity: 0.9;
  color: white;
`;

export const Title = styled.div`
  text-align: center;
  font-size: 40px;
  margin-bottom: 60px;
  margin-top: 30px;
  color: #58e48e;
`;

export const Texts = styled.div`
  margin-bottom: 15px;
  color: #8cf2b3;
`;

export const JoinDiv = styled.div`
  text-align: center;
`;

export const JoinBtn = styled.button`
  all: unset;
  font-size: 20px;
  padding: 15px;
  border: 1px solid gray;
  border-radius: 10px;
  cursor: pointer;
  color: #3e4149;
  background-color: #8cf2b3;
  border: 5px solid #4ce185;
`;

export const Errors = styled.div`
  color: #fc2c2f;
  font-size: 8px;
  margin: 5px 0px 30px 5px;
`;
