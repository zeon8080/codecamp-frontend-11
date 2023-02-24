import { gql, useQuery } from "@apollo/client";
import { useState } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import Script from "next/script";

declare const window: typeof globalThis & {
  IMP: any;
};

const FETCH_USER_LOGGED_IN = gql`
  query {
    fetchUserLoggedIn {
      email
      name
    }
  }
`;

export default function LoginFetchPage() {
  const router = useRouter();
  const { data } = useQuery(FETCH_USER_LOGGED_IN);
  console.log(data);
  const [price, setPrice] = useState(0);

  const onChangePrice = (p: number) => () => {
    console.log(p);
    setPrice(p);
  };

  const onClickPayment = (): void => {
    const IMP = window.IMP; // 생략 가능
    IMP.init("imp70564048"); // 예: imp00000000a

    IMP.request_pay(
      {
        // param
        pg: "kakaopay",
        pay_method: "card",
        // merchant_uid: "ORD20180131-0000011", 주석처리하면 자동으로 주문번호 생성됨. (테스트 기준)
        name: "아이폰",
        amount: price,
        buyer_email: "gildong@gmail.com",
        buyer_name: "홍길동",
        buyer_tel: "010-4242-4242",
        buyer_addr: "서울특별시 강남구 신사동",
        buyer_postcode: "01181",
      },
      (rsp: any) => {
        if (rsp.success === true) {
          console.log(rsp);
          router.push("/28/payment/complete");
        } else {
        }
      }
    );
  };

  return (
    <>
      {/* <Head> */}
      <Script
        type="text/javascript"
        src="https://code.jquery.com/jquery-1.12.4.min.js"
      ></Script>
      <Script src="https://cdn.iamport.kr/v1/iamport.js"></Script>
      {/* </Head> */}
      <div> {data?.fetchUserLoggedIn.name}님 결제하시겠습니까?</div>
      <input type="radio" name="price" onChange={onChangePrice(500)} />
      오백언
      <br />
      <input type="radio" name="price" onChange={onChangePrice(1000)} />
      처넌
      <br />
      <input type="radio" name="price" onChange={onChangePrice(2000)} />
      이처넌
      <br />
      <input type="radio" name="price" onChange={onChangePrice(5000)} />
      오처넌
      <br />
      <button onClick={onClickPayment}>결제</button>
    </>
  );
}
