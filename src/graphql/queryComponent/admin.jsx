import { gql } from "@apollo/client";

export const adminGetNoOfStudentsQuery = gql`
  query Query {
    adminGetNoOfStudents
  }
`;
export const adminGetNoOfTeachersQuery = gql`
  query Query {
    adminGetNoOfTeachers
  }
`;
export const adminGetNoOfCoursesQuery = gql`
  query Query {
    adminGetNoOfCourses
  }
`;
export const adminGetNoOfOrdersQuery = gql`
  query Query {
    adminGetNoOfOrders
  }
`;

export const adminGetNoOfProjectsQuery = gql`
  query Query {
    adminGetNoOfProjects
  }
`;
export const adminGetNoOfPedingRequestsQuery = gql`
  query Query {
    adminGetNoOfPedingRequests
  }
`;
export const adminGetNoOfCompletedRequestsQuery = gql`
  query Query {
    adminGetNoOfCompletedRequests
  }
`;
export const adminGetAllCountsQuery = gql`
  query Query {
    adminGetAllCounts {
      students
      teachers
      courses
      orders
      projects
      pendingRequests
      completedRequests
    }
  }
`;