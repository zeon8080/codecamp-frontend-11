declare const window: typeof globalThis & {
  IMP: any;
};

export default function PaymentPage(): JSX.Element {
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
        amount: 100,
        buyer_email: "gildong@gmail.com",
        buyer_name: "홍길동",
        buyer_tel: "010-4242-4242",
        buyer_addr: "서울특별시 강남구 신사동",
        buyer_postcode: "01181",
        m_redirect_url: "http://localhost:3000/section28/28-01-payment",
        // 모바일에서는 결제시 페이지 주소가 바뀌기때문에 결제 후 돌아갈 페이지 입력!!
      },
      (rsp: any) => {
        // callback
        if (rsp.success === true) {
          // 결제 성공 시 로직,
          console.log(rsp);

          // 백엔드에 결제관련 데이터 넘기기 = 뮤테이션 실행하기.
          // createPointTransactionOfLoading(playground)
        } else {
          // 결제 실패 시 로직,
        }
      }
    );
  };
  //   가맹점 식별코드 : imp70564048
  return (
    <>
      <script
        type="text/javascript"
        src="https://code.jquery.com/jquery-1.12.4.min.js"
      ></script>

      <script src="https://cdn.iamport.kr/v1/iamport.js"></script>
      <button onClick={onClickPayment}>결제</button>
    </>
  );
}
