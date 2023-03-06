import { gql, useMutation, useQuery } from "@apollo/client";
import DOMPurify from "dompurify";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import {
  IMutation,
  IMutationCreatePointTransactionOfBuyingAndSellingArgs,
  IMutationDeleteUseditemArgs,
  IMutationToggleUseditemPickArgs,
  IQuery,
  IQueryFetchUseditemArgs,
  IUseditem,
} from "../../../../commons/types/generated/types";
import * as S from "./ItemDetail.styles";

const FETCH_ITEM = gql`
  query fetchUseditem($useditemId: ID!) {
    fetchUseditem(useditemId: $useditemId) {
      _id
      name
      remarks
      contents
      price
      createdAt
      seller {
        name
      }
      images
      pickedCount
      # buyer
      # useditemAddress {
      #   zipcode
      #   address
      #   addressDetail
      # }
    }
  }
`;

const DELETE_ITEM = gql`
  mutation ($useditemId: ID!) {
    deleteUseditem(useditemId: $useditemId)
  }
`;

const CREATE_PICK = gql`
  mutation toggleUseditemPick($useditemId: ID!) {
    toggleUseditemPick(useditemId: $useditemId)
  }
`;

const CREATE_BUY = gql`
  mutation createPointTransactionOfBuyingAndSelling($useritemId: ID!) {
    createPointTransactionOfBuyingAndSelling(useritemId: $useritemId) {
      _id
    }
  }
`;

export default function ItemDetail(): JSX.Element {
  const router = useRouter();
  const [basketState, setBasketState] = useState();
  const [toggleUseditemPick] = useMutation<
    Pick<IMutation, "toggleUseditemPick">,
    IMutationToggleUseditemPickArgs
  >(CREATE_PICK);
  const [deleteItem] = useMutation<
    Pick<IMutation, "deleteUseditem">,
    IMutationDeleteUseditemArgs
  >(DELETE_ITEM);
  const { data } = useQuery<
    Pick<IQuery, "fetchUseditem">,
    IQueryFetchUseditemArgs
  >(FETCH_ITEM, {
    variables: {
      useditemId: String(router.query.useditemId),
    },
  });
  const [createPoint] = useMutation<
    Pick<IMutation, "createPointTransactionOfBuyingAndSelling">,
    IMutationCreatePointTransactionOfBuyingAndSellingArgs
  >(CREATE_BUY);

  const onClickMoveEdit = () => {
    router.push(`/Items/${router.query.useditemId}/edit`);
  };

  const onClickMoveList = () => {
    router.push("/Items");
  };

  const onClickDelete = () => {
    deleteItem({
      variables: {
        useditemId: String(router.query.useditemId),
      },
    });
    alert("삭제되었습니다.");
    router.push("/Items");
  };

  const onClickBuy = async () => {
    await createPoint({
      variables: {
        useritemId: String(router.query.useditemId),
      },
    });
    alert("상품을 구매하였습니다.");
  };

  const onClickPick = () => {
    toggleUseditemPick({
      variables: {
        useditemId: String(router.query.useditemId),
      },
    });
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      const basketFunc = () => {
        let basketRecent = JSON.parse(localStorage.getItem("todays"));
        setBasketState(basketRecent);
      };

      basketFunc();
    }
  }, []);

  const onClickBasket = (basket: IUseditem) => () => {
    const baskets: IUseditem[] = JSON.parse(
      localStorage.getItem("baskets") ?? "[]"
    );
    const temp = baskets.filter((el) => el._id === basket._id);
    if (temp.length >= 1) {
      alert("이미 장바구니에 있습니다.");
      return;
    }
    baskets.push(basket);
    localStorage.setItem("baskets", JSON.stringify(baskets));
  };

  return (
    <>
      <S.Container>
        <S.Wrapper>
          <S.DetailWrapper>
            <S.TopWrapper>
              <S.ImageBox>
                <img
                  src={`https://storage.googleapis.com/${data?.fetchUseditem.images?.[0]}`}
                />
              </S.ImageBox>
              <div>
                <S.NameBox>
                  <div>{data?.fetchUseditem?.name}</div>
                  <div>
                    <S.EditBtnBox>
                      <S.EditBtn onClick={onClickMoveEdit}>수정</S.EditBtn>

                      <S.EditBtn onClick={onClickDelete}>삭제</S.EditBtn>
                    </S.EditBtnBox>
                  </div>
                </S.NameBox>

                <S.Price>{data?.fetchUseditem?.price}</S.Price>
                <span>원</span>
                <S.Divide1></S.Divide1>
                <S.ItemContents>{data?.fetchUseditem?.remarks}</S.ItemContents>

                <S.Divide1></S.Divide1>
                <S.BtnBox>
                  <S.PickBtn
                    onClick={onClickPick}
                    style={{
                      backgroundColor:
                        data?.fetchUseditem.pickedCount !== 0 ? "red" : "gray",
                    }}
                  >
                    찜{data?.fetchUseditem.pickedCount}
                  </S.PickBtn>
                  <S.BasketBtn onClick={onClickBasket(data?.fetchUseditem)}>
                    장바구니
                  </S.BasketBtn>
                  <S.BuyBtn onClick={onClickBuy}>바로구매</S.BuyBtn>
                </S.BtnBox>
              </div>
            </S.TopWrapper>
            <S.ItemContents>
              {typeof window !== "undefined" && (
                <div
                  dangerouslySetInnerHTML={{
                    __html: DOMPurify.sanitize(
                      String(data?.fetchUseditem?.contents)
                    ),
                  }}
                />
              )}
            </S.ItemContents>
          </S.DetailWrapper>
          <S.ButtonBox>
            <S.Buttons onClick={onClickMoveList}>목록으로</S.Buttons>
            <S.Buttons onClick={onClickMoveEdit}>수정하기</S.Buttons>

            <S.Buttons onClick={onClickDelete}>삭제하기</S.Buttons>
          </S.ButtonBox>
          <S.DivideLine2></S.DivideLine2>
        </S.Wrapper>
      </S.Container>
    </>
  );
}
