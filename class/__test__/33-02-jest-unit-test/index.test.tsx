import JestUnitTestPage from "../../pages/section33/33-02-jest-unit-test";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

it("내가 원하는대로 그려지는지 테스트하기", () => {
  render(<JestUnitTestPage />);
  const myText = screen.getByText("철수는 13살 입니다.");
  expect(myText).toBeInTheDocument();
  const myText2 = screen.getByText("철수의 취미 입력:");
  expect(myText2).toBeInTheDocument();
  const myText3 = screen.getByText("철수랑 놀러가기");
  expect(myText3).toBeInTheDocument();
});
