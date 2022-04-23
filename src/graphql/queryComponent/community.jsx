import { gql } from "@apollo/client";

export const allQuestionsQuery = gql`
 query Questions {
  questions {
    id
    courseId
    userId
    question
  }
}
`;


export const getAnswerQuery = gql`
  query Answer($questionId: ID!) {
  answer(questionId: $questionId) {
    answer
    userId
  }
}
`