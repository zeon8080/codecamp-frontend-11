import ProductMovedUI from "./ProductWriteMoved.presenter";
import { useRouter } from "next/router";
import { useQuery } from "@apollo/client";
import { FETCH_PRODUCT } from "./ProductWriteMoved.queries";

export default function ProductMoved() {
  const router = useRouter();

  const { data } = useQuery(FETCH_PRODUCT, {
    variables: { productId: router.query.number },
  });

  const onClickMove = () => {
    router.push(`/09/products/${router.query.number}/edit`);
  };

  // console.log(router);

  return (
    <div>
      <ProductMovedUI data={data} onClickMove={onClickMove} />
    </div>
  );
}
