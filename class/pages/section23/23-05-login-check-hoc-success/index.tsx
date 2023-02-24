import { gql, useQuery } from "@apollo/client";
import { 로그인체크 } from "../../../src/commons/hocs/withAuth";

import type { IQuery } from "../../../src/commons/types/generated/types";
const FETCH_USER_LOGGED_IN = gql`
  query {
    fetchUserLoggedIn {
      email
      name
    }
  }
`;

function 마이페이지(): JSX.Element {
  const { data } =
    useQuery<Pick<IQuery, "fetchUserLoggedIn">>(FETCH_USER_LOGGED_IN);

  return <>{data?.fetchUserLoggedIn.name}님 환영합니다.</>;
}

export default 로그인체크(마이페이지);
