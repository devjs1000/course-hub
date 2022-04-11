import { gql } from "@apollo/client";

export const getUserById = gql`
  query user {
    user {
      name
      id
      image
      email
      description
      password
      phone
      token
      role
    }
  }
`;

export const getUserByEmail = gql`
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
      role
    }
  }
`;

export const allUsersQuery = gql`
  query users {
    users {
      id
      name
      email
      phone
      role
    }
  }
`;
