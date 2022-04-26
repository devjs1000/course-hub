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


export const adminGetAllStudentsQuery=gql`
query AdminGetAllStudents {
  adminGetAllStudents {
    name
    id
    image
    email
    password
    description
    phone
  }
}
`


export const adminGetAllTeachersQuery=gql`
query AdminGetAllTeachers {
  adminGetAllTeachers {
    name
    id
    image
    email
    password
    description
    phone
  }
}
`