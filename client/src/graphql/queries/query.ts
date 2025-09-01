import { gql } from "@apollo/client";

export const getUsers = gql`
  query GetUsers {
    users {
      name
    }
  }
`;
