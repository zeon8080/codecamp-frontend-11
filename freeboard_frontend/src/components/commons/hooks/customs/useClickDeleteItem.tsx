import { useRouter } from "next/router";
import { useMutationDeleteItem } from "../mutation/useMutationDeleteItem";

export const useClickDeleteItem = () => {
  const router = useRouter();
  const [deleteItem] = useMutationDeleteItem();

  const onClickDeleteItem = () => {
    deleteItem({
      variables: {
        useditemId: String(router.query.useditemId),
      },
    });
    alert("삭제되었습니다.");
    router.push("/Items");
  };

  return { onClickDeleteItem };
};
