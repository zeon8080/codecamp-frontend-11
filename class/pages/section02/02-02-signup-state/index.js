import { useState } from "react";

export default function SignStatePage() {
  const [email, setEmail] = useState("");
  const [pwd, setPwd] = useState("");
  const [error, setError] = useState("");

  // 이벤트 핸들러 함수 (이벤트를 부르는 함수다) => onClick, onChange...
  function onChangeEmail(event) {
    console.log(event); //나의 행동
    console.log(event.target); //작동된 태그
    console.log(event.target.value); //작동된 태그에 입력된 값

    setEmail(event.target.value);
  }

  function onChangePwd(event) {
    setPwd(event.target.value);
  }

  function onClickSignUp(event) {
    console.log(email); // 진짜 포장이 잘 되었는지 확인
    console.log(pwd);

    //1. 검증하기
    if (email.includes("@") === false) {
      //   document.getElementById("error").innerText =
      //     "이메일이 올바르지 않습니다."; ==> 옛날방식
      setError("이메일이 올바르지 않습니다.");
    } else {
      //2. 백엔드 컴퓨터에 보내주기(백엔드 개발자가 만든 함수 API)
      //=> 나중에

      //3. 성공 알림 보여주기
      alert("회원가입을 축하합니다.");
    }
  }

  return (
    <div>
      이메일: <input type="text" onChange={onChangeEmail} />
      {/* <div id="error"></div> ==> 옛날방식*/}
      <div>{error}</div>
      비밀번호: <input type="password" onChange={onChangePwd} />
      <button onClick={onClickSignUp}>회원 가입</button>
    </div>
  );
}
