import { useQuery, gql } from "@apollo/client";
import Checkbox from "../11-02-stop-propagation/checkbox";

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
export default function StaticRoutingMovedPage() {
  const { data } = useQuery(FETCH_BOARDS);

  console.log(data);

  // const onClickWho = (event: MouseEvent<HTMLDivElement>) => {
  //   alert(event.currentTarget.id + "님이 작성");
  // };
  //현재 바인딩된 타겟을 가져오기..

  const qqq1 = () => {
    alert("1클");
  };

  const qqq4 = (event) => {
    event.stopPropagation();
    alert("4클");
  };

  return (
    <div>
      {data?.fetchBoards.map((el: any) => (
        <div id={el.writer} onClick={qqq1}>
          <span onClick={qqq4} style={{ margin: "10px" }}>
            {el.number}
          </span>
          <span style={{ margin: "10px" }}>{el.title}</span>
          <span style={{ margin: "10px" }}>{el.writer}</span>
        </div>
      ))}
    </div>
  );
}
