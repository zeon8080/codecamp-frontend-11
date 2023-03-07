import { useRouter } from "next/router";
import { useMutationUpdateItem } from "../mutation/useMutationUpdateItem";
import { IItemWrite } from "./useClickNew";

export const useClickEdit = () => {
  const router = useRouter();
  const [updateItem] = useMutationUpdateItem();

  const onClickEdit = async (data: IItemWrite) => {
    console.log(data);
    try {
      const result = await updateItem({
        variables: {
          useditemId: String(router.query.useditemId),
          updateUseditemInput: {
            name: data.name,
            remarks: data.remarks,
            contents: data.contents,
            price: Number(data.price),
          },
        },
      });
      alert("수정이 등록되었습니다!");
      void router.push(`/Items/${result.data?.updateUseditem._id}`);
    } catch (error) {
      if (error instanceof Error) alert(error.message);
    }
  };
  return { onClickEdit };
};
