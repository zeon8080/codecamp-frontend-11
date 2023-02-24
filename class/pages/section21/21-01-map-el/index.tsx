export default function MapElPage(): JSX.Element {
  // 1. 기본 방법 (map은 리턴값이 필요해서 리턴값이 필요없는 forEach 사용)
  ["철수", "영희", "훈이"].forEach((el, index) => {
    console.log("el: ", el);
    console.log("index: ", index);
  });

  // 2. 매개변수 변경해도 가능
  ["철수", "영희", "훈이"].forEach((abcd, zzz) => {
    console.log("el: ", abcd);
    console.log("index: ", zzz);
  });

  // 3. 함수 선언식 방법
  ["철수", "영희", "훈이"].forEach(function (abcd, zzz) {
    console.log("el: ", abcd);
    console.log("index: ", zzz);
  });

  // 4. el과 index 바꾸기
  ["철수", "영희", "훈이"].forEach((index, el) => {
    console.log("el: ", el);
    console.log("index: ", index);
  });

  return <></>;
}
