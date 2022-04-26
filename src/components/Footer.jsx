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
const { theme } = useStore();

  //add objects in nullpath for hiding object in paths
  const nullPath = ["login", "signup", "my-assignments", "admin-login"];
  if (nullPath.includes(path)) return null;
  
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
        <div className="flex space-between w-full">
          {Children.toArray(
            footerPrint.lists.map((a) => {
              return (
                <a
                  href={a.link}
                  className="text-md block w-full text-center font-[400] hover:font-[600] "
                >
                  {a.title}
                </a>
              );
            })
          )}
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
