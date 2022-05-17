import { gql } from "@apollo/client";

export const notifyStudentsMutation = gql`
  mutation notifyStudents(
    $title: String!
    $about: String!
    $courseId: String!
  ) {
    notifyStudents(title: $title, about: $about, courseId: $courseId) {
      title
      about
      targetType
      target
      id
    }
  }
`;

export const notifySpecificStudentMutation = gql`
  mutation notifyStudent($title: String!, $about: String!, $target: String!) {
    notifyStudent(title: $title, about: $about, target: $target) {
      title
      about
      targetType
      target
      id
    }
  }
`;
