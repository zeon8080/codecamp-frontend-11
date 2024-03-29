import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  ApolloLink,
  fromPromise,
} from "@apollo/client";
import { createUploadLink } from "apollo-upload-client";
import { useEffect } from "react";
import { useRecoilState, useRecoilValueLoadable } from "recoil";
import { accessTokenState, restoreAccessTokenLoadable } from "../stores";
import { onError } from "@apollo/client/link/error";
import { getAccessToken } from "../libraries/getAccessToken";

interface IApolloSetting {
  children: JSX.Element;
}
// 한번 해놓고 안바꿀 변수말고 상수들은 대문자 관례
const GLOBAL_STATE = new InMemoryCache();

export default function ApolloSetting(props: IApolloSetting): JSX.Element {
  const [accessToken, setAccessToken] = useRecoilState(accessTokenState);
  const aaa = useRecoilValueLoadable(restoreAccessTokenLoadable);

  // 1. 프리렌더링 예제 - process.browser
  // if (process.browser) {
  //   console.log("브라우저임");
  //   const result = localStorage.getItem("accessToken");
  //   console.log(result);
  //   setAccessToken(result ?? "");
  // } else {
  //   console.log("프론트 서버상태임");
  // }

  // 3. 프리렌더링 무시 useEffect
  useEffect(() => {
    // 1. 기존방식 (refreshToken 이전)
    // const result = localStorage.getItem("accessToken");

    // 2. 새로운 방식 (refreshToken 이후)
    void aaa.toPromise().then((newAccessToken) => {
      setAccessToken(newAccessToken ?? "");
    });
    void getAccessToken().then((newAccessToken) => {
      setAccessToken(newAccessToken ?? "");
    });
  }, []);

  // 2. 프리렌더링 예제 - typeof window
  // if (typeof window !== "undefined") {
  //   console.log("브라우저임");
  //   const result = localStorage.getItem("accessToken");
  //   console.log(result);
  //   setAccessToken(result ?? "");
  // } else {
  //   console.log("프론트 서버상태임");
  // }

  const errorLink = onError(({ graphQLErrors, operation, forward }) => {
    // 1. 에러를 캐치
    if (typeof graphQLErrors !== "undefined") {
      for (const err of graphQLErrors) {
        // 1-2. 해당 에러가 토큰만료에러인지 체크 중...
        if (err.extensions.code === "UNAUTHENTICATED") {
          return fromPromise(
            // 2. refresh 토큰으로 access토큰을 재발급 받기
            getAccessToken().then((newAccessToken) => {
              setAccessToken(newAccessToken ?? "");
              // 3. 재발급받은 access토큰으로 실패했던 쿼리의 정보 수정
              operation.setContext({
                headers: {
                  ...operation.getContext().headers, // Authorization: Bearer !%$@#%@# => 만료된 토큰이 추가되어 있는 상태
                  Authorization: `Bearer ${newAccessToken}`, // 3-2. 토큰만 새 것으로 바꿔치기
                },
              });
            })
          ).flatMap(() => forward(operation)); // 3-3. 방금 수정한 쿼리 재요청하기
        }
      }
    }
  });

  const uploadLink = createUploadLink({
    // uri: "https://backend11.codebootcamp.co.kr/graphql05",
    uri: "http://backend-practice.codebootcamp.co.kr/graphql",

    headers: { Authorization: `Bearer ${accessToken}` },
    credentials: "include",
  });

  const client = new ApolloClient({
    link: ApolloLink.from([errorLink, uploadLink]), // 순서가 중요함 에러가 먼저 와야함.
    cache: GLOBAL_STATE, // 컴퓨터의 메모리에다가 백엔드에서 받아 온 데이터 임시 저장해놓기
  });

  // prettier-ignore
  return (
  <ApolloProvider client={client}>
    {props.children}
  </ApolloProvider>
  )
}
