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

export const createRefundRequest = gql`
mutation CreateRefundRequest($requestedUserId: ID!, $courseId: ID!, $amount: Int!) {
  createRefundRequest(requestedUserId: $requestedUserId, courseId: $courseId, amount: $amount) {
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