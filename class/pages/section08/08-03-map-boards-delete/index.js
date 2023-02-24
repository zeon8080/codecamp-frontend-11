import { useQuery, gql, useMutation } from "@apollo/client";
import { Fragment } from "react";

const FETCH_BOARDS = gql`
  query {
    fetchBoards {
      number
      writer
      title
      contents
    }
  }
`;

const DELETE_BOARD = gql`
  mutation deleteBoard($number: Int) {
    deleteBoard(number: $number) {
      message
    }
  }
`;

export default function StaticRoutingMovedPage() {
  const { data } = useQuery(FETCH_BOARDS);

  const [deleteBoard] = useMutation(DELETE_BOARD);

  console.log(data);

  const onClickDelete = (e) => {
    deleteBoard({
      variables: {
        number: Number(e.target.id),
      },
      refetchQueries: [{ query: FETCH_BOARDS }],
    });
  };

  return (
    <div>
      {/* 특별한 이유가 없으면 프래그먼트로 감싸자. div는 1개 더 그려야함 조금 느려진다나 뭐라나 */}
      {data?.fetchBoards.map((el) => (
        // 프래그먼트란 <> </> <Fragment></Fragment>
        // 프레그먼트에 key 입력하는 방법은 <Fragment key={1}></Fragment>
        <div key={el.number}>
          {/* 인덱스는 게시글을 삭제할 때 다음 게시글이 올라오면서 기존 인덱스와 동일한 값을 갖게 됨. 즉 유일하지 않음 */}
          <span>
            <input type="checkbox" />
          </span>
          <span style={{ margin: "10px" }}>{el.number}</span>
          <span style={{ margin: "10px" }}>{el.title}</span>
          <span style={{ margin: "10px" }}>{el.writer}</span>
          <span>
            <button id={el.number} onClick={onClickDelete}>
              DELETE
            </button>
          </span>
        </div>
      ))}
    </div>
  );
}
