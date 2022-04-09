import { gql } from "@apollo/client";

export const myProjectsQuery=gql`
query Query{
    projects {
      chapterId
      courseId
      isCertified
      projectLink
      projectStatus
    }
  }`