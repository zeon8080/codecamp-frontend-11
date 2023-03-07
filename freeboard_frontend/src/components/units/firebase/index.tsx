import type { ChangeEvent } from "react";
import { useState } from "react";

import { collection, addDoc, getFirestore } from "firebase/firestore/lite";
import { firebaseApp } from "../../../commons/libraries/firebase";

export default function FireBasePage() {
  const [writer, setWriter] = useState("");
  const [contents, setContents] = useState("");

  const onChangeWriter = (e: ChangeEvent<HTMLInputElement>) => {
    setWriter(e.target.value);
  };
  const onChangeContents = (e: ChangeEvent<HTMLInputElement>) => {
    setContents(e.target.value);
  };
  const onClickSubmit = async (): Promise<void> => {
    const board = collection(getFirestore(firebaseApp), "board");
    await addDoc(board, { writer, contents });
    alert("등록!");
  };

  return (
    <>
      Writer: <input type="text" onChange={onChangeWriter} />
      Contents: <input type="text" onChange={onChangeContents} />
      <button onClick={onClickSubmit}>Submit!</button>
    </>
  );
}
