import { useCallback, useMemo, useState } from "react";
import MemoChild from "./child";

export default function MemoPage() {
  console.log("부모렌더링");
  let countLet = 0;
  const [count, setCount] = useState(0);

  const memo = useMemo(() => {
    return Math.random();
  }, []);
  console.log(memo);

  const onClickLet = useCallback(() => {
    countLet += 1;
    console.log(countLet);
  }, []);

  //   const onClickState = useCallback(() => {
  //     setCount((prev) => prev + 1);
  //     console.log(count);
  //   }, []);

  const onClickState = useMemo(() => {
    return () => {
      setCount((prev) => prev + 1);
    };
  }, []);

  return (
    <>
      <div>count: {countLet}</div>
      <button onClick={onClickLet}>카운트</button>
      <div>count: {count}</div>
      <button
        onClick={useCallback(() => {
          setCount((prev) => prev + 1);
        }, [])}
      >
        카운트
      </button>
      <div></div>
      <MemoChild />
    </>
  );
}
