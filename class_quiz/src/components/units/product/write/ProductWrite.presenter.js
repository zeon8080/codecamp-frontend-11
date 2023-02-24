export default function ProductUI(props) {
  return (
    <div>
      판매자:
      <input type="text" onChange={props.changeSeller} />
      상품명:
      <input type="text" onChange={props.changeName} />
      내용:
      <input type="text" onChange={props.changeDetail} />
      가격:
      <input type="text" onChange={props.changePrice} />
      <button onClick={props.clickReq}>상품 등록</button>
    </div>
  );
}
