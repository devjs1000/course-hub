import { gql } from "@apollo/client";

export const createCourseMutation = gql`
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
      id
    }
  }
`;

export const newCreateChapterMutation = gql`
  mutation CreateChapter(
    $courseId: ID!
    $video: String!
    $about: String!
    $project: String!
    $name: String!
  ) {
    createChapter(
      courseId: $courseId
      video: $video
      about: $about
      project: $project
      name: $name
    ) {
      video
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

export const adminDeleteCourseByIdMutation = gql`
  mutation AdminDeleteCourseById($courseId: ID!) {
    adminDeleteCourseById(courseId: $courseId)
  }
`;

export const updateDiscountMutation = gql`
  mutation UpdateDiscount(
    $courseId: ID!
    $discount: Float!
    $discountType: String!
  ) {
    updateDiscount(
      courseId: $courseId
      discount: $discount
      discountType: $discountType
    ) {
      id
      discount
    }
  }
`;

export const addCourseIntoWishlistMutation = gql`
  mutation AddCourseIntoWishlist($courseId: ID!) {
    addCourseIntoWishlist(courseId: $courseId)
  }
`;

export const romveCourseFromWishlistMutation = gql`
  mutation RomveCourseFromWishlist($courseId: ID!) {
    romveCourseFromWishlist(courseId: $courseId)
  }
`;

export const addBenefit = gql`

  mutation AddBeneft($courseId: ID!, $name: String!, $description: String!) {
    addBeneft(courseId: $courseId, name: $name, description: $description)
  }
`


export const updateBenefit = gql`
mutation UpdateBeneft($courseId: ID!, $benefitId: ID!, $name: String!, $description: String!) {
  updateBeneft(courseId: $courseId, benefitId: $benefitId, name: $name, description: $description)
}
`
export const deleteBenefit = gql`
mutation DeleteBeneft($courseId: ID!, $benefitId: ID!) {
  deleteBeneft(courseId: $courseId, benefitId: $benefitId)
}
`


