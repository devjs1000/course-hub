import { gql } from "@apollo/client";

export const userByEmailQuery = gql`
   query User($email: String) {
    user(email: $email) {
      name
      id
      phone
      description
      password
      image
      email
      token
    }
  }
`;
