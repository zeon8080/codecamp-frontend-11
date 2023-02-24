import { gql, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import * as S from "./ItemList.styles";
import {
  IQuery,
  IQueryFetchUseditemsArgs,
} from "../../../../commons/types/generated/types";

const FETCH_ITEMS_LIST = gql`
  query fetchUseditems($page: Int, $search: String) {
    fetchUseditems(page: $page, search: $search) {
      _id
      name
      remarks
      contents
      price
      images
      seller {
        name
      }
      # createdAt
    }
  }
`;

interface IItmesList {
  data?: Pick<IQuery, "fetchUseditems">;

  onLoadMore: () => void;
}

export default function ItemList(): JSX.Element {
  const router = useRouter();
  const { data, fetchMore } = useQuery<
    Pick<IQuery, "fetchUseditems">,
    IQueryFetchUseditemsArgs
  >(FETCH_ITEMS_LIST);

  const onLoadMore = (): void => {
    if (data === undefined) return;
    void fetchMore({
      variables: {
        page: Math.ceil((data?.fetchUseditems.length ?? 10) / 10 + 1),
      },
      updateQuery: (prev, { fetchMoreResult }) => {
        if (fetchMoreResult.fetchUseditems === undefined) {
          return {
            fetchUseditems: [...prev.fetchUseditems],
          };
        }
        return {
          fetchUseditems: [
            ...prev.fetchUseditems,
            ...fetchMoreResult.fetchUseditems,
          ],
        };
      },
    });
  };

  const onClickMoveWrite = () => {
    void router.push("/Items/new");
  };

  const onClickMoveDetail = (event) => {
    void router.push(`/Items/${event?.currentTarget.id}`);
  };

  return (
    <>
      <S.Container>
        <S.Wrapper>
          <S.Scroll
            pageStart={0}
            loadMore={onLoadMore}
            hasMore={true}
            useWindow={false}
          >
            {data?.fetchUseditems.map((el: any) => (
              <S.ListWrapper key={el._id}>
                {/* <span style={{ margin: "10px" }}>
                {String(el._id).slice(-4).toUpperCase()}
              </span> */}
                <S.ItemImage>
                  {el.images && el.images[0] ? (
                    <img
                      src={`https://storage.googleapis.com/${el.images[0]}`}
                    />
                  ) : (
                    <div></div>
                  )}
                </S.ItemImage>
                <S.ItemContents>
                  <span
                    style={{ margin: "10px", cursor: "pointer" }}
                    id={el._id}
                    onClick={onClickMoveDetail}
                  >
                    {el.name}
                  </span>
                  <div style={{ margin: "10px" }}>{el.remarks}</div>
                </S.ItemContents>
                <S.ItemPrice>
                  <span style={{ margin: "10px" }}>{el.price}</span>
                </S.ItemPrice>
              </S.ListWrapper>
            )) ?? <div></div>}
          </S.Scroll>
        </S.Wrapper>
        <S.ItemWriteBtn onClick={onClickMoveWrite}>
          상품 등록하기
        </S.ItemWriteBtn>
      </S.Container>
    </>
  );
}
