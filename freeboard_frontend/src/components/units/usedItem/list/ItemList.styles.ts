import styled from "@emotion/styled";
import InfiniteScroll from "react-infinite-scroller";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #0d110f;
`;

export const Wrapper = styled.div`
  width: 1000px;
  height: 100vh;
  overflow: auto;
  margin: 100px;
  background-color: #0d110f;
  padding: 20px;
  border-radius: 15px;
  filter: drop-shadow(0 0 0.75rem #8cf2b3);
`;

export const Scroll = styled(InfiniteScroll)`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  flex-wrap: wrap;
  gap: 20px;
`;

export const ListWrapper = styled.div`
  background-color: #8cf2b3;
  width: 200px;
  height: 300px;
  border-radius: 10px;
  filter: drop-shadow(0 0 0.3rem #4ce185);
  margin-bottom: 20px;
  padding-top: 10px;
  cursor: pointer;
`;

export const ItemContents = styled.div`
  color: #0d110f;
`;

export const SearchInput = styled.input`
  width: 254px;
  border-radius: 10px;
  background-color: #8cf2b3;
  margin-left: 20px;
  margin-bottom: 20px;
  padding: 14px;
`;

export const ItemImage = styled.div`
  width: 150px;
  height: 150px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  margin-bottom: 40px;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;

export const ItemPrice = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: #0d110f;
`;

export const ItemWriteBtn = styled.button`
  all: unset;
  width: 150px;
  height: 40px;
  text-align: center;
  font-size: 18px;
  font-weight: bold;
  padding: 10px;
  background-color: #8cf2b3;
  border: 5px solid #4ce185;
  border-radius: 10px;
  cursor: pointer;
  color: #3e4149;
  margin-bottom: 100px;
`;
