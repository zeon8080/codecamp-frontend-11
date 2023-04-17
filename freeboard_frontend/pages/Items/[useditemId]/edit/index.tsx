import { gql, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import {
  IQuery,
  IQueryFetchUseditemArgs,
} from "../../../../src/commons/types/generated/types";
import ItemWrite from "../../../../src/components/units/usedItem/write/ItemWrite.index";

const FETCH_ITEM = gql`
  query fetchUseditem($useditemId: ID!) {
    fetchUseditem(useditemId: $useditemId) {
      _id
      name
      remarks
      contents
      price
      # images
      # pickedCount
      # seller
      # buyer
      # createdAt
      # useditemAddress {
      #   zipcode
      #   address
      #   addressDetail
      # }
    }
  }
`;
interface IItemWrite {
  name: string;
  remarks: string;
  contents: string;
  price: number;
  fileUrls: string[];
  isEdit: boolean;
}

export default function ItemEditPage() {
  const router = useRouter();

  const { data } = useQuery<
    Pick<IQuery, "fetchUseditem">,
    IQueryFetchUseditemArgs
  >(FETCH_ITEM, {
    variables: {
      useditemId: String(router.query.useditemId),
    },
  });
  console.log(data);
  return <ItemWrite isEdit={true} data={data} />;
}
