import { useMutation, gql } from "@apollo/client";
import { useState } from "react";

const CREATE_PRODUCT = gql`
  mutation createMyProduct(
    $seller: String
    $createProductInput: CreateProductInput!
  ) {
    createProduct(seller: $seller, createProductInput: $createProductInput) {
      _id
      number
      message
    }
  }
`;

export default function GraphqlProduct() {
  const [name, setName] = useState();
  const [detail, setDetail] = useState();
  const [price, setPrice] = useState();
  const [seller, setSeller] = useState();

  const [createProduct] = useMutation(CREATE_PRODUCT);

  const onClickReq = async () => {
    const result = await createProduct({
      variables: {
        seller: seller,
        createProductInput: {
          name: name,
          detail: detail,
          price: Number(price),
        },
      },
    });
    console.log(result);
  };

  const onChangeSeller = (event) => {
    setSeller(event.target.value);
  };
  const onChangeName = (event) => {
    setName(event.target.value);
  };
  const onChangeDetail = (event) => {
    setDetail(event.target.value);
  };
  const onChangePrice = (event) => {
    setPrice(event.target.value);
  };

  return (
    <div>
      셀러:
      <input type="text" onChange={onChangeSeller} />
      품명:
      <input type="text" onChange={onChangeName} />
      상세:
      <input type="text" onChange={onChangeDetail} />
      가격:
      <input type="text" onChange={onChangePrice} />
      <button onClick={onClickReq}>GRAPHQL-API 요청하기</button>
    </div>
  );
}
