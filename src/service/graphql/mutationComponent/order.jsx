import { gql } from "@apollo/client";

export const createOrderMutation = gql`
  mutation CreateOrder(
    $date: String!
    $razorpayPaymentId: String!
    $razorpayOrderId: String!
    $razorpaySignature: String!
    $courseId: ID!
    $userId: ID!
    $teacherId: ID!
  ) {
    createOrder(
      date: $date
      razorpay_payment_id: $razorpayPaymentId
      razorpay_order_id: $razorpayOrderId
      razorpay_signature: $razorpaySignature
      courseId: $courseId
      userId: $userId
      teacherId: $teacherId
    ) {
      date
    }
  }
`;
