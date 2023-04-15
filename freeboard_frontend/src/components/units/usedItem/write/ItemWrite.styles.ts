import styled from "@emotion/styled";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  background-color: #0d110f;
`;

export const Wrapper = styled.div`
  width: 1200px;
  margin: 100px;
  background-color: #d6fae4;
  padding: 60px 100px 100px 100px;
  box-sizing: border-box;
  border: 1px solid black;
  border-radius: 5px;
  filter: drop-shadow(0 0 0.75rem #8cf2b3);
  margin-bottom: 50px;
`;

export const DivMargin = styled.div`
  margin: 50px 0px;
`;
export const Title = styled.div`
  font-size: 36px;
  font-weight: 700;
  display: flex;
  justify-content: center;
  padding-top: 60px;
  padding-bottom: 80px;
`;

export const Input = styled.input`
  width: 100%;
  padding: 14px 0px 14px 16px;
  margin-top: 16px;
  box-sizing: border-box;
  font-family: "Malgun gothic", dotum, sans-serif;
  border: 1px solid #3e4149;
  border-radius: 10px;
  background-color: #d6fae4;
  color: #0d110f;
`;

export const Button = styled.button`
  width: 120px;
  height: 52px;
  border-radius: 10px;
  cursor: pointer;
  color: #3e4149;
  background-color: #d6fae4;
  border: 5px solid #4ce185;
  margin-bottom: 10px;
`;

export const UploadImg = styled.img`
  width: 100px;
  height: 100px;
  object-fit: contain;
  margin-bottom: 10px;
`;

export const SubmitBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Errors = styled.div`
  color: red;
  font-size: 8px;
`;
