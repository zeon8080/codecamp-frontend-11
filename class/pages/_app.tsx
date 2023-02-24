import { Global } from "@emotion/react";
import type { AppProps } from "next/app";
import { globalStyles } from "../src/commons/styles/globalStyles";
import Layout from "../src/commons/layout";
import ApolloSetting from "../src/commons/apollo";
import { RecoilRoot } from "recoil";

export default function App({ Component }: AppProps): JSX.Element {
  return (
    <RecoilRoot>
      <ApolloSetting>
        <>
          <Global styles={globalStyles} />
          <Layout>
            <Component />
            {/* 타입에러 버전간의 오류 => 패키지제이슨 =>  */}
          </Layout>
        </>
      </ApolloSetting>
    </RecoilRoot>
  );
}
