import JestUnitTestPage from "../../pages/section33/33-03-jest-unit-test-snapshot";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";

it("기존 사진이랑 바뀐게 없는지 비교해보기 - 스냅샷 테스트", () => {
  const result = render(<JestUnitTestPage />);
  expect(result.container).toMatchSnapshot();
});

// 철수는 13살 입니다 에서 15살로 바꾸고싶다면 yarn test -u 를 해서 업데이트로 사진을 다시 찍어줘야한다.
