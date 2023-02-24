import { useRouter } from "next/router";

export default function StaticRoutingPage() {
  const router = useRouter();

  const onClickMove1 = () => {
    router.push("/section05/05-04-dynamic-routing-board-query-moved/1");
  };
  const onClickMove2 = () => {
    router.push("/section05/05-04-dynamic-routing-board-query-moved/2");
  };
  const onClickMove3 = () => {
    router.push("/section05/05-04-dynamic-routing-board-query-moved/3");
  };

  return (
    <div>
      <button onClick={onClickMove1}>1page 이동하기</button>
      <button onClick={onClickMove2}>2page 이동하기</button>
      <button onClick={onClickMove3}>3page 이동하기</button>
    </div>
  );
}
