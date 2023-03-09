import { gql, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import {
  IQuery,
  IQueryFetchUseditemArgs,
} from "../../../../commons/types/generated/types";

const FETCH_ITEM = gql`
  query fetchUseditem($useditemId: ID!) {
    fetchUseditem(useditemId: $useditemId) {
      _id
      name
      remarks
      contents
      price
      createdAt
      seller {
        name
      }
      images
      pickedCount
      useditemAddress {
        address
      }
    }
  }
`;

export const useQueryItem = () => {
  const router = useRouter();
  const data = useQuery<Pick<IQuery, "fetchUseditem">, IQueryFetchUseditemArgs>(
    FETCH_ITEM,
    {
      variables: {
        useditemId: String(router.query.useditemId),
      },
    }
  );
  return data;
};
