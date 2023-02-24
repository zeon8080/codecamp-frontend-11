import { useState } from "react";

export default function ButtonHi() {
  const [click, setClick] = useState("안녕하세요");

  function OnclickBtn() {
    setClick("반갑습니다.");
  }

  return (
    <div>
      <button onClick={OnclickBtn}>{click}</button>
    </div>
  );
}
