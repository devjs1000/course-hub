import { gql } from "@apollo/client";

export const signupMutation = gql`
  mutation CreateUser(
    $name: String!
    $email: String!
    $password: String!
    $description: String!
    $phone: String!
    $image: String!
  ) {
    createUser(
      name: $name
      email: $email
      password: $password
      description: $description
      phone: $phone
      image: $image
    ) {
      name
      id
      image
      email
      description
      phone
      token
    }
  }
`;

export const loginMutation = gql`
  mutation CreateLogin($email: String!, $password: String!) {
    createLogin(email: $email, password: $password) {
      token
      userData {
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
  }
`;

export const adminDeleteUserByIdMutation = gql`
  mutation AdminDeleteUserById($userId: ID!) {
    adminDeleteUserById(userId: $userId)
  }
`;

export const adminUpdateUserRoleByIdMutation = gql`
  mutation AdminUpdateUserRoleById($userId: ID!, $role: String!) {
    adminUpdateUserRoleById(userId: $userId, role: $role)
  }
`;
