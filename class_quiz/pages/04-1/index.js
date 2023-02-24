import axios from "axios";

export default function () {
  async function onClickBtn() {
    const result = await axios.get("https://koreanjson.com/users");
    console.log(result);
  }

  return <button onClick={onClickBtn}>REST-API</button>;
}
