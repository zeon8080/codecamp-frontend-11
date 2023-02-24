import { DatePicker, Space } from "antd";

import { useState } from "react";

export default function qqq() {
  const [date, setDateString] = useState();

  const onChange = (date, dateString) => {
    setDateString(dateString);
    // setDateString(date.$M + 1);
  };

  return (
    <Space direction="vertical">
      <DatePicker onChange={onChange} />
      <div>{date}</div>
    </Space>
  );
}
