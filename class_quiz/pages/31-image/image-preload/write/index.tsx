import { useRouter } from "next/router";
import { useEffect } from "react";

const pre = [];

export default function Write() {
  const router = useRouter();

  useEffect(() => {
    const img = new Image();
    img.src = "/giveup.gif";
    img.onload = () => {
      pre.push(img);
    };
    console.log("콘솔", img);
  }, []);

  const onClickMove = () => {
    router.push("/31-image/image-preload/moved");
  };
  return (
    <>
      <button onClick={onClickMove}>이미지 보여주기</button>
    </>
  );
}
