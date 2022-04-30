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


  export const GetAllProjectsByChapterId=gql`
query GetAllProjectsByChapterId($chapterId: ID!) {
  getAllProjectsByChapterId(chapterId: $chapterId) {
    id
    userId
    courseId
    chapterId
    projectLink
    projectStatus
  }
}`

export const getAllProjectsByCourseId = gql`
query GetAllProjects($courseId: ID!) {
  getAllProjectsByCourseId(courseId: $courseId) {
    id
    userId
    courseId
    chapterId
    isCertified
    projectLink
    projectStatus
  }
}
`