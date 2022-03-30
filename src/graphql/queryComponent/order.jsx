import { gql } from "@apollo/client";

export const userOrdersQuery = gql`
  query Questions($userId: ID!) {
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

export const getOrderId = `
  query GetOrderId($courseId: ID!) {
    getOrderId(courseId: $courseId) {
      receipt
      id
    }
  }
`;

