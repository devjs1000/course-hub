import { gql } from "@apollo/client";

export const createOrder = `
  mutation Mutation(
    $orderId: String!
    $paymentId: String!
    $razorpaySignature: String!
    $courseId: ID!
  ) {
    createOrder(
      orderId: $orderId
      paymentId: $paymentId
      razorpaySignature: $razorpaySignature
      courseId: $courseId
    ) {
      success
      message
    }
  }
`;
