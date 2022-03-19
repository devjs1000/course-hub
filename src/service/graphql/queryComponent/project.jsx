import { gql } from "@apollo/client";

export const myProjectsQuery=gql`
query Query($userId: ID!) {
    projects(userId: $userId) {
      chapterId
      courseId
      isCertified
      projectLink
      projectStatus
    }
  }`