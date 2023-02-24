import LayoutHeader from "./header";
import LayoutBanner from "./banner";
import LayoutFooter from "./footer";
import LayoutNavigation from "./navigation";

export default function Layout(props) {
  return (
    <>
      <LayoutHeader></LayoutHeader>
      <LayoutBanner></LayoutBanner>
      <LayoutNavigation></LayoutNavigation>
      <div style={{ display: "flex", height: "1000px" }}>
        <div style={{ backgroundColor: "lightgreen", width: "10%" }}>
          사이드바 영역
        </div>
        <div>{props.children}</div>
      </div>
      <LayoutFooter></LayoutFooter>
    </>
  );
}
