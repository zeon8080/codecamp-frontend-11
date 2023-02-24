import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  ApolloLink,
} from "@apollo/client";
import { createUploadLink } from "apollo-upload-client";
import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { accessTokenState } from "../recoil";
interface IApolloSetting {
  children: JSX.Element;
}
// 한번 해놓고 안바꿀 변수말고 상수들은 대문자 관례
const GLOBAL_STATE = new InMemoryCache();

export default function ApolloSetting(props: IApolloSetting): JSX.Element {
  const [accessToken, setAccessToken] = useRecoilState(accessTokenState);
  console.log(accessToken);

  useEffect(() => {
    const result = localStorage.getItem("accessToken");
    setAccessToken(result ?? "");
  }, []);

  const uploadLink = createUploadLink({
    uri: "http://backend-practice.codebootcamp.co.kr/graphql",
    headers: { Authorization: `Bearer ${accessToken}` },
  });

  const client = new ApolloClient({
    link: ApolloLink.from([uploadLink]),
    cache: GLOBAL_STATE, // 컴퓨터의 메모리에다가 백엔드에서 받아 온 데이터 임시 저장해놓기
  });

  // prettier-ignore
  return (
  <ApolloProvider client={client}>
    {props.children}
  </ApolloProvider>
  )
}
