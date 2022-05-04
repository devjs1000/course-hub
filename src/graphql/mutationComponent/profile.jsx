import { gql } from "@apollo/client";

export const updateProfile = gql`
mutation UpdateProfile($name: String, $email: String, $image: String, $github: String, $linkedIn: String, $phone: String, $description: String) {
  updateProfile(name: $name, email: $email, image: $image, github: $github, linkedIn: $linkedIn, phone: $phone, description: $description) {
    name
    image
    email
    password
    description
    phone
    github
    linkedIn
  }
}
`