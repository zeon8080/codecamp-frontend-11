import { useState } from "react";
import { Rate } from "antd";

export default function StarRate() {
  const [value, setValue] = useState(0);

  function qqq(event) {
    alert(event);
    setValue(event);
  }

  return (
    <div>
      <Rate onChange={qqq} value={value} /> {value}
    </div>
  );
}
