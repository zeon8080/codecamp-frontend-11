import DOMPurify from "dompurify";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useClickBasket } from "../../../commons/hooks/customs/useClickBasket";
import { useClickBuying } from "../../../commons/hooks/customs/useClickBuying";
import { useClickDeleteItem } from "../../../commons/hooks/customs/useClickDeleteItem";
import { useQueryItem } from "../../../commons/hooks/query/useQueryItem";
import KakaoPage from "../../../commons/map/kakao";
import * as S from "./ItemDetail.styles";

export default function ItemDetail(): JSX.Element {
  const router = useRouter();
  const { onClickDeleteItem } = useClickDeleteItem();
  const { onClickBuy } = useClickBuying();
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
                {/* <img
                  src={`https://storage.googleapis.com/${data?.fetchUseditem?.images[0]}`}
                /> */}
                <img
                  src={
                    data?.fetchUseditem.images
                      ? `https://storage.googleapis.com/${data?.fetchUseditem?.images?.[0]}`
                      : "/empty.png"
                  }
                />
              </S.ImageBox>
              <div>
                <S.NameBox>
                  <div>상품명 : {data?.fetchUseditem?.name}</div>
                </S.NameBox>
                <S.Divide1></S.Divide1>

                <S.Price>가격 : {data?.fetchUseditem?.price}</S.Price>
                <span>원</span>
                <S.Divide1></S.Divide1>
                <S.ItemContents>
                  요약 : {data?.fetchUseditem?.remarks}
                </S.ItemContents>

                <S.Divide1></S.Divide1>
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
            <S.BtnBox>
              <S.BasketBtn
                onClick={() => {
                  if (!data?.fetchUseditem) return;
                  onClickBasket(data.fetchUseditem);
                }}
              >
                장바구니
              </S.BasketBtn>

              <S.BuyBtn onClick={onClickBuy}>바로구매</S.BuyBtn>
            </S.BtnBox>
            <KakaoPage isKakao={isKakao} address={""} />
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
