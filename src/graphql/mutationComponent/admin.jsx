import { gql } from "@apollo/client";

export const sendStudentNotificationsMutation = gql`
  mutation createUsersNotification(
    $title: String!
    $about: String!
    $role: String!
  ) {
    createUsersNotification(title: $title, about: $about, role: $role){
        title
        about
        targetType
        target
        id
    }
  }
`;
export const sendTeacherNotificationsMutation = gql`
mutation createUsersNotification(
    $title: String!
    $about: String!
    $role: String!
  ) {
    createTeachersNotification(title: $title, about: $about, role: $role){
        title
        about
        targetType
        target
        id
    }
  }
`;
export const allNotificationsQuery = gql`
query allNotifications{
  allNotifications{
    title
    about
    targetType
    target
    id
  }
}
`