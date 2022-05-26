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
      discount
    }
  }
`;

export const allPopularCoursesQuery = gql`
  query {
    popularCourses {
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
      discount
    }
  }
`;

export const myCousesQuery = gql`
  query myCourses {
    myCourses {
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
      discount
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
      discount
    }
  }
`;

export const getChaptersQuery = gql`
query Courses($courseId: ID) {
  chapters(courseId: $courseId) {
    id
    teacherId
    courseId
    name
    video
    about
    project
  }
}
`;

export const getMyWishlistsQuery = gql`
  query getMyWishlists {
    getMyWishlists
  }
`;

export const getBenefits = gql`
  query ExampleQuery($courseId: ID!) {
    getFullCourseDetails(courseId: $courseId) {
      courseBenefits {
        benefitId
        name
        description
      }
    }
  }
`;

export const getCourseDetails = gql`
  query CourseDetails($courseId: ID!) {
    getFullCourseDetails(courseId: $courseId) {
      courseDetails {
        name
        id
        tagline
        tags
        category
        price
        discount
        discountType
        gst
        netDiscount
        netGst
        netPrize
        image
        about
        teacherId
        subscribers
        noOfSubscribers
      }
    }
  }
`;

export const getTeacherDetails = gql`
  query GetFullCourseDetails($courseId: ID!) {
    getFullCourseDetails(courseId: $courseId) {
      teacherDetails {
        name
        id
        image
        email
        description
        phone
        token
        role
        wishlist
        github
        linkedIn
      }
    }
  }
`;

export const enrolledStudentsQuery = gql`
  query EnrolledStudents($courseId: String!) {
    enrolledStudents(courseId: $courseId) {
      id
      name
      email
    }
  }
`;
