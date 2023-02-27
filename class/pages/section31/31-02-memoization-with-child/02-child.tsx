import { memo } from "react";

function MemoizationWithChildPage(): JSX.Element {
  console.log("자식이 렌더링 됩니다.");

  return (
    <>
      <div>===============================</div>
      <h1>저는 자식컴포넌트 입니다.</h1>
      <div>===============================</div>
    </>
  );
}

export default memo(MemoizationWithChildPage);
// 모든 컴포넌트에 메모를 거는 것은 좋은 방법이 아니다. 그에 따른 로직을 또 적어줘야하고.. 등..
// 규모가 큰 페이지에서 효과가 좋음 포폴에 적용 시키긴하자.
