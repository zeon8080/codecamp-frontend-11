// 1. 렌더링
// 2. 인풋창에 값 입력
// 3. 등록학기 버튼 클릭
// 4. 뮤테이션 날리기(가짜 API 만들기)
// 5. 등록된 페이지로 이동

import {
  ApolloClient,
  ApolloProvider,
  HttpLink,
  InMemoryCache,
} from "@apollo/client";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import StaticRoutingMovedPage from "../../pages/section33/33-05-jest-unit-test-mocking";
import fetch from "cross-fetch";
import mockRouter from "next-router-mock";
jest.mock("next/router", () => require("next-router-mock"));
// import { server } from "../../src/commons/mocks";
// beforeAll(() => server.listen());
// afterAll(() => server.close());
it("게시글이 잘 등록되는지 테스트", async () => {
  // 가짜 만들기 mock - service - worker => msw 설치
  const client = new ApolloClient({
    link: new HttpLink({
      uri: "http://mock.com/graphql",
      fetch,
    }),
    cache: new InMemoryCache(),
  });

  render(
    <ApolloProvider client={client}>
      <StaticRoutingMovedPage />
    </ApolloProvider>
  );

  fireEvent.change(screen.getByRole("input-writer"), {
    target: { value: "맹구" },
  });
  fireEvent.change(screen.getByRole("input-title"), {
    target: { value: "제목" },
  });
  fireEvent.change(screen.getByRole("input-contents"), {
    target: { value: "내용" },
  });

  fireEvent.click(screen.getByRole("submit-button"));
  await waitFor(() => {
    expect(mockRouter.asPath).toEqual("/boards/qqq");
  });
});
