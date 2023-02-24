import { IPaginationBasicUIProps } from "./paginationBasic.types";
import { PageNum } from "./paginationBasic.styles";

export default function PaginationBasicUI(
  props: IPaginationBasicUIProps
): JSX.Element {
  return (
    <div>
      <PageNum onClick={props.onClickPrevPage}>{`<`}</PageNum>
      {new Array(10).fill("").map(
        (_, index) =>
          index + props.startPage <= props.lastPage && (
            <PageNum
              key={index + props.startPage}
              id={String(index + props.startPage)}
              onClick={props.onClickPage}
              style={{
                color:
                  index + props.startPage === props.activePage ? "#8cf2b3" : "",
              }}
            >
              {index + props.startPage}
            </PageNum>
          )
      )}
      <PageNum
        onClick={props.onClickNextPage}
        disabled={props.startPage + 10 <= props.lastPage ? false : true}
      >
        {`>`}
      </PageNum>
    </div>
  );
}
