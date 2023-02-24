import CommentsListsUIItem from "./CommentsLists.presenterItem";
import InfiniteScroll from "react-infinite-scroller";
import type { ICommentsListsUIProps } from "./CommentsLists.type";

export default function CommentsListsUI(
  props: ICommentsListsUIProps
): JSX.Element {
  return (
    <div style={{ height: "800px", overflow: "auto" }}>
      <InfiniteScroll
        pageStart={0}
        loadMore={props.onLoadMore}
        hasMore={true}
        useWindow={false}
      >
        {props.data?.fetchBoardComments.map((el: any) => (
          <CommentsListsUIItem key={el._id} el={el} />
        )) ?? <></>}
      </InfiniteScroll>
    </div>
  );
}
