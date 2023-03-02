// 제공자일때 => 네이버, 다음, 쿠팡
import { gql } from "@apollo/client";
import Head from "next/head";
// import type {
//   IQuery,
//   IQueryFetchUseditemArgs,
// } from "../../../src/commons/types/generated/types";
import { GraphQLClient } from "graphql-request";

const FETCH_USEDITEM = gql`
  query fetchUseditem($useditemId: ID!) {
    fetchUseditem(useditemId: $useditemId) {
      _id
      name
      remarks
      images
    }
  }
`;

export default function OpengraphProviderPage(props: any): JSX.Element {
  // const { data } = useQuery<
  //   Pick<IQuery, "fetchUseditem">,
  //   IQueryFetchUseditemArgs
  // >(FETCH_USEDITEM, {
  //   variables: { useditemId: "63fd9eccaef9f000281b2ee4" },
  // });
  console.log(props);
  return (
    <>
      <Head>
        <meta property="og:title" content={props?.qqq.name} />
        <meta property="og:description" content={props?.qqq.remarks} />
        <meta property="og:image" content={props?.qqq.images?.[0]} />
      </Head>
      <div>중고마켓에 오신 것을 환영합니다.(여기는 Body 입니다)</div>
    </>
  );
}
// 1. getServerSideProps는 이미 존재하는 단어이므로 변경 불가능, 페이지 내에서만 작성가능
// 2. 여기는 서버에서만 실행됨(프론트엔드 서버프로그램 => webpack 서버프로그램)
export const getServerSideProps = async (): Promise<any> => {
  console.log("여기는 서버입니다.");
  // 1.여기서 API요청
  const graphQLClient = new GraphQLClient(
    "https://backend-practice.codebootcamp.co.kr/graphql"
  );
  const result = await graphQLClient.request(FETCH_USEDITEM, {
    useditemId: "63fd9eccaef9f000281b2ee4",
  });

  // 2. 요청 받은 결과를 리턴
  return {
    props: {
      qqq: {
        name: result.fetchUseditem.name,
        remarks: result.fetchUseditem.remarks,
        images: result.fetchUseditem.images,
      },
    },
  };
};
