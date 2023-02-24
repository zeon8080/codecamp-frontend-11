import { useQuery, gql } from "@apollo/client";
import { useRouter } from "next/router";

const FETCH_PRODUCT = gql`
  query fetchProduct($productId: ID) {
    fetchProduct(productId: $productId) {
      seller
      name
      detail
      price
    }
  }
`;

export default function ProductMovedPage() {
  const router = useRouter();

  const { data } = useQuery(FETCH_PRODUCT, {
    variables: {
      productId: router.query.number,
    },
  });

  console.log(data);

  return (
    <div>
      <div>판매자: {data && data.fetchProduct?.seller}</div>
      <div>상품명: {data?.fetchProduct?.name}</div>
      <div>내용: {data?.fetchProduct?.detail}</div>
      <div>가격: {data ? data.fetchProduct?.price : "로딩중입니다"}</div>
    </div>
  );
}
