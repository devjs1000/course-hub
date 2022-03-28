import { gql } from "@apollo/client";

export const getUserById = gql`
query GetUserById($getUserByIdId: ID!) {
    getUserById(id: $getUserByIdId) {
      name
      id
      image
      email
      description
      password
      phone
      token
    }
  }
`;

export const getUserByEmail= gql`
query GetUserByEmail($email: String) {
    getUserByEmail(email: $email) {
      name
      id
      image
      email
      password
      description
      phone
      token
    }
  }
`;