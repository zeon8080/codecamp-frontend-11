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
          <S.DivMargin>
            <div>상품명</div>
            <S.Input
              type="text"
              {...register("name")}
              defaultValue={data?.fetchUseditem.name ?? ""}
            />

            <S.Errors>{formState.errors.name?.message}</S.Errors>
          </S.DivMargin>
          <S.DivMargin>
            <div>한줄요약</div>
            <S.Input
              type="text"
              {...register("remarks")}
              defaultValue={data?.fetchUseditem.remarks ?? ""}
            />
          </S.DivMargin>
          <S.DivMargin>
            <div>상품설명</div>
            <ReactQuill
              style={{ height: "300px" }}
              onChange={onChangeContents}
              defaultValue={data?.fetchUseditem.contents ?? ""}
            />
          </S.DivMargin>
          <S.DivMargin>
            <div>판매가격</div>
            <S.Input
              type="text"
              {...register("price")}
              defaultValue={data?.fetchUseditem.price ?? ""}
            />
            <S.Errors>{formState.errors.price?.message}</S.Errors>
          </S.DivMargin>
          <S.DivMargin>
            <div>직거래 장소</div>
            <KakaoPage address={address} isKakao={false} />
            {isOpen && (
              <Modal
                open={true}
                onOk={onClickAddress}
                onCancel={onClickAddress}
              >
                <DaumPostcodeEmbed onComplete={onCompleteAddress} />
              </Modal>
            )}
            <S.Button
              type="button"
              style={{ marginTop: "40px" }}
              onClick={onClickAddress}
            >
              주소 검색
            </S.Button>
          </S.DivMargin>
          <S.DivMargin>
            <div>사진첨부</div>
            <div>
              {imageUrls.map((el, index) => (
                <div>
                  <input
                    id={String(index)}
                    type="file"
                    onChange={onChangeFile}
                  />
                  <S.UploadImg
                    src={
                      imageUrls[index] === ""
                        ? `https://storage.googleapis.com/${
                            data?.fetchUseditem?.images?.[index] ?? ""
                          }`
                        : `https://storage.googleapis.com/${imageUrls[index]}`
                    }
                  />
                </div>
              ))}
            </div>
          </S.DivMargin>
          <S.SubmitBox>
            <S.Button>{props.isEdit ? "수정" : "등록"}하기</S.Button>
          </S.SubmitBox>
        </S.Wrapper>
      </S.Container>
    </form>
  );
}
