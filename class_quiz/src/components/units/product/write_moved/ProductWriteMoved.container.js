import ProductMovedUI from "./ProductWriteMoved.presenter";
import { useRouter } from "next/router";
import { useQuery } from "@apollo/client";
import { FETCH_PRODUCT } from "./ProductWriteMoved.queries";

export default function ProductMoved() {
  const router = useRouter();

  const { data } = useQuery(FETCH_PRODUCT, {
    variables: { productId: router.query.number },
  });

  console.log(data);

  return <ProductMovedUI data={data} />;
}
