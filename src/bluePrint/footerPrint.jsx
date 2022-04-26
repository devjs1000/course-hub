import { Facebook, Twitter, Youtube, Google } from "react-bootstrap-icons";
import { footerStyles } from "../styles/styleObjects";

export const footerPrint = {
  brandName: "XcitEducation",
  description:
    "Building at XcitEducation is a collaborative effort of students community. We are a community of students, educators, and researchers who are passionate about teaching and learning.",
  lists: [
    { title: "About Us", link: "https://www.xcitedu.com/about" },
    {
      title: "Privacy Policy",
      link: "https://www.xcitedu.com/privacy-policy",
    },
    {
      title: "Terms & Conditions",
      link: "https://www.xcitedu.com/terms-and-conditions",
    },

    { title: "Refund Policy", link: "https://www.xcitedu.com/refund-policy" },
    {
      title: "Equal Opportunity",
      link: "https://www.xcitedu.com/equal-opportunity",
    },
    { title: "contact@xcitedu.com", link: "mailto:contact@xcitedu.com" },
  ],

  socialIcons: [
    <Facebook className={footerStyles.socialIcon} />,
    <Twitter className={footerStyles.socialIcon} />,
    <Youtube className={footerStyles.socialIcon} />,
    <Google className={footerStyles.socialIcon} />,
  ],
  address: "office address 010",
  phone: "0100100100",
  email: "0101@0101.com",
};
