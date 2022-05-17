import { gql } from "@apollo/client";

export const notifyStudentsMutation = gql`
  mutation notifyStudents($title: String!, $about: String!, $courseId: ID!) {
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
  mutation notifyStudent($title: String!, $about: String!, $id: ID!) {
    notifyStudent(title: $title, about: $about, target: $id) {
      title
      about
      targetType
      target
      id
    }
  }
`;
