import styled from "@emotion/styled";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  background-color: #0d110f;
`;

export const Wrapper = styled.div`
  width: 1000px;
  margin: 100px;
  background-color: #0d110f;
  padding: 20px;
  border-radius: 15px;
  filter: drop-shadow(0 0 0.75rem #8cf2b3);
`;

export const ListsWrapper = styled.div`
  background-color: #8cf2b3;
  height: 70px;
  border-radius: 10px;
  filter: drop-shadow(0 0 0.3rem #4ce185);
  margin-bottom: 30px;
  padding-top: 10px;
`;

export const TitleSearch = styled.input`
  width: 400px;
  border: 5px solid #4ce185;
  border-radius: 10px;
  background-color: #8cf2b3;
  margin-right: 42px;
  padding: 14px;
`;

export const ButtonSearch = styled.button`
  width: 15%;
  height: 52px;
  color: #3e4149;
  background-color: #8cf2b3;
  border: 5px solid #4ce185;
  border-radius: 10px;
  cursor: pointer;
`;

export const ListsRowHead = styled.div`
  display: flex;
  flex-direction: row;
  height: 52px;
  line-height: 52px;
  margin-bottom: 40px;
`;
export const ListsRow = styled.div`
  display: flex;
  flex-direction: row;
  height: 52px;
  line-height: 52px;
`;

export const HeaderShort = styled.div`
  width: 15%;
  text-align: center;
  color: #8cf2b3;
`;

export const HeaderLong = styled.div`
  width: 70%;
  text-align: center;
  color: #8cf2b3;
`;

export const ContentShort = styled.div`
  width: 15%;
  text-align: center;
  color: #0d110f;
`;

export const ContentsLong = styled.div`
  width: 70%;
  text-align: center;
  cursor: pointer;
  color: #0d110f;
  :hover {
    color: #4ce185;
  }
`;

export const ListsFooter = styled.div`
  padding-top: 18px;
  margin-left: 20px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const WriteButton = styled.button`
  width: 150px;
  height: 52px;
  color: #3e4149;
  background-color: #8cf2b3;
  border: 5px solid #4ce185;
  border-radius: 10px;
  cursor: pointer;
`;
