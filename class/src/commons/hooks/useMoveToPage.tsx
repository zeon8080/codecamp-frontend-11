import { useRouter } from "next/router";
import { useRecoilState } from "recoil";
import { visitedPageState } from "../stores";

interface IUseMoveToPageReturn {
  onClickMoveToPage: (path: string) => () => void;
  visitedPage: string;
}

export const useMoveToPage = (): IUseMoveToPageReturn => {
  const router = useRouter();
  const [visitedPage, setVisitedPage] = useRecoilState(visitedPageState);

  const onClickMoveToPage = (path: string) => () => {
    // localStorage.setItem("visitedPage", path); // 로컬스토리지도 가능!
    setVisitedPage(path); // 로그인 페이지 일때는 set 하지 않도록 조건 추가하는 쪽으로..
    void router.push(path);
  };

  return {
    visitedPage,
    // onClickMoveToPage: onClickMoveToPage,
    onClickMoveToPage,
  };
};
