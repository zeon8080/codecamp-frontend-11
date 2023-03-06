import LayoutBanner from "./banner";
import LayoutFooter from "./footer";
import LayoutHeader from "./header/header.index";
import LayoutNavigation from "./navigation";
import { useRouter } from "next/router";
import LayoutRecent from "./recent";
interface ILayoutProps {
  children: JSX.Element;
}

export default function Layout(props: ILayoutProps): JSX.Element {
  const router = useRouter();
  const HIDDEN_HEADER = ["/main"];

  const isHiddenHeader = HIDDEN_HEADER.includes(router.asPath);

  return (
    <div>
      {!isHiddenHeader && <LayoutHeader />}
      <LayoutRecent />
      <LayoutNavigation />
      <div>{props.children}</div>
      <LayoutFooter></LayoutFooter>
    </div>
  );
}
