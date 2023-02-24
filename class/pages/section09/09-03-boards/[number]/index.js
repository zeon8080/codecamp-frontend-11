import { useQuery, gql } from "@apollo/client";
import { useRouter } from "next/router";

const FETCH_BOARD = gql`
  query fetchBoard($number: Int) {
    fetchBoard(number: $number) {
      number
      writer
      title
      contents
    }
  }
`;
export default function StaticRoutingMovedPage() {
  const router = useRouter();

  const { data } = useQuery(FETCH_BOARD, {
    variables: {
      number: Number(router.query.number),
    },
  });

  console.log(data);

  const onClickMove = () => {
    router.push(`/section09/09-03-boards/${router.query.number}/edit`);
  };

  return (
    <div>
      <div>{router.query.number}페이지 이동이 완료됨</div>
      <div>작성자: {data && data.fetchBoard?.writer}</div>
      <div>제목: {data?.fetchBoard?.title}</div>
      <div>내용: {data ? data.fetchBoard?.contents : "로딩중입니다"}</div>
      {/* ? : 옵셔널체이닝 */}
      <button onClick={onClickMove}>수정하러가기</button>
    </div>
  );
}
