import { MenuUnfoldOutlined } from "@ant-design/icons";
import styled from "@emotion/styled";
import type { MouseEvent } from "react";

const MyIcon = styled(MenuUnfoldOutlined)`
  color: red;
  font-size: 50px;
`;

export default function LibraryIconPage(): JSX.Element {
  const onClickDelete = (e: MouseEvent<HTMLDivElement>): void => {
    console.log(e.currentTarget.id);
  };

  return (
    <div id="삭제할게시글ID" onClick={onClickDelete}>
      <MyIcon />
    </div>
  );
}
