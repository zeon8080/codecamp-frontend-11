import axios from "axios";
import { useState } from "react";

export default function Abc() {
  const [info, setInfo] = useState([]);

  const onCallBack = () => {
    const aaa = new XMLHttpRequest();
    aaa.open("get", "http://numbersapi.com/random?min=1&max=200");
    aaa.send();
    aaa.addEventListener("load", (res: any) => {
      //   console.log(res);
      const num = res.target.response.split(" ")[0];
      //   console.log(num);

      const bbb = new XMLHttpRequest();
      bbb.open("get", `https://koreanjson.com/posts/${num}`);
      bbb.send();
      bbb.addEventListener("load", (res: any) => {
        const myId = JSON.parse(res.target.response).UserId;

        // console.log(myId);

        const ccc = new XMLHttpRequest();
        ccc.open("get", `https://koreanjson.com/posts?useId=${myId}`);
        ccc.send();
        ccc.addEventListener("load", (res: any) => {
          //   console.log(res.target.response);
          setInfo(JSON.parse(res.target.response));
        });
      });
    });
  };

  const onPromise = () => {
    axios
      .get(`http://numbersapi.com/random?min=1&max=200`)
      .then((ppp) => {
        // console.log(ppp);
        const num2 = ppp.data.split(" ")[0];
        // console.log(num2);
        return axios.get(`https://koreanjson.com/posts/${num2}`);
      })
      .then((ppp) => {
        // console.log(ppp);
        const myId2 = ppp.data.UserId;
        // console.log(myId2);
        return axios.get(`https://koreanjson.com/posts?useId=${myId2}`);
      })
      .then((ppp) => {
        // console.log(ppp.data);
        setInfo(ppp.data);
      });
  };

  const onAwait = async () => {
    const ppp = await axios.get(`http://numbersapi.com/random?min=1&max=200`);
    // console.log(ppp);
    const num3 = ppp.data.split(" ")[0];
    // console.log(num3);
    const www = await axios.get(`https://koreanjson.com/posts/${num3}`);
    // console.log(www);
    const myId3 = www.data.UserId;
    // console.log(myId3);
    const result = await axios.get(
      `https://koreanjson.com/posts?useId=${myId3}`
    );
    // console.log(result.data);
    setInfo(result.data);
  };
  console.log(info);

  return (
    <>
      <div>
        {info.map((el: any) => (
          <div key={el}>{el.title}</div>
        ))}
      </div>
      결과:<button onClick={onCallBack}>callBack</button>
      결과:<button onClick={onPromise}>promise</button>
      결과:<button onClick={onAwait}>asnyc/await</button>
    </>
  );
}
