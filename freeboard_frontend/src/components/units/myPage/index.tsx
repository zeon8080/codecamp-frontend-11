declare const window: typeof globalThis & {
  IMP: any;
};
import * as S from "./myPage.styles";
import { gql, useMutation, useQuery } from "@apollo/client";
import { useForm } from "react-hook-form";
import {
  IMutation,
  IMutationCreatePointTransactionOfLoadingArgs,
  IQuery,
} from "../../../commons/types/generated/types";
import { LoginCheck } from "../../commons/hocs/withAuth";

const CREATE_POINT = gql`
  mutation createPointTransactionOfLoading($impUid: ID!) {
    createPointTransactionOfLoading(impUid: $impUid) {
      _id
    }
  }
`;

const FETCH_USER = gql`
  query fetchUserLoggedIn {
    fetchUserLoggedIn {
      email
      name
      userPoint {
        amount
      }
    }
  }
`;
interface IForm {
  point: string;
}
export default function MyPage() {
  const { register, handleSubmit } = useForm<IForm>({
    mode: "onChange",
  });
  const [createPointTransactionOfLoading] = useMutation<
    Pick<IMutation, "createPointTransactionOfLoading">,
    IMutationCreatePointTransactionOfLoadingArgs
  >(CREATE_POINT);

  const { data } = useQuery<Pick<IQuery, "fetchUserLoggedIn">>(FETCH_USER);

  const onClickCharge = async (Uid: string) => {
    const result = await createPointTransactionOfLoading({
      variables: {
        impUid: Uid,
      },
    });
    console.log(result);
  };

  const onClickPayment = (point: IForm): void => {
    const IMP = window.IMP;
    IMP.init("imp49910675");

    IMP.request_pay(
      {
        pg: "kakaopay",
        pay_method: "card",
        name: "충전",
        amount: point.point,
        buyer_email: "gildong@gmail.com",
        buyer_name: "홍길동",
        buyer_tel: "010-4242-4242",
        buyer_addr: "서울특별시 강남구 신사동",
        buyer_postcode: "01181",
      },
      (rsp: any) => {
        if (rsp.success === true) {
          onClickCharge(rsp.imp_uid);
        } else {
          alert("결제에 실패하였습니다.");
        }
      }
    );
  };

  LoginCheck();

  return (
    <S.Container>
      <S.Wrapper>
        <S.InfoBox>
          <div>이메일: {data?.fetchUserLoggedIn.email}</div>
          <div>닉네임: {data?.fetchUserLoggedIn.name}</div>
          <div>잔액: {data?.fetchUserLoggedIn.userPoint?.amount}원</div>
          <script
            type="text/javascript"
            src="https://code.jquery.com/jquery-1.12.4.min.js"
          ></script>
          <script src="https://cdn.iamport.kr/v1/iamport.js"></script>

          <form onSubmit={handleSubmit(onClickPayment)}>
            <div>
              <S.Input type="text" {...register("point")} />
              <S.Button>충전하기</S.Button>
            </div>
          </form>
        </S.InfoBox>
      </S.Wrapper>
    </S.Container>
  );
}
