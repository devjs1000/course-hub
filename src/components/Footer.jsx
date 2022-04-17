import React, { Children } from "react";
import { Envelope, Geo, Telephone } from "react-bootstrap-icons";
import { useLocation } from "react-router-dom";
import { footerStyles } from "../styles/styleObjects";
import { footerPrint } from "../bluePrint/footerPrint";
import logo from "../images/theLogo.jpeg";
import useStore from "../context/useStore";

const Footer = () => {
  const location = useLocation();
  const path = location.pathname.split("/")[1];

  //add objects in nullpath for hiding object in paths
  const nullPath = ["login", "signup", "my-assignments", "admin-login"];
  if (nullPath.includes(path)) return null;
  const { theme } = useStore();
  //removed border from mainDiv and extracted the styles from stylesObject to here
  const mainDiv = `bg-${theme ? "slate-800" : "white"} p-3 md:p-8 relative`;

  return (
    <div className={mainDiv}>
      <div className={footerStyles.gridDiv}>
        <div>
          <div className="flex">
            <img
              src={logo}
              className="h-[2rem] mx-2 rounded-full opacity-[90%] hover:animate-bounce"
            />
            <h1 className={footerStyles.title}>{footerPrint.brandName}</h1>
          </div>
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
              <p className={footerStyles.contactInfo}>{footerPrint.phone}</p>
            </div>
          </div>

          <div className={footerStyles.contactItem}>
            <div className={footerStyles.contactIcon}>
              <Envelope />
            </div>
            <div>
              <p className={footerStyles.contactMethod}>Email Address</p>
              <p className={footerStyles.contactInfo}>{footerPrint.email}</p>
            </div>
          </div>

          <div className={footerStyles.contactItem}>
            <div className={footerStyles.contactIcon}>
              <Geo />
            </div>
            <div>
              <p className={footerStyles.contactMethod}>Locations</p>
              <p className={footerStyles.contactInfo}>{footerPrint.address}</p>
            </div>
          </div>
        </div>
      </div>

      <div className={footerStyles.bottomMain}>
        <p className={footerStyles.copyright}>
          © {new Date().getFullYear()}{" "}
          <span className={footerStyles.name}>XcitEducation</span> All Rights
          Reserved
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
