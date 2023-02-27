import { memo } from "react";
function MemoChild() {
  console.log("자식렌더링");

  return <div>자식컴포넌트</div>;
}
export default memo(MemoChild);
