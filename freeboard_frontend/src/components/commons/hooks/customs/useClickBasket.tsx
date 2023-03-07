import { IUseditem } from "../../../../commons/types/generated/types";

export const useClickBasket = () => {
  const onClickBasket = (basket: IUseditem) => () => {
    const baskets: IUseditem[] = JSON.parse(
      localStorage.getItem("baskets") ?? "[]"
    );
    const temp = baskets.filter((el) => el._id === basket._id);
    if (temp.length >= 1) {
      alert("이미 장바구니에 있습니다.");
      return;
    }
    baskets.push(basket);
    localStorage.setItem("baskets", JSON.stringify(baskets));
  };

  return { onClickBasket };
};
