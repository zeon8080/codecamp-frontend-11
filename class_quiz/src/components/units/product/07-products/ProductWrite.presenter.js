import { SubmitBtn } from "./ProductWrite.styles";

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
      <SubmitBtn onClick={props.clickReq} isActive={props.isActive}>
        상품 등록
      </SubmitBtn>
    </div>
  );
}
