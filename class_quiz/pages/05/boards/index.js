import { useMutation, gql } from "@apollo/client";
import { useRouter } from "next/router";
import { useState } from "react";

const CREATE_PRODUCT = gql`
  mutation cerateProduct(
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
export default function ProductPage() {
  const router = useRouter();

  const [seller, setSeller] = useState();
  const [name, setName] = useState();
  const [detail, setDetail] = useState();
  const [price, setPrice] = useState();

  const [createProduct] = useMutation(CREATE_PRODUCT);

  const onClickReq = async () => {
    try {
      const result = await createProduct({
        variables: {
          seller,
          createProductInput: {
            name,
            detail,
            price: Number(price),
          },
        },
      });
      console.log(result);

      router.push(`/05-1/boards-moved/${result.data.createProduct._id}`);
    } catch (error) {
      alert("error.message");
    }
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
      판매자:
      <input type="text" onChange={onChangeSeller} />
      상품명:
      <input type="text" onChange={onChangeName} />
      내용:
      <input type="text" onChange={onChangeDetail} />
      가격:
      <input type="text" onChange={onChangePrice} />
      <button onClick={onClickReq}>상품 등록</button>
    </div>
  );
}
