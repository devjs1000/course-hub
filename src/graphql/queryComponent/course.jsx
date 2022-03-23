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
