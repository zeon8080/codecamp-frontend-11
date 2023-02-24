import { useEffect, useRef } from "react";

export default function useRefFocus(): JSX.Element {
  const focusRef = useRef(null);
  useEffect(() => {
    focusRef.current?.focus();
  }, []);

  return (
    <>
      비밀번호:
      <input type="password" ref={focusRef} />
    </>
  );
}
