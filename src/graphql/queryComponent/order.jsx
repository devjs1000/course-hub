import { gql } from "@apollo/client";

export const userOrdersQuery = gql`
  query Questions {
    getUserOrders {
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

export const getOrderId = gql`
  query GetOrderId($courseId: ID!) {
    getOrderId(courseId: $courseId) {
      receipt
      id
    }
  }
`;

export const getMyCourses = gql`
  query GetMyCourses {
    getMyCourses {
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
