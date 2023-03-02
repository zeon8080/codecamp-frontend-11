// 개발자일때 => 디코,카톡,슬랙 등
import axios from "axios";
import { wrapAsync } from "../../../src/commons/libraries/asyncFunc";

export default function OpengraphDeveloperPage(): JSX.Element {
  const onClickEnter = async (): Promise<void> => {
    // 1. 채팅 데이터에 주소가 있는지 찾기(ex. http로 시작하는 것)

    // 2. 해당 주소로 스크래핑하기
    const result = await axios.get("https://www.gsshop.com"); // CORS: https://www.naver.com
    // console.log(result.data);
    // 3. 메타태그에서 오픈그래프 찾기 og: 애들
    console.log(
      result.data.split("<meta").filter((el: string) => el.includes("og:"))
    );
  };

  return (
    <>
      <button onClick={wrapAsync(onClickEnter)}>채팅 입력 후 엔터치기.</button>
    </>
  );
}
