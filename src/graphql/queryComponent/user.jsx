import { gql } from "@apollo/client";

export const getUserById = gql`
  query user {
    user {
      name
      id
      image
      email
      description
      phone
      token
      role
      github
      linkedIn
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
      description
      phone
      token
      role
    }
  }
`;

export const adminGetAllUsersQuery = gql`
  query adminGetAllUsers {
    adminGetAllUsers {
      id
      name
      email
      phone
      role
    }
  }
`;

export const adminGetAllStudentsQuery = gql`
  query AdminGetAllStudents {
    adminGetAllStudents {
      name
      id
      image
      email
      description
      phone
    }
  }
`;

export const adminGetAllTeachersQuery = gql`
  query AdminGetAllTeachers {
    adminGetAllTeachers {
      name
      id
      image
      email
      description
      phone
    }
  }
`;

export const isValidUserQuery = gql`
  query IsValidUser($email: String) {
    isValidUser(email: $email)
  }
`;

export const userNotifications = gql`
  query UsersNotifications {
    usersNotifications {
      title
      about
      targetType
      target
      id
    }
  }
`;
