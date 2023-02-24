import { useState } from "react";

export default function ranToken() {
  const [token, setToken] = useState("000000");
  const ranToken = String(Math.floor(Math.random() * 1000000)).padStart(6, "0");

  function onCLickBtn() {
    setToken(ranToken);
  }

  return (
    <div>
      <div>{token}</div>
      <button onClick={onCLickBtn}>인증번호!!</button>
    </div>
  );
}
