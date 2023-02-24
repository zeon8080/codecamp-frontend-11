import { useQuery, gql } from "@apollo/client";
import styled from "@emotion/styled";
import InfinitsScroll from "react-infinite-scroller";

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
const Wrapper = styled.div`
  height: 500px;
  overflow: auto;
`;

const WidthTitle = styled.div`
  width: 50%;
  border: 1px solid blue;
`;
const WidthWriter = styled.div`
  width: 50%;
  border: 1px solid blue;
`;

const WidthLists = styled.div`
  width: 500px;
  display: flex;
  flex-direction: row;
  text-align: center;
`;

export default function MovedPage() {
  const { data, fetchMore } = useQuery(FETCH_BOARDS);

  const onLoadMore = () => {
    if (data === undefined) return;
    fetchMore({
      variables: { page: Math.ceil((data?.fetchBoards.length ?? 10) / 10 + 1) },
      updateQuery: (prev, { fetchMoreResult }) => {
        if (fetchMoreResult.fetchBoards === undefined) {
          return {
            fetchBoards: [...prev.fetchBoards],
          };
        }
        return {
          fetchBoards: [...prev.fetchBoards, ...fetchMoreResult.fetchBoards],
        };
      },
    });
  };
  return (
    <Wrapper>
      <InfinitsScroll
        pageStart={0}
        loadMore={onLoadMore}
        hasMore={true}
        useWindow={false}
      >
        {data?.fetchBoards.map((el) => (
          <WidthLists key={el._id}>
            <WidthTitle>{el.title}</WidthTitle>
            <WidthWriter>{el.writer}</WidthWriter>
          </WidthLists>
        )) ?? <div></div>}
      </InfinitsScroll>
    </Wrapper>
  );
}
