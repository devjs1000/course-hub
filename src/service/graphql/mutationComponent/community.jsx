import { gql } from "@apollo/client";

export const createQuestionMutation = gql`
  mutation CreateQuestion(
    $courseId: String!
    $userId: String!
    $question: String!
  ) {
    createQuestion(courseId: $courseId, userId: $userId, question: $question) {
      question
    }
  }
`;

export const createAnswerMutation = gql`
  mutation CreateQuestion($userId: String!, $questionId: ID!, $answer: String) {
    createAnswer(userId: $userId, questionId: $questionId, answer: $answer) {
      answer
    }
  }
`;
