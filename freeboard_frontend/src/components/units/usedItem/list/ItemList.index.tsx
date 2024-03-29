import { gql, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import * as S from "./ItemList.styles";
import _ from "lodash";
import {
  IQuery,
  IQueryFetchUseditemsArgs,
  IUseditem,
} from "../../../../commons/types/generated/types";
import { useEffect, useState } from "react";
import type { ChangeEvent } from "react";

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
    }
  }
`;

// interface IItmesList {
//   data?: Pick<IQuery, "fetchUseditems">;
//   onLoadMore: () => void;
// }

export default function ItemList(): JSX.Element {
  const router = useRouter();
  const { data, fetchMore, refetch } = useQuery<
    Pick<IQuery, "fetchUseditems">,
    IQueryFetchUseditemsArgs
  >(FETCH_ITEMS_LIST);
  const [, setKeyword] = useState("");
  const [todayList, setTodayList] = useState<any>();

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

  const onClickMoveDetail =
    (el: any) => (event: { currentTarget: { id: any } }) => {
      onClickToday(el);
      void router.push(`/Items/${event?.currentTarget.id}`);
    };

  const onClickToday = (today: IUseditem) => {
    const todays: IUseditem[] = JSON.parse(
      sessionStorage.getItem("todays") ?? "[]"
    );

    todays.unshift(today);

    sessionStorage.setItem("todays", JSON.stringify(todays));
  };

  const getDebounce = _.debounce((value) => {
    void refetch({ search: value, page: 1 });
    setKeyword(value);
  }, 700);

  const onChangeSearch = (event: ChangeEvent<HTMLInputElement>): void => {
    getDebounce(event.currentTarget.value);
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      const todayFunc = () => {
        let localData = JSON.parse(localStorage.getItem("todays") ?? "[]");
        setTodayList(localData);
      };

      todayFunc();
    }
  }, []);

  return (
    <>
      <div>
        {todayList?.map((el: any) => (
          <img src={`https://storage.googleapis.com/${el.images[0]}`} />
        ))}
      </div>
      <S.Container>
        <S.SearchInput
          placeholder="검색어를 입력해주세요."
          type="text"
          onChange={onChangeSearch}
        />
        <S.Wrapper>
          <S.Scroll
            pageStart={0}
            loadMore={onLoadMore}
            hasMore={true}
            useWindow={false}
          >
            {data?.fetchUseditems.map((el: any) => (
              <S.ListWrapper
                key={el._id}
                id={el._id}
                onClick={onClickMoveDetail(el)}
              >
                {/* <span style={{ margin: "10px" }}>
                {String(el._id).slice(-4).toUpperCase()}
              </span> */}
                <S.ItemImage>
                  <img
                    src={
                      el.images[0]
                        ? `https://storage.googleapis.com/${el.images[0]}`
                        : "/empty.png"
                    }
                  />
                </S.ItemImage>
                <S.ItemContents>
                  <span
                    style={{
                      margin: "4px",
                      fontSize: "14px",
                      cursor: "pointer",
                    }}
                  >
                    상품명 : {el.name}
                  </span>
                  <div style={{ margin: "4px", fontSize: "14px" }}>
                    제목 : {el.remarks}
                  </div>
                </S.ItemContents>
                <S.ItemPrice>
                  <span style={{ margin: "4px", fontSize: "14px" }}>
                    가격 : {el.price}
                  </span>
                </S.ItemPrice>
              </S.ListWrapper>
            )) ?? <div></div>}
          </S.Scroll>
        </S.Wrapper>
      </S.Container>
    </>
  );
}
