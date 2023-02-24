import { useRouter } from "next/router";
import MainPagePresenter from "./MainPage.presenter";

export default function MainPageContainer(): JSX.Element {
  const router = useRouter();

  const onClickMoveBoardLists = (): void => {
    void router.push("/boards");
  };

  return <MainPagePresenter onClickMoveBoardLists={onClickMoveBoardLists} />;
}
