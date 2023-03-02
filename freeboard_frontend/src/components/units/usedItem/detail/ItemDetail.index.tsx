import { gql, useMutation, useQuery } from "@apollo/client";
import DOMPurify from "dompurify";
import { useRouter } from "next/router";
import { getDate } from "../../../../commons/libraries/util";
import {
  IMutation,
  IMutationDeleteUseditemArgs,
  IMutationToggleUseditemPickArgs,
  IQuery,
  IQueryFetchUseditemArgs,
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
      # pickedCount
      # buyer
      # useditemAddress {
      #   zipcode
      #   address
      #   addressDetail
      # }
    }
  }
`;

const CREATE_PICK = gql`
  mutation toggleUseditemPick($useditemId: ID!) {
    toggleUseditemPick(useditemId: $useditemId)
  }
`;

const DELETE_ITEM = gql`
  mutation ($useditemId: ID!) {
    deleteUseditem(useditemId: $useditemId)
  }
`;

export default function ItemDetail(): JSX.Element {
  const router = useRouter();
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

  const onClickPick = () => {
    toggleUseditemPick({
      variables: {
        useditemId: String(router.query.useditemId),
      },
    });
  };

  return (
    <>
      <S.Container>
        <S.Wrapper>
          <S.DetailWrapper>
            <S.WriterProfile>
              <img src="/profile.png"></img>
              <S.WriterBox>
                <S.Seller>{data?.fetchUseditem?.seller?.name}</S.Seller>
                <S.CreateDate>
                  {getDate(data?.fetchUseditem?.createdAt)}
                </S.CreateDate>
              </S.WriterBox>
            </S.WriterProfile>
            <S.DivideLine></S.DivideLine>
            <S.Remarks>{data?.fetchUseditem?.remarks}</S.Remarks>
            <S.ItemName>{data?.fetchUseditem?.name}</S.ItemName>

            <div>
              {data?.fetchUseditem.images
                ?.filter((el) => el)
                .map((el) => (
                  <img key={el} src={`https://storage.googleapis.com/${el}`} />
                ))}
            </div>
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
            <S.ItemPrice>{data?.fetchUseditem?.price}원</S.ItemPrice>
            <button onClick={onClickPick}>찜!</button>
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
