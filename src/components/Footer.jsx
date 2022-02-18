import React, { Children } from "react";
import {
  Envelope,
  Geo,
  Telephone,
} from "react-bootstrap-icons";
import { useLocation } from "react-router-dom";
import { footerStyles } from "../styles/styleObjects";
import {footerPrint} from '../bluePrint/footerPrint'
const Footer = () => {
  const location = useLocation();
  const path = location.pathname.split("/")[1];

  //add objects in nullpath for hiding object in paths
  const nullPath = ["login", "signup", "my-assignments"];
  if (nullPath.includes(path)) return null;


  return (
    <div className={footerStyles.mainDiv}>
      <div className={footerStyles.gridDiv}>
        <div>
          <h1 className={footerStyles.title}>{footerPrint.brandName}</h1>
          <p className={footerStyles.shortDes}>{footerPrint.description}</p>
        </div>

        {Children.toArray(
          footerPrint.lists.map((list) => {
            return (
              <div>
                {Children.toArray(
                  list.map((item) => {
                    return (
                      <h3 className={footerStyles.listItem}>{item.title}</h3>
                    );
                  })
                )}
              </div>
            );
          })
        )}

        <div>
          <h3 className={footerStyles.listHead}>Contact Us</h3>

          <div className={footerStyles.contactItem}>
            <div className={footerStyles.contactIcon}>
              <Telephone />
            </div>
            <div>
              <p className={footerStyles.contactMethod}>Phone Number</p>
              <p className={footerStyles.contactInfo}>+012(345) 78 93</p>
            </div>
          </div>

          <div className={footerStyles.contactItem}>
            <div className={footerStyles.contactIcon}>
              <Envelope />
            </div>
            <div>
              <p className={footerStyles.contactMethod}>Email Address</p>
              <p className={footerStyles.contactInfo}>support@gmail.com</p>
            </div>
          </div>

          <div className={footerStyles.contactItem}>
            <div className={footerStyles.contactIcon}>
              <Geo />
            </div>
            <div>
              <p className={footerStyles.contactMethod}>Locations</p>
              <p className={footerStyles.contactInfo}>59 Main Street, USA</p>
            </div>
          </div>
        </div>
      </div>

      <div className={footerStyles.bottomMain}>
        <p className={footerStyles.copyright}>
          © 2022 <span className={footerStyles.name}>XcitEducation</span> All
          Rights Reserved
        </p>

        <div className={footerStyles.socialMain}>
          {Children.toArray(
            footerPrint.socialIcons.map((icon) => {
              return icon;
            })
          )}
        </div>
      </div>
    </div>
  );
};

export default Footer;
