import { gql } from "@apollo/client";

export const projectSubmitMutation = gql`
  mutation Mutation(
    $courseId: ID!
    $projectLink: String!
    $chapterId: ID!
  ) {
    submitProject(
      courseId: $courseId
      projectLink: $projectLink
      chapterId: $chapterId
    ) {
      projectLink
    }
  }
`;

export const submitMyProject = gql`
  mutation SubmitProject($chapterId: ID!, $courseId: ID!, $projectLink: String!) {
  submitProject(chapterId: $chapterId, courseId: $courseId, projectLink: $projectLink) {
    projectStatus
    projectLink
    id
  }
}
`


export const checkProjectMutation = gql`
  mutation CheckProject($projectId: ID!, $projectStatus: Boolean!) {
  checkProject(projectId: $projectId, projectStatus: $projectStatus)
}
`;
