import { useCallback, useMemo, useState } from "react";
import MemoizationWithChildPage from "./02-child";

export default function MemoizationPage(): JSX.Element {
  console.log("부모컴포넌트가 렌더링 되었습니다.");

  let countLet = 0;
  const [countState, setCountState] = useState(0);

  // 1. useMemo()로 변수 기억
  const aaa = useMemo(() => Math.random(), []); // 중괄호 리턴 생략
  console.log(aaa);

  // 2. useCallback()으로 함수 기억
  const onClickCountLet = useCallback((): void => {
    console.log(countLet + 1);
    countLet += 1;
  }, []); // 의존성 배열에 있는 값이 바뀌었다. 함수가 다시 실행된다. > 새로운 값이 저장 effect memo callback 원리 동일

  // 3. useCallback 사용시 주의사항 => state 사용시 주의
  const onClickCountState = useCallback((): void => {
    // console.log(countState + 1);
    // setCountState(countState + 1);
    setCountState((prev) => prev + 1);
  }, []);

  // 4. useMemo()로 나만의 useCallback 만들어보기
  // const onClickCountState2 = useMemo(() => {
  //   return (): void => {
  //     console.log(countState + 1);
  //     setCountState(countState + 1);
  //   };
  // }, []);

  return (
    <>
      <div>===============================</div>
      <h1>저는 부모컴포넌트 입니다.</h1>
      <div>count:(let) {countLet}</div>
      <button onClick={onClickCountLet}>카운트(let) +1 올리기</button>

      <div>count:(state) {countState}</div>
      <button onClick={onClickCountState}>카운트(state) +1 올리기</button>

      {/* 로직과 UI가 합쳐져서 헷갈림. 유지보수 힘들고 메모이제이션 더 복잡
      <div>count:(state) {countState}</div>
      <button
        onClick={useCallback((): void => {
          setCountState((prev) => prev + 1);
        }, [])}
      >
        카운트(state) +1 올리기
      </button> */}
      <div>===============================</div>
      <MemoizationWithChildPage />
    </>
  );
}
