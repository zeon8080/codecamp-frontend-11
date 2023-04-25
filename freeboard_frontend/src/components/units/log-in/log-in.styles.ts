import styled from "@emotion/styled";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
  background-color: #0d110f;
`;

export const Wrapper = styled.div`
  border-radius: 15px;
  padding: 20px 60px;
  border: 1px solid black;
  height: 800px;
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

export const Inputs = styled.input`
  width: 400px;
  height: 50px;
  border: 1px solid gray;
  border-radius: 10px;
  padding-left: 10px;
  font-family: "Malgun gothic", dotum, sans-serif;
`;

export const ButtonsBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const LogInBtn = styled.button`
  all: unset;
  width: 100px;
  height: 30px;
  text-align: center;
  font-size: 18px;
  padding: 10px;
  border: 1px solid gray;
  border-radius: 10px;
  cursor: pointer;
  color: #3e4149;
  background-color: #8cf2b3;
  border: 5px solid #4ce185;
  margin-top: 30px;
`;

export const DivideLine = styled.div`
  width: 100%;
  border-top: 1px solid white;
  margin-top: 100px;
  margin-bottom: 10px;
`;

export const OtherButtons = styled.button`
  all: unset;
  width: 70px;
  text-align: center;
  font-size: 12px;
  padding: 10px;
  border: 1px solid #3e4149;
  border-radius: 10px;
  cursor: pointer;
  color: #3e4149;
  background-color: #8cf2b3;
  border: 5px solid #4ce185;
  margin: 15px;
`;

export const Errors = styled.div`
  color: #fc2c2f;
  font-size: 8px;
  margin: 10px 0px 40px 5px;
`;
