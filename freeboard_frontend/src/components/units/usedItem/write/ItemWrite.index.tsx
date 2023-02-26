import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { schema } from "./ItemWrite.validation";
import * as S from "./ItemWrite.styles";
import "react-quill/dist/quill.snow.css";
import {
  IItemWrite,
  useClickNew,
} from "../../../commons/hooks/customs/useClickNew";
import { useEffect } from "react";
import { useRouter } from "next/router";
import { useClickEdit } from "../../../commons/hooks/customs/useClickEdit";
import dynamic from "next/dynamic";
import KakaoPage from "../../../commons/map/kakao";
import { gql, useQuery } from "@apollo/client";
import {
  IQuery,
  IQueryFetchUseditemArgs,
} from "../../../../commons/types/generated/types";
const ReactQuill = dynamic(async () => await import("react-quill"), {
  ssr: false,
});

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

export default function ItemWrite(props: IItemWrite) {
  const router = useRouter();
  const { data } = useQuery<
    Pick<IQuery, "fetchUseditem">,
    IQueryFetchUseditemArgs
  >(FETCH_ITEM, {
    variables: {
      useditemId: String(router.query.useditemId),
    },
  });

  const { onClickNew, onChangeFile, imageUrls } = useClickNew();
  const { onClickEdit } = useClickEdit();

  const { register, handleSubmit, formState, setValue, trigger } =
    useForm<IItemWrite>({
      resolver: yupResolver(schema),
      mode: "onChange",
    });

  useEffect(() => {
    if (localStorage.getItem("accessToken") === null) {
      alert("로그인 후에 이용해주세요.");
      void router.push("/log-in");
    }
  }, []);

  const onChangeContents = (value: string): void => {
    console.log(value);
    setValue("contents", value === "<p><br></p>" ? "" : value);
    void trigger("contents");
  };

  return (
    <form
      onSubmit={
        props.isEdit ? handleSubmit(onClickEdit) : handleSubmit(onClickNew)
      }
    >
      <S.Container>
        <S.Wrapper>
          <S.Title>상품 {props.isEdit ? "수정" : "등록"}</S.Title>
          <div>상품명</div>
          <input
            type="text"
            {...register("name")}
            defaultValue={data?.fetchUseditem.name ?? ""}
          />

          <div>{formState.errors.name?.message}</div>
          <div>한줄요약</div>
          <input
            type="text"
            {...register("remarks")}
            defaultValue={data?.fetchUseditem.remarks ?? ""}
          />
          <div>상품설명</div>
          <ReactQuill onChange={onChangeContents} />
          <div>판매가격</div>
          <input
            type="text"
            {...register("price")}
            defaultValue={data?.fetchUseditem.price ?? ""}
          />
          <div>태그입력</div>
          {/* <InputItemWrite register={register("tags")} /> */}
          <div>주소</div>
          <KakaoPage />
          <input type="text" />
          <input type="text" />
          <div>사진첨부</div>
          <div>
            {imageUrls.map((el, index) => (
              <div>
                <input
                  id={String(index)}
                  type="file"
                  onChange={onChangeFile}
                  multiple={true}
                />
                <img
                  src={`https://storage.googleapis.com/${imageUrls[index]}`}
                />
              </div>
            ))}
          </div>
          <div>메인 사진 설정</div>
          <button>{props.isEdit ? "수정" : "등록"}하기</button>
        </S.Wrapper>
      </S.Container>
    </form>
  );
}
