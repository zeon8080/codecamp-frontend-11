import { useRecoilState } from "recoil";
import { isEditState } from "../../../../src/components/commons/recoil";
import WritePage from "../../../../src/components/units/22/write";
import { useEffect } from "react";

export default function NewPage(): JSX.Element {
  const [isEdit, setIsEdit] = useRecoilState(isEditState);
  useEffect(() => {
    setIsEdit(false);
  }, []);
  return <WritePage />;
}
