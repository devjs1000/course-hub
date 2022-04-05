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

export const getMyCourses = gql`
  query GetMyCourses($userId: ID!) {
    getMyCourses(userId: $userId) {
      name
      id
      tagline
      tags
      category
      price
      image
      about
      teacherId
      subscribers
      noOfSubscribers
    }
  }
`;
