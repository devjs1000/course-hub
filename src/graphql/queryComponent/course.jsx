import { gql } from "@apollo/client";

export const allCoursesQuery = gql`
  query Courses {
    courses {
      name
      id
      tagline
      tags
      category
      price
      image
      about
      teacherId
      subscribers
      noOfSubscribers
    }
  }
`;

export const allPopularCoursesQuery = gql`
query {
  popularCourses{
      id
      name
      tagline
      about
      price
      image
      category
      tags
      teacherId
      subscribers
      noOfSubscribers
  }
}
`;


export const myCousesQuery = gql`
query myCourses($userId: String) {
  myCourses(userId: $userId) {
    name
    id
    tagline
    tags
    category
    price
    image
    about
    teacherId
    subscribers
    noOfSubscribers
  }
}
`;

export const getCourseByIdQuery = gql`
query CourseById($courseId: String) {
  courseById(courseId: $courseId) {
    name
    id
    tagline
    tags
    category
    price
    image
    about
    teacherId
    subscribers
    noOfSubscribers
  }
}
`;

export const getChaptersQuery = gql `
query Chapters($courseId: ID) {
  chapters(courseId: $courseId) {
    id
    teacherId
    name
    courseId
    video
    about
    project
  }
}
`;