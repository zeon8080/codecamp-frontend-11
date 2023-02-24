import styled from "@emotion/styled";
import { useRouter } from "next/router";

const Wrapper = styled.div`
  width: 100%;
  height: 90px;
  position: sticky;
  top: 0;
  right: 0;
  z-index: 1;
  display: flex;
  flex-direction: row;
  justify-content: right;
  align-items: center;
  padding: 20px 0;
  transition: all 0.3s ease-in-out;
  background-color: rgba(13, 17, 15, 1);

  :hover {
    background-color: rgba(13, 17, 15, 0.9);
  }
`;

const LogInBtn = styled.button`
  border: 1px solid black;
  border-radius: 10px;
  height: 50px;
  width: 100px;
  font-weight: bold;
  color: #3e4149;
  background-color: #8cf2b3;
  border: 5px solid #4ce185;

  margin-right: 10px;
  cursor: pointer;
`;

const MainBtn = styled.button`
  border: 1px solid black;
  border-radius: 10px;
  height: 50px;
  width: 100px;
  font-weight: bold;
  color: #3e4149;
  background-color: #8cf2b3;
  border: 5px solid #4ce185;

  margin-right: 10px;
  cursor: pointer;
`;

const ListsBtn = styled.button`
  border: 1px solid black;
  border-radius: 10px;
  height: 50px;
  width: 100px;
  font-weight: bold;
  color: #3e4149;
  background-color: #8cf2b3;
  border: 5px solid #4ce185;

  margin-right: 10px;
  cursor: pointer;
`;
const ItemsBtn = styled.button`
  border: 1px solid black;
  border-radius: 10px;
  height: 50px;
  width: 100px;
  font-weight: bold;
  color: #3e4149;
  background-color: #8cf2b3;
  border: 5px solid #4ce185;
  margin-right: 10px;
  cursor: pointer;
`;

const JoinBtn = styled.button`
  border: 1px solid black;
  border-radius: 10px;
  height: 50px;
  width: 100px;
  font-weight: bold;
  color: #3e4149;
  background-color: #8cf2b3;
  border: 5px solid #4ce185;
  margin-right: 50px;
  cursor: pointer;
`;

export default function LayoutHeader(): JSX.Element {
  const router = useRouter();

  const onClickLogIn = (): void => {
    void router.push("/log-in");
  };

  const onClickJoin = (): void => {
    void router.push("/join");
  };

  const onClickLists = (): void => {
    void router.push("/boards");
  };

  const onClickMain = (): void => {
    void router.push("/main");
  };

  const onClickItems = (): void => {
    void router.push("/Items");
  };

  return (
    <Wrapper>
      <MainBtn onClick={onClickMain}>Main</MainBtn>
      <ListsBtn onClick={onClickLists}>List</ListsBtn>
      <ItemsBtn onClick={onClickItems}>Items</ItemsBtn>
      <LogInBtn onClick={onClickLogIn}>Log - In</LogInBtn>
      <JoinBtn onClick={onClickJoin}>Join - Us</JoinBtn>
    </Wrapper>
  );
}