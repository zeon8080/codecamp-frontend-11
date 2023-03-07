import { gql, useMutation } from "@apollo/client";
import {
  IMutation,
  IMutationToggleUseditemPickArgs,
} from "../../../../commons/types/generated/types";

const CREATE_PICK = gql`
  mutation toggleUseditemPick($useditemId: ID!) {
    toggleUseditemPick(useditemId: $useditemId)
  }
`;

export const useMutationPickItem = () => {
  const toggleUseditemPick = useMutation<
    Pick<IMutation, "toggleUseditemPick">,
    IMutationToggleUseditemPickArgs
  >(CREATE_PICK);
  return toggleUseditemPick;
};
