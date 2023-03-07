import { useRouter } from "next/router";
import { useMutationBuying } from "../mutation/useMutationPickItem";

export const useClickBuying = () => {
  const router = useRouter();
  const [buying] = useMutationBuying();
  const onClickBuy = async () => {
    await buying({
      variables: {
        useritemId: String(router.query.useditemId),
      },
    });
    alert("상품을 구매하였습니다.");
  };

  return { onClickBuy };
};
