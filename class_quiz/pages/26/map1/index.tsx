import Link from "next/link";
import { useRouter } from "next/router";

export default function Kakao() {
  //   const router = useRouter();

  //   const onClickMove = () => {
  //     router.push("/map2");
  //   };

  return (
    <>
      {/* <button onClick={onClickMove}>이동 </button> */}

      <Link href={"map2"}>이동!</Link>
    </>
  );
}
