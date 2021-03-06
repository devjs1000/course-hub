import { gql } from "@apollo/client";

export const signupMutation = gql`
  mutation CreateUser(
    $name: String!
    $password: String!
    $phone: String!
    $email: String!
  ) {
    createUser(name: $name, password: $password, phone: $phone, email: $email) {
      name
      id
      email
      token
      role
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
    adminUpdateUserRoleById(userId: $userId, role: $role) {
      id
      name
      role
      email
    }
  }
`;

export const forgetPasswordMutation = gql`
  mutation ForgetPassword($email: String!) {
    forgetPassword(email: $email)
  }
`;

export const updatePasswordMutation = gql`
  mutation UpdatePassword($password: String!) {
    updatePassword(password: $password)
  }
`;
