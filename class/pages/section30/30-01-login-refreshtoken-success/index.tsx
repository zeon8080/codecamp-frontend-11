import { gql, useApolloClient } from "@apollo/client";
import { wrapAsync } from "../../../src/commons/libraries/asyncFunc";

const FETCH_USER_LOGGED_IN = gql`
  query {
    fetchUserLoggedIn {
      email
      name
    }
  }
`;

export default function LoginSuccessPage(): JSX.Element {
  // 1. useQuery : 페이지에 접속하면 자동으로 바로 실행되어 data라는 변수에 fetch해온 데이터를 담아주며(data는 글로벌스테이트에 저장), 리렌더링 됩니다.
  // const { data } =
  //   useQuery<Pick<IQuery, "fetchUserLoggedIn">>(FETCH_USER_LOGGED_IN);

  // 2. useLazyQuery : useQuery를 원하는 시점에 실행(버튼 클릭시)후 fetch해온 데이터를 data변수에 담아줍니다.(data는 글로벌스테이트 저장), 리렌더링됨.
  // const [나의함수, { data }] = useLazyQuery(FETCH_USER_LOGGED_IN);

  // 3. useApolloClient : 원하는 시점에 실행 후 fetch해온 데이터를 원하는 변수에 담을 수 있습니다. 따라서 axios 같은 느낌으로 사용이 가능합니다.
  // const client = useApolloClient()
  // client.query({}) <==> axios.get

  const client = useApolloClient();

  const onClickButton = async (): Promise<void> => {
    // 아폴로셋팅이 된 상태에서만 가능
    const result = await client.query({
      query: FETCH_USER_LOGGED_IN,
    });
    console.log(result);
  };

  return <button onClick={wrapAsync(onClickButton)}>클릭</button>;

  // return <>{data?.fetchUserLoggedIn.name}님 환영합니다.</>;
}
