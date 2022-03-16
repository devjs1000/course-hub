import { gql } from "@apollo/client";

export const allQuestionsQuery = gql`
  query Questions {
    questions {
      courseId
      question
      id
      userId
    }
  }
`;
