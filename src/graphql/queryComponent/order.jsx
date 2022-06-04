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

export const getOrderId = `
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

export const getMyRefunds = gql`
query MyRefunds {
  myRefunds {
    id
    requestedUserId
    courseId
    approverUserId
    amount
    requestedDate
    approvedDate
    razorpay_payment_id
    razorpay_signature
    status
  }
}
`
