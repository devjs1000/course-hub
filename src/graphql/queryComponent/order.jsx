import { gql } from "@apollo/client";

export const userOrdersQuery = gql`
query GetUserOrders($userId: ID!) {
  getUserOrders(userId: $userId) {
    id
    date
    courseId
    userId
  }
}
`;

export const teacherOrdersQuery = gql`
  query GetTeacherOrders($teacherId: ID!) {
    getTeacherOrders(teacherId: $teacherId) {
      id
      date
      courseId
      userId
    }
  }
`;
