import { gql } from "@apollo/client";

export const createQuestionMutation = gql`
 mutation CreateQuestion($courseId: String!, $question: String!) {
  createQuestion(courseId: $courseId, question: $question) {
    id
    courseId
    userId
    question
  }
}

`;

export const createAnswerMutation = gql`
mutation CreateAnswer($questionId: ID!, $answer: String) {
  createAnswer(questionId: $questionId, answer: $answer) {
    userId
    answer
  }
}
`;
