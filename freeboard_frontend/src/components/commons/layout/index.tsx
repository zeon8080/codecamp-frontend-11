import LayoutHeader from "./header/header.index";
import LayoutNavigation from "./navigation";
import { useRouter } from "next/router";
import LayoutRecent from "./recent";
interface ILayoutProps {
  children: JSX.Element;
}

export default function Layout(props: ILayoutProps): JSX.Element {
  const router = useRouter();
  const HIDDEN_RECENT = ["/join", "/log-in"];

  const isHiddenRecent = HIDDEN_RECENT.includes(router.asPath);

  return (
    <div>
      <LayoutHeader />
      {!isHiddenRecent && <LayoutRecent />}
      <LayoutNavigation />
      <div>{props.children}</div>
    </div>
  );
}
