import { useRouter } from "next/router";
import { useEffect } from "react";
import { useRecoilValueLoadable } from "recoil";
// import { getAccessToken } from "../libraries/getAccessToken";
import { restoreAccessTokenLoadable } from "../stores";

export const 로그인체크 = (컴포넌트: any) => (프롭스: any) => {
  const router = useRouter();
  const aaa = useRecoilValueLoadable(restoreAccessTokenLoadable);
  // 1. 로그인체크 (리프레시토큰 이전)
  //   useEffect(() => {
  //     if (localStorage.getItem("accessToken") === null) {
  //       alert("로그인 후에 이용해주세요.");
  //       void router.push("/section23/23-05-login-check-hoc");
  //     }
  //   }, []);
  // }

  // 2. 로그인 체크(리프레시토큰 이후) => 별로 안좋음 , app닷에 이어서 총 2번 요청하기때문
  // useEffect(() => {
  // void getAccessToken().then((newAccessToken) => {
  // if (newAccessToken === undefined) {
  // alert("로그인 후에 이용해주세요.");
  // void router.push("/section23/23-05-login-check-hoc");
  // }
  // });
  // }, []);

  // 3.로그인체크(리프레시토큰 이후) => 좋음! 함수를 공유하므로 app닷에 이어서 한번만 요청하게됨
  useEffect(() => {
    void aaa.toPromise().then((newAccessToken) => {
      if (newAccessToken === undefined) {
        alert("로그인 후에 이용해주세요.");
        void router.push("/section23/23-05-login-check-hoc");
      }
    });
  }, []);
  return <컴포넌트 {...프롭스} />;
};
