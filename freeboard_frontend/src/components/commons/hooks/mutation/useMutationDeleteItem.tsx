import { gql, useMutation } from "@apollo/client";
import {
  IMutation,
  IMutationDeleteUseditemArgs,
} from "../../../../commons/types/generated/types";

const DELETE_ITEM = gql`
  mutation ($useditemId: ID!) {
    deleteUseditem(useditemId: $useditemId)
  }
`;

export const useMutationDeleteItem = () => {
  const deleteItem = useMutation<
    Pick<IMutation, "deleteUseditem">,
    IMutationDeleteUseditemArgs
  >(DELETE_ITEM);

  return deleteItem;
};
