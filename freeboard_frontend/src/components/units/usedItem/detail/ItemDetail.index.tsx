import DOMPurify from "dompurify";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useClickBasket } from "../../../commons/hooks/customs/useClickBasket";
import { useClickBuying } from "../../../commons/hooks/customs/useClickBuying";
import { useClickDeleteItem } from "../../../commons/hooks/customs/useClickDeleteItem";
import { useClickPick } from "../../../commons/hooks/customs/useClickPick";
import { useQueryItem } from "../../../commons/hooks/query/useQueryItem";
import KakaoPage from "../../../commons/map/kakao";
import * as S from "./ItemDetail.styles";

export default function ItemDetail(): JSX.Element {
  const router = useRouter();
  const { onClickDeleteItem } = useClickDeleteItem();
  const { onClickBuy } = useClickBuying();
  const { onClickPick } = useClickPick();
  const { onClickBasket } = useClickBasket();
  const { data } = useQueryItem();
  const [, setBasketState] = useState();
  const [isKakao, setIsKakao] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const basketFunc = () => {
        let basketRecent = JSON.parse(localStorage.getItem("todays") ?? "null");
        setBasketState(basketRecent);
      };

      basketFunc();
    }
  }, []);

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
            <KakaoPage isKakao={isKakao} />
          </S.DetailWrapper>
          <S.ButtonBox>
            <Link href={"/Items"}>
              <S.a>목록으로</S.a>
            </Link>
            <Link href={`/Items/${router.query.useditemId}/edit`}>
              <S.a>수정하기</S.a>
            </Link>
            <S.a onClick={onClickDeleteItem}>삭제하기</S.a>
          </S.ButtonBox>
          <S.DivideLine2></S.DivideLine2>
        </S.Wrapper>
      </S.Container>
    </>
  );
}
