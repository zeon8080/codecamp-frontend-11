import { useState } from "react";

export default function MemoPage() {
  let countLet = 0;
  const [count, setCount] = useState(0);

  const onClickLet = () => {
    countLet += 1;
    console.log(countLet);
  };

  const onClickState = () => {
    setCount(count + 1);
    console.log(count);
  };

  return (
    <>
      <div>count: {countLet}</div>
      <button onClick={onClickLet}>카운트</button>
      <div>count: {count}</div>
      <button onClick={onClickState}>카운트</button>
    </>
  );
}
