import axios from "axios";
import { useEffect, useState } from "react";

export default function RestGetPage(): JSX.Element {
  const [dog, setDog] = useState();

  useEffect(() => {
    const onClickSync = async (): Promise<void> => {
      const result = await axios.get("https://dog.ceo/api/breeds/image/random");
      console.log(result);
      setDog(result.data.message);
    };
    void onClickSync();
  }, []);

  return (
    <div>
      <img src={dog} />
    </div>
  );
}
