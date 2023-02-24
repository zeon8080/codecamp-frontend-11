import { gql, useQuery } from "@apollo/client";

import { withAuth } from "../../../../src/components/commons/example/hoc/withAuth";
const FETCH_USER_LOGGED_IN = gql`
  query {
    fetchUserLoggedIn {
      email
      name
    }
  }
`;

function LoginFetchPage() {
  const { data } = useQuery(FETCH_USER_LOGGED_IN);
  console.log(data);

  return <>{data?.fetchUserLoggedIn.name}님 접속완료</>;
}

export default withAuth(LoginFetchPage);
