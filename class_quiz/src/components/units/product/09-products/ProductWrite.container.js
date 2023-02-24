import { useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { useState } from "react";
import ProductUI from "./ProductWrite.presenter";

import { CREATE_PRODUCT, UPDATE_PRODUCT } from "./ProductWrite.queries";

export default function ProductWrite(props) {
  const router = useRouter();

  const [seller, setSeller] = useState();
  const [name, setName] = useState();
  const [detail, setDetail] = useState();
  const [price, setPrice] = useState();
  const [isActive, setIsActive] = useState(false);

  const [createProduct] = useMutation(CREATE_PRODUCT);
  const [updateProduct] = useMutation(UPDATE_PRODUCT);

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

      router.push(`/09/products/${result.data.createProduct._id}`);
    } catch (error) {
      alert(error.message);
    }
  };

  const onClickUpdate = async () => {
    const result = await updateProduct({
      variables: {
        productId: router.query.number,
        updateProductInput: {
          name,
          detail,
          price: Number(price),
        },
      },
    });

    router.push(`/09/products/${result.data.updateProduct._id}`);
    console.log(router);
  };

  const onChangeSeller = (event) => {
    setSeller(event.target.value);
    if (event.target.value && name && detail && price) {
      setIsActive(true);
    }
  };
  const onChangeName = (event) => {
    setName(event.target.value);
    if (seller && event.target.value && detail && price) {
      setIsActive(true);
    }
  };
  const onChangeDetail = (event) => {
    setDetail(event.target.value);
    if (seller && name && event.target.value && price) {
      setIsActive(true);
    }
  };
  const onChangePrice = (event) => {
    setPrice(event.target.value);
    if (seller && name && detail && event.target.value) {
      setIsActive(true);
    }
  };

  return (
    <div>
      <ProductUI
        clickReq={onClickReq}
        clickUpdate={onClickUpdate}
        changeSeller={onChangeSeller}
        changeName={onChangeName}
        changeDetail={onChangeDetail}
        changePrice={onChangePrice}
        isActive={isActive}
        isEdit={props.isEdit}
      />
    </div>
  );
}
