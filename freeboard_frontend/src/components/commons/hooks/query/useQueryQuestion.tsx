import { gql } from "@apollo/client";

export const FETCH_QUESTIONS = gql`
  query fetchUseditemQuestions($useditemId: ID!, $page: Int) {
    fetchUseditemQuestions(useditemId: $useditemId, page: $page) {
      _id
      contents
      createdAt
      #   user {
      #     picture
      #     name
      #   }
    }
  }
`;
