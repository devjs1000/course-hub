import { gql } from "@apollo/client";

export const otpQuery = gql`
  query Query($userId: ID!) {
    checkOtp(userId: $userId)
  }
`;
