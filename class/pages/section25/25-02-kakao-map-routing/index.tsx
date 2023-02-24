import Link from "next/link";
import { useRouter } from "next/router";

export default function KakaoMapPage(): JSX.Element {
  const router = useRouter();
  const onClickMove = (): void => {
    void router.push("/section25/25-02-kakao-map-routing-moved");
  };

  return (
    <>
      <button onClick={onClickMove}>페이지 이동</button>

      {/* 매 페이지를 새로 다운 받으므로 SPA를 활용 못함 */}
      {/* <a href="/section25/25-02-kakao-map-routing-moved">페이지 이동하기</a> */}

      {/* next에서 제공하는 a태그 이므로 SPA 활용 가능 , <a>를 써서 검색 엔진이 잘 알아줌 */}
      <Link href={"/section25/25-02-kakao-map-routing-moved"}>
        <a>페이지 이동하기</a>
      </Link>

      {/* 의미있는 시멘틱 태그의 장점 */}
      {/* <h1>요리</h1> */}
      {/* <div>요라</div> */}
    </>
  );
}
