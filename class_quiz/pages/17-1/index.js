import { useEffect, useState } from "react";
import { useRouter } from "next/router";

export default function FunctionalLifeCycle() {
  const [isChanged, setIsChanged] = useState(false);
  const router = useRouter();

  useEffect(() => {
    alert("Rendered!");
  }, []);

  useEffect(() => {
    alert("Changed!!");
  }, [isChanged]);

  useEffect(() => {
    return () => {
      alert("Bye!!");
    };
  }, []);

  const onClickMove = () => {
    void router.push("/");
  };

  const onClickChange = () => {
    setIsChanged(true);
  };

  return (
    <div>
      <button onClick={onClickChange}>변경</button>
      <button onClick={onClickMove}>이동</button>
    </div>
  );
}
