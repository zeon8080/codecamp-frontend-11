import { useQuery, gql } from "@apollo/client";
import type { ChangeEvent, MouseEvent } from "react";
import { useState } from "react";
import _ from "lodash";
import { v4 as uuidv4 } from "uuid";

const FETCH_BOARDS = gql`
  query fetchBoards($page: Int, $search: String) {
    fetchBoards(page: $page, search: $search) {
      _id
      writer
      title
      contents
    }
  }
`;
export default function StaticRoutingMovedPage(): JSX.Element {
  // const [search, setSearch] = useState("");
  const [keyword, setKeyword] = useState("");
  const { data, refetch } = useQuery(FETCH_BOARDS);

  const onClickPage = (event: MouseEvent<HTMLSpanElement>): void => {
    void refetch({ page: Number(event.currentTarget.id) });
  };

  const getDebounce = _.debounce((value) => {
    void refetch({ search: value, page: 1 });
    setKeyword(value);
  }, 300);

  const onChangeSearch = (e: ChangeEvent<HTMLInputElement>): void => {
    // setSearch(e.currentTarget.value);
    getDebounce(e.currentTarget.value);
  };

  return (
    <div>
      <input type="text" onChange={onChangeSearch} />

      {data?.fetchBoards.map((el: any) => (
        <div key={el._id}>
          <span style={{ margin: "10px" }}>
            {el.title
              .replaceAll(keyword, `@@@${keyword}@@@`)
              .split("@@@")
              .map((el: any) => (
                <span
                  key={uuidv4()}
                  style={{ color: el === keyword ? "blue" : "black" }}
                >
                  {el}
                </span>
              ))}
          </span>
          <span style={{ margin: "10px" }}>{el.writer}</span>
        </div>
      ))}
      {new Array(10).fill(1).map((_, index) => (
        <span key={index + 1} id={String(index + 1)} onClick={onClickPage}>
          {index + 1}
        </span>
      ))}
    </div>
  );
}
