import { useQuery, gql } from "@apollo/client";

import type {
  IBoard,
  IQuery,
  IQueryFetchBoardsArgs,
} from "../../../src/commons/types/generated/types";

const FETCH_BOARDS = gql`
  query fetchBoards($page: Int) {
    fetchBoards(page: $page) {
      _id
      writer
      title
      contents
    }
  }
`;
export default function StaticRoutingMovedPage(): JSX.Element {
  const { data } = useQuery<Pick<IQuery, "fetchBoards">, IQueryFetchBoardsArgs>(
    FETCH_BOARDS
  );

  // event 생략가능
  const onClickBasket = (basket: IBoard) => (event) => {
    // 1. 기존 장바구니 가져오기
    const baskets: IBoard[] = JSON.parse(
      localStorage.getItem("basket") ?? "[]"
    );

    // 2. 이미 담겨있는지 확인하기
    // 중요하지 않은 데이터 임시로 담아두는 temp 관례
    const temp = baskets.filter((el) => el._id === basket._id);
    if (temp.length >= 1) {
      alert("이미 장바구니에 있습니다.");
      return;
    }

    // 3. 클릭한 글 추가하기
    baskets.push(basket);
    // 4. 추가된 장바구니 저장
    localStorage.setItem("baskets", JSON.stringify(baskets)); // 로컬스토리지에는 문자열만 들어가짐. 객체 자체를 모르기때문에 제이슨.
  };
  // 만약 장바구니 페이지에서 가져오기도 만들고 싶다면?
  //   localStorage.getItem() => 프리렌더링시 에러 그래서 useEffect 사용
  //   useEffect({});

  return (
    <div>
      {data?.fetchBoards.map((el) => (
        <div key={el._id}>
          <span style={{ margin: "10px" }}>{el.title}</span>
          <span style={{ margin: "10px" }}>{el.writer}</span>
          <button onClick={onClickBasket(el)}>장바구니 담기</button>
        </div>
      ))}
    </div>
  );
}
