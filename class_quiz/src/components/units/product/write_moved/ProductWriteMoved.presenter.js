export default function ProductMovedUI(props) {
  return (
    <div>
      <div>판매자: {props.data?.fetchProduct?.seller}</div>
      <div>상품명: {props.data?.fetchProduct?.name}</div>
      <div>내용: {props.data?.fetchProduct?.detail}</div>
      <div>가격: {props.data?.fetchProduct?.price}</div>
    </div>
  );
}
