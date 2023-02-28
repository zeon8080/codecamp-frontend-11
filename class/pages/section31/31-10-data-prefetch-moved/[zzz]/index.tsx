import { useQuery } from "@apollo/client";
import { gql } from "graphql-request";
import { useRouter } from "next/router";

const FETCH_BOARD = gql`
  query fetchBoard($boardId: ID!) {
    fetchBoard(boardId: $boardId) {
      _id
      writer
      title
      contents
    }
  }
`;
export default function StaticRoutingMovedPage(): JSX.Element {
  const router = useRouter();

  const { data } = useQuery(FETCH_BOARD, {
    variables: {
      boardId: router.query.zzz,
    },
  });

  console.log(data);

  return (
    <div>
      <div>{router.query.zzz}페이지 이동이 완료됨</div>
      <div>작성자: {data?.fetchBoard?.writer}</div>
      <div>제목: {data?.fetchBoard?.title}</div>
      <div>내용: {data?.fetchBoard?.contents}</div>
      {/* ? : 옵셔널체이닝 */}
    </div>
  );
}
