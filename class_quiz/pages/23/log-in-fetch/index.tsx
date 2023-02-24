import { gql, useQuery } from "@apollo/client";
const FETCH_USER_LOGGED_IN = gql`
  query {
    fetchUserLoggedIn {
      email
      name
    }
  }
`;

export default function LoginFetchPage() {
  const { data } = useQuery(FETCH_USER_LOGGED_IN);
  console.log(data);

  return <>{data?.fetchUserLoggedIn.name}님 접속완료</>;
}
