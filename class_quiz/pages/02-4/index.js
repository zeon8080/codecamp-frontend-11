import { useState } from "react";
import { AllErrors } from "../../styles/02-4-sign";

export default function signup() {
  const [email, setEmail] = useState("");
  const [pwd, setPwd] = useState("");
  const [pwd2, setPwd2] = useState("");
  const [err, setErr] = useState("");
  const [err2, setErr2] = useState("");
  const [err3, setErr3] = useState("");

  function onChangeEmail(event) {
    setEmail(event.target.value);
  }
  function onChangePwd(event) {
    setPwd(event.target.value);
  }
  function onChangePwd2(event) {
    setPwd2(event.target.value);
  }

  let final = true;

  function onClickJoin() {
    if (email.includes("@") === false) {
      setErr("이메일 에러");
      final = false;
    } else {
      setErr("");
    }
    if (pwd !== pwd2) {
      setErr2("비밀번호 불일치");
      setErr3("비밀번호 불일치");
      final = false;
    } else {
      setErr2("");
      setErr3("");
    }
    if (final === true) {
      alert("가입 성공!");
    }
  }

  return (
    <div>
      <div>이메일:</div>
      <input type="text" onChange={onChangeEmail} />
      <AllErrors>{err}</AllErrors>
      <div>비밀번호:</div>
      <input type="password" onChange={onChangePwd} />
      <AllErrors>{err2}</AllErrors>
      <div>비밀번호 한번 더</div>
      <input type="password" onChange={onChangePwd2} />
      <AllErrors>{err3}</AllErrors>
      <button onClick={onClickJoin}>회원가입</button>
    </div>
  );
}
