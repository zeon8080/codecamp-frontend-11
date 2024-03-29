import styled from "@emotion/styled";
import { useRouter } from "next/router";
const Wrapper = styled.div`
  width: 100%;
  height: 90px;
  background-color: #0d110f;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const Buttons = styled.button`
  border: 1px solid black;
  border-radius: 10px;
  height: 40px;
  width: 100px;
  font-weight: bold;
  font-size: 16px;
  color: #3e4149;
  background-color: #8cf2b3;
  border: 5px solid #4ce185;
  margin-right: 10px;
  cursor: pointer;
`;
export default function LayoutNavigation(): JSX.Element {
  const router = useRouter();

  const onClickLists = (): void => {
    void router.push("/boards");
  };

  const onClickNewPost = (): void => {
    void router.push("/boards/new");
  };

  const onClickMyPage = (): void => {
    void router.push("/Items/myPage");
  };

  const onClickItems = (): void => {
    void router.push("/Items");
  };

  const onClickNew = () => {
    void router.push("/Items/new");
  };
  return (
    <>
      <Wrapper>
        <Buttons onClick={onClickLists}>Boards</Buttons>
        <Buttons onClick={onClickNewPost}>New Post</Buttons>
        <Buttons onClick={onClickItems}>Items</Buttons>
        <Buttons onClick={onClickNew}>New Sell</Buttons>
        <Buttons onClick={onClickMyPage}>My Page</Buttons>
      </Wrapper>
    </>
  );
}
