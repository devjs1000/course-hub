import React from "react";
import { Link } from "react-router-dom";

const NavTabs = ({ id }) => {
  const activeTab = window.location.pathname.split("/")[1];
  const activeStyle = `border-b-4 border-red-500`;
  const linkStyle = `px-4 py-4 font-bold text-md`;
  return (
    <div>
      <nav className="flex justify-center items-center gap-12 bg-gray-200 mb-8 text-[18px]">
        <Link to={`/create-chapter/${id}`}>
          <h1
            className={`${linkStyle} ${
              activeTab === "create-chapter" ? activeStyle : ""
            }`}
          >
            New Chapter
          </h1>
        </Link>
        <Link to={`/previous-chapter/${id}`}>
          <h1
            className={`${linkStyle} ${
              activeTab === "previous-chapter" ? activeStyle : ""
            } `}
          >
            Previous Chapters
          </h1>
        </Link>
        <Link to={`/update-discount/${id}`}>
          <h1
            className={`${linkStyle} ${
              activeTab === "update-discount" ? activeStyle : ""
            } `}
          >
            Update Discount
          </h1>
        </Link>

        <Link to={`/students-enrolled-course/${id}`}>
          <h1
            className={`${linkStyle} ${
              activeTab === "students-enrolled-course" ? activeStyle : ""
            } `}
          >
            Students Enrolled
          </h1>
        </Link>
        <Link to={`/send-notification-students/${id}`}>
          <h1
            className={`${linkStyle} ${
              activeTab === "send-notification-students" ? activeStyle : ""
            } `}
          >
            Send Notification
          </h1>
        </Link>
        <Link to={`/benefits/${id}`}>
          <h1
            className={`${linkStyle} ${
              activeTab === "benefits" ? activeStyle : ""
            } `}
          >
            Benefits
          </h1>
        </Link>
      </nav>
    </div>
  );
};

export default NavTabs;
