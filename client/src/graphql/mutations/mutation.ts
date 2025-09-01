import { gql } from "@apollo/client";

export const ADD_USER = gql`
  mutation Mutation($name: String!, $email: String!) {
    addUser(name: $name, email: $email) {
      _id
      name
      email
    }
  }
`;
