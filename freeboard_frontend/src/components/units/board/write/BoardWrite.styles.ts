import styled from "@emotion/styled";
import { IProps } from "./BoardWrite.type";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  background-color: #0d110f;
`;

export const Wrapper = styled.div`
  width: 1000px;
  margin: 100px;
  background-color: #d6fae4;
  padding: 60px 100px 100px 100px;
  box-sizing: border-box;
  border: 1px solid black;
  border-radius: 5px;
  filter: drop-shadow(0 0 0.75rem #8cf2b3);
  margin-bottom: 50px;
`;

export const Title = styled.div`
  width: 100%;
  color: #191f1c;
  font-size: 36px;
  font-weight: 700;
  display: flex;
  justify-content: center;
  padding-top: 60px;
  padding-bottom: 80px;
`;

export const InputBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const WriterInfoBox = styled.div`
  width: 100%;
  color: #191f1c;
  :nth-of-type(1) {
    margin-right: 12px;
  }
  :nth-of-type(2) {
    margin-left: 12px;
  }
`;

export const Spans = styled.div`
  color: #191f1c;
`;

export const WriterInput = styled.input`
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
export const PasswordInput = styled.input`
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

export const TitleInputBox = styled.div`
  margin-top: 50px;
  width: 100%;
`;

export const TitleInput = styled.input`
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

export const ContentsInputBox = styled.div`
  margin-top: 50px;
  width: 100%;
`;

export const ContentsInput = styled.textarea`
  width: 100%;
  height: 480px;
  padding: 14px 16px;
  margin-top: 16px;
  resize: none;
  box-sizing: border-box;
  font-family: "Malgun gothic", dotum, sans-serif;
  border: 1px solid #3e4149;
  border-radius: 10px;
  background-color: #d6fae4;
  color: #0d110f;
`;

export const LocationInputBox = styled.div`
  margin-top: 16px;
  width: 100%;
`;

export const ZipcodeInput = styled.input`
  margin-top: 16px;
  width: 77px;
  padding: 14px 0px 14px 16px;
  margin-bottom: 16px;
  box-sizing: border-box;
  border: 1px solid #3e4149;
  border-radius: 10px;
  background-color: #d6fae4;
  color: #0d110f;
`;

export const Search = styled.button`
  width: 150px;
  height: 52px;
  padding: 14px 16px;
  margin-left: 16px;
  font-size: 16px;
  cursor: pointer;
  border-radius: 10px;
  background-color: #8cf2b3;
  border: 1px solid #4ce185;
`;

export const SearchInput = styled.input`
  width: 100%;
  padding: 14px 0px 14px 16px;
  margin-bottom: 30px;
  box-sizing: border-box;
  border: 1px solid #3e4149;
  border-radius: 10px;
  background-color: #d6fae4;
  color: #0d110f;
`;

export const YouInput = styled.input`
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

export const ImgUpdateBox = styled.div`
  display: flex;
  flex-direction: row;
`;

export const ImgText = styled.div`
  margin-top: 40px;
  margin-bottom: 16px;
  color: #191f1c;
`;

export const RadioBox = styled.div`
  margin-top: 40px;
`;

export const RadioText = styled.span`
  margin-left: 10px;
  color: #485b4e;
`;

export const RadioBtn = styled.input`
  margin-top: 16px;
  margin-left: 22px;
`;

export const FinalBtn = styled.button<IProps>`
  width: 179px;
  height: 52px;
  margin-top: 80px;
  margin-bottom: 100px;
  border-radius: 10px;
  cursor: pointer;
  color: #3e4149;
  background-color: #d6fae4;
  border: 5px solid #4ce185;
  background: ${(props) => (props.isActive ? "#58e48e" : "")};
`;

export const BtnDiv = styled.div`
  display: flex;
  justify-content: center;
`;

export const AllErr = styled.div`
  color: red;
  font-size: 8px;
`;
