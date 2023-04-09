import axios from "axios";
import { useState } from "react";

export default function RestGetPage() {
  const [lo, setLo] = useState();
  // function onClickAsync() {
  //   const result = axios.get("https://koreanjson.com/posts/1");
  //   console.log(result); // promise
  // }
  // //   async function onClickSync() {
  // //     const result = await axios.get("https://koreanjson.com/posts/1"); => 함수 중복 선언 문제
  // //     console.log(result.data.title); //제대로된 결과
  // //   }
  // const onClickSync = async () => {
  //   const result = await axios.get("https://koreanjson.com/posts/1");
  //   console.log(result.data.title); // 제대로된 결과
  // };

  const onClickSync = async () => {
    const result = await axios.get(
      // `https://jjjbackendclass.shop/info/road/restaurant?area=서울시&section=${startPoint}`
      "https://jjjbackendclass.shop/info/road/restaurant?area=서울시&section=강남구"
    );
    console.log("버튼콘솔", result);
    setLo(result);
    // props.setLocation(result);
  };
  return (
    <>
      <div>sadjoprqwrwqasdjop</div>
      {lo?.data.map((el) => (
        <div key={el._id}>
          {/* <button onClick={onClickAsync}>REST-API(비동기) 요청하기</button> */}
          <div>{el.restaurantName}asf</div>
          <button onClick={onClickSync}>REST_API(동기) 요청하기</button>
        </div>
      ))}
    </>
  );
}
