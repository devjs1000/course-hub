import React from "react";
import { Envelope, Facebook, Geo, Google, Telephone, Twitter, Youtube } from "react-bootstrap-icons";
import { useLocation } from "react-router-dom";
import { footerStyles } from "../styles/styleObjects";

const Footer = () => {

  const location = useLocation()
  const path = location.pathname.split('/')[1];
  //add objects in nullpath for hiding object in paths
  const nullPath=['login', 'signup', 'my-assignments']
  if(nullPath.includes(path)) return null

  return (
    <div className={footerStyles.mainDiv}>
      <div className={footerStyles.gridDiv}>

      <div>
        <h1 className={footerStyles.title}>XcitEducation</h1>
        <p className={footerStyles.shortDes}>Sed ut perspiciatis unde omn iste natus error sit voluptatem</p>
      </div>

      <div>
        <h3 className={footerStyles.listHead}>Our Projects</h3>
        <h5 className={footerStyles.listItem}>Medical & Health</h5>
        <h5 className={footerStyles.listItem}>Educations</h5>
        <h5 className={footerStyles.listItem}>Technology</h5>
        <h5 className={footerStyles.listItem}>Web Development</h5>
        <h5 className={footerStyles.listItem}>Food & Clothes</h5>
      </div>

      <div>
        <h3 className={footerStyles.listHead}>Support</h3>
        <h5 className={footerStyles.listItem}>Privacy Policy</h5>
        <h5 className={footerStyles.listItem}>Conditions</h5>
        <h5 className={footerStyles.listItem}>Company</h5>
        <h5 className={footerStyles.listItem}>Faq & Terms</h5>
        <h5 className={footerStyles.listItem}>Contact Us</h5>
      </div>

      <div>
        <h3 className={footerStyles.listHead}>Contact Us</h3>

        <div className={footerStyles.contactItem}>
          <div className={footerStyles.contactIcon}><Telephone/></div>
          <div>
            <p className={footerStyles.contactMethod}>Phone Number</p>
            <p className={footerStyles.contactInfo}>+012(345) 78 93</p>
          </div>
        </div>

        <div className={footerStyles.contactItem}>
          <div className={footerStyles.contactIcon}><Envelope/></div>
          <div>
            <p className={footerStyles.contactMethod}>Email Address</p>
            <p className={footerStyles.contactInfo}>support@gmail.com</p>
          </div>
        </div>

        <div className={footerStyles.contactItem}>
          <div className={footerStyles.contactIcon}><Geo/></div>
          <div>
            <p className={footerStyles.contactMethod}>Locations</p>
            <p className={footerStyles.contactInfo}>59 Main Street, USA</p>
          </div>
        </div>

      </div>
      </div>

      <div className={footerStyles.bottomMain}>
        <p className={footerStyles.copyright}>© 2022 <span className={footerStyles.name}>XcitEducation</span> All Rights Reserved</p>

        <div className={footerStyles.socialMain}>
          <Facebook className={footerStyles.socialIcon}/>
          <Twitter className={footerStyles.socialIcon}/>
          <Youtube className={footerStyles.socialIcon}/>
          <Google className={footerStyles.socialIcon}/>
        </div>

      </div>

    </div>
  );
};

export default Footer;
