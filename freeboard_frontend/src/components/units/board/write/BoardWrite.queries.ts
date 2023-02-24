import { gql } from "@apollo/client";

export const CREATE_BOARD = gql`
  mutation createBoard($createBoardInput: CreateBoardInput!) {
    createBoard(createBoardInput: $createBoardInput) {
      _id
    }
  }
`;

export const UPDATE_BOARD = gql`
  mutation updateBoard(
    $password: String
    $boardId: ID!
    $updateBoardInput: UpdateBoardInput!
  ) {
    updateBoard(
      password: $password
      boardId: $boardId
      updateBoardInput: $updateBoardInput
    ) {
      _id
    }
  }
`;
