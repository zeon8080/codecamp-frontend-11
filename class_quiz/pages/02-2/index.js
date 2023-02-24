import { useState } from "react";

export default function CountUpDown() {
  const [count, setCount] = useState(0);

  function onClickUp() {
    setCount(count + 1);
  }
  function onClickDown() {
    setCount(count - 1);
  }

  return (
    <div>
      <div>{count}</div>
      <button onClick={onClickUp}>카운트업</button>
      <button onClick={onClickDown}>카운트다운</button>
    </div>
  );
}
