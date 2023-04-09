import { Modal } from "antd";
import DaumPostcodeEmbed from "react-daum-postcode";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { schema } from "./ItemWrite.validation";
import * as S from "./ItemWrite.styles";
import "react-quill/dist/quill.snow.css";
import {
  IItemWrite,
  useClickNew,
} from "../../../commons/hooks/customs/useClickNew";
import { useRouter } from "next/router";
import { useClickEdit } from "../../../commons/hooks/customs/useClickEdit";
import dynamic from "next/dynamic";
import KakaoPage from "../../../commons/map/kakao";
import { gql, useQuery } from "@apollo/client";
import {
  IQuery,
  IQueryFetchUseditemArgs,
} from "../../../../commons/types/generated/types";
import { LoginCheck } from "../../../commons/hocs/withAuth";
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

  const {
    onClickNew,
    onChangeFile,
    imageUrls,
    onCompleteAddress,
    onClickAddress,
    isOpen,
    address,
  } = useClickNew();
  const { onClickEdit } = useClickEdit();

  const { register, handleSubmit, formState, setValue, trigger } =
    useForm<IItemWrite>({
      resolver: yupResolver(schema),
      mode: "onChange",
    });

  const onChangeContents = (value: string): void => {
    setValue("contents", value === "<p><br></p>" ? "" : value);
    void trigger("contents");
  };

  LoginCheck();

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
          <ReactQuill
            onChange={onChangeContents}
            defaultValue={data?.fetchUseditem.contents ?? ""}
          />
          <div>판매가격</div>
          <input
            type="text"
            {...register("price")}
            defaultValue={data?.fetchUseditem.price ?? ""}
          />

          <div>주소</div>
          <KakaoPage address={address} />

          {isOpen && (
            <Modal open={true} onOk={onClickAddress} onCancel={onClickAddress}>
              <DaumPostcodeEmbed onComplete={onCompleteAddress} />
            </Modal>
          )}
          <button
            type="button"
            style={{ marginTop: "40px" }}
            onClick={onClickAddress}
          >
            dhfsadijho
          </button>
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
                  src={
                    imageUrls[index] === ""
                      ? `https://storage.googleapis.com/${data?.fetchUseditem.images[index]}`
                      : `https://storage.googleapis.com/${imageUrls[index]}`
                  }
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
