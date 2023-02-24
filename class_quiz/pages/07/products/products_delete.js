import { useMutation, useQuery, gql } from "@apollo/client";

const FETCH_PRODUCTS = gql`
  query {
    fetchProducts {
      _id
      seller
      name
      price
    }
  }
`;

const DELETE_PRODUCT = gql`
  mutation deleteProduct($productId: ID) {
    deleteProduct(productId: $productId) {
      _id
      message
    }
  }
`;

export default function ProductsWriteDelete() {
  const { data } = useQuery(FETCH_PRODUCTS);

  const [deleteProduct] = useMutation(DELETE_PRODUCT);

  const onClickDelete = (e) => {
    deleteProduct({
      variables: {
        productId: e.target.id,
      },
      refetchQueries: [{ query: FETCH_PRODUCTS }],
    });
  };

  return (
    <div>
      {data?.fetchProducts.map((el) => (
        <div key={el._id}>
          <span>
            <input type="checkbox"></input>
          </span>
          <span>{el.seller}</span>
          <span>{el.name}</span>
          <span>{el.price}</span>
          <span>
            <button id={el._id} onClick={onClickDelete}>
              DELETE
            </button>
          </span>
        </div>
      ))}
    </div>
  );
}
