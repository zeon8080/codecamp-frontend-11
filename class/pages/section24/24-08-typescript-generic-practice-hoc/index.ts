import { useRouter } from "next/router";
import type { ReactElement } from "react";
import { useEffect } from "react";
// prettier-ignore

// 로그인체크(컴포트트)(프롭스)
export const 로그인체크 = (컴포넌트: ()=>JSX.Element) => <P extends Record<string,unknown>> (프롭스: P): ReactElement<P> => {
  const router = useRouter();

  useEffect(() => {
    if (localStorage.getItem("accessToken") === null) {
      alert("로그인 후에 이용해주세요.");
      void router.push("/section23/23-05-login-check-hoc");
    }
  }, []);

  return <컴포넌트 {...프롭스} />
}
