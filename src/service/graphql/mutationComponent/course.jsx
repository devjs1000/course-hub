import { gql } from "@apollo/client";

export const createProjectMutation = gql`
  mutation CreateCourse(
    $tagline: String!
    $tags: [String]!
    $category: String!
    $about: String!
    $price: Int!
    $image: String!
    $teacherId: ID!
    $name: String
  ) {
    createCourse(
      tagline: $tagline
      tags: $tags
      category: $category
      about: $about
      price: $price
      image: $image
      teacherId: $teacherId
      name: $name
    ) {
      name
    }
  }
`;

export const createChapterMutation = gql`
  mutation CreateChapter(
    $teacherId: ID!
    $courseId: ID!
    $name: String!
    $video: String!
    $about: String!
    $project: String!
  ) {
    createChapter(
      teacherId: $teacherId
      courseId: $courseId
      name: $name
      video: $video
      about: $about
      project: $project
    ) {
      video
    }
  }
`;
