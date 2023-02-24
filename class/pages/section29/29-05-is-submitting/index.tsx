import axios from "axios";
import { useState } from "react";
import { wrapAsync } from "../../../src/commons/libraries/asyncFunc";

export default function RestGetPage(): JSX.Element {
  const [isSubmitting, setIsSubmitting] = useState(false);

  // 게시글 등록하기 버튼이라고 가정
  const onClickSync = async (): Promise<void> => {
    setIsSubmitting(true);
    const result = await axios.get("https://koreanjson.com/posts/1");
    console.log(result.data.title); // 제대로된 결과
    setIsSubmitting(false);
  };

  return (
    <div>
      <button onClick={wrapAsync(onClickSync)} disabled={isSubmitting}>
        REST_API(동기) 요청하기
      </button>
    </div>
  );
}
