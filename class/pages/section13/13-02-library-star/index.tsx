import React, { useState } from "react";
import { Rate } from "antd";

// const App: React.FC = () => {
export default function App(): JSX.Element {
  const [value, setValue] = useState(3);
  // 1단계
  //   const onChangeStar=(value:number):void => {
  //       setValue(value)
  //     }

  // 2단계
  //   const onChangeStar = (value) => setValue(value)

  return (
    //  <Rate onChange={onChangeStar} value={value} /> 1단계
    // <Rate onChange={onChangeStar} value={value} /> 2단계
    // <Rate onChange={(value) => setValue(value)} value={value} /> 3단계
    <Rate onChange={setValue} value={value} /> // 4단계
  );
}
// export default App;
