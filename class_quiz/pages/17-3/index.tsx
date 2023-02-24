import axios from "axios";
import { useEffect, useState } from "react";

export default function RestGetPage(): JSX.Element {
  const [mario, setMario] = useState();

  useEffect(() => {
    const onClickSync = async (): Promise<void> => {
      // const result = await axios.get("https://dog.ceo/api/breeds/image/random");
      const result = await axios.get(
        "https://www.amiiboapi.com/api/amiibo/?name=mario"
      );
      console.log(result.data.amiibo);
      setMario(result.data.amiibo[0].image);
    };
    void onClickSync();
  }, []);

  return <div>{<img src={mario} />}</div>;
}
