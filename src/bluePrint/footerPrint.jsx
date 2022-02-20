import { Facebook, Twitter, Youtube, Google } from "react-bootstrap-icons";
import { footerStyles } from "../styles/styleObjects";


export const footerPrint = {
    brandName: "XcitEducation",
    description: "Building a strong foundation, across the nation at XcitEducation!",
    lists: [
      [
        { title: "Our Projects" },
        { title: "Medical & Health" },
        { title: "Our Projects" },
        { title: "Medical & Health" },
        { title: "Our Projects" },
        { title: "Medical & Health" },
      ],
      [
        { title: "Our Projects" },
        { title: "Medical & Health" },
        { title: "Our Projects" },
        { title: "Medical & Health" },
        { title: "Our Projects" },
        { title: "Medical & Health" },
      ],
    ],

    socialIcons: [
      <Facebook className={footerStyles.socialIcon} />,
      <Twitter className={footerStyles.socialIcon} />,
      <Youtube className={footerStyles.socialIcon} />,
      <Google className={footerStyles.socialIcon} />,
    ],
  };
