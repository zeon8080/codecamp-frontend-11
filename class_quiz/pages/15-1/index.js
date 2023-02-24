import { gql, useQuery } from "@apollo/client";

import { useState } from "react";
import styled from "@emotion/styled";

const FETCH_BOARDS_LISTS = gql`
  query fetchBoards($page: Int) {
    fetchBoards(page: $page) {
      _id
      title
      writer
    }
  }
`;

const ListsNum = styled.div`
  width: 600px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;

  cursor: pointer;
`;

const PrevNextBtn = styled.button`
  text-align: center;
  cursor: pointer;
`;

const ListsNumBar = styled.div`
  width: 600px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;

const FETCH_BOARDS_COUNT = gql`
  query {
    fetchBoardsCount
  }
`;

export default function BoardListsBasic() {
  const [startPage, setStartPage] = useState(1);
  const { data, refetch } = useQuery(FETCH_BOARDS_LISTS);
  const { data: dataBoardsCount } = useQuery(FETCH_BOARDS_COUNT);
  const [activePage, setActivePage] = useState();

  console.log(data);

  const lastPage = Math.ceil((dataBoardsCount?.fetchBoardsCount ?? 10) / 10);

  const onClickPage = (event) => {
    refetch({ page: Number(event.currentTarget.id) });
    setActivePage(Number(event.currentTarget.id));
  };

  const onClickPrev = () => {
    if (startPage === 1) return;
    setStartPage(startPage - 10);
    refetch({ page: startPage - 10 });
  };

  const onClickNext = () => {
    if (startPage + 10 <= lastPage) setStartPage(startPage + 10);
    refetch({ page: startPage + 10 });
  };

  return (
    <div>
      <div>
        <span
          style={{ display: "inline-block", margin: "20px", width: "300px" }}
        >
          제목
        </span>
        <span style={{ display: "inline-block", width: "300px" }}>작성자</span>
      </div>
      {data?.fetchBoards.map((el) => (
        <div key={el._id}>
          <span
            style={{ display: "inline-block", margin: "20px", width: "300px" }}
          >
            {el.title}
          </span>
          <span style={{ display: "inline-block", width: "300px" }}>
            {el.writer}
          </span>
        </div>
      ))}

      <ListsNum>
        <ListsNumBar>
          <PrevNextBtn
            onClick={onClickPrev}
            // disabled={startPage - 10 === 1 ? false : true}
          >
            {`<`}
          </PrevNextBtn>
          {new Array(10).fill("").map(
            (_, index) =>
              index + startPage <= lastPage && (
                <span
                  key={index + startPage}
                  id={String(index + startPage)}
                  onClick={onClickPage}
                  style={{
                    color: index + startPage === activePage ? "aqua" : "",
                  }}
                >
                  {index + startPage}
                </span>
              )
          )}
          <PrevNextBtn
            onClick={onClickNext}
            disabled={startPage + 10 <= lastPage ? false : true}
          >
            {`>`}
          </PrevNextBtn>
        </ListsNumBar>
      </ListsNum>
    </div>
  );
}
