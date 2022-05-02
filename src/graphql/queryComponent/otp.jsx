import { gql } from "@apollo/client";

export const otpQuery = gql`
  query Query {
    checkOtp
  }
`;

export const checkOtpQuery = gql`
  query CheckOtp($otp: Int!, $email: String!) {
    checkOtp(otp: $otp, email: $email)
  }
`;
