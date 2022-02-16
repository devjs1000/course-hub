import { useState } from "react";
import { createPortal } from "react-dom";
import logoPrimary from "../../images/logo-primary.png";
import { List } from "react-bootstrap-icons";
import Sidebar from "./Sidebar";
import { Link, useLocation } from "react-router-dom";
import useStore from "../../context/useStore";

function Navbar() {
  const [openSidebar, setOpenSidebar] = useState(false);
  const { user } = useStore();

  const location = useLocation();
  const path = location.pathname.split("/")[1];
  //add objects in nullpath for hiding object in paths
  const nullPath = ["login", "signup"];
  if (nullPath.includes(path)) return null;

  const openSidebarHandler = () => {
    setOpenSidebar(!openSidebar);
    document.getElementById("root").style.filter = "blur(3px)";
  };

  return (
    <nav className="flex gap-3 items-center  px-4 py-2 bg-white relative xsm:gap-5 md:flex-row md:px-16">
      <List
        className="w-8 cursor-pointer text-7xl"
        onClick={openSidebarHandler}
      ></List>

      <Link to="/">
        <img
          src={logoPrimary}
          alt="primary-logo-img"
          className="w-36 lg:w-48"
        />
      </Link>

      <div className="flex items-center gap-4 ml-auto xsm:gap-6">
        {!user._id ? (
          <>
            <Link
              to="/login"
              className="link relative text-sm text-primary-color-dark font-semibold xsm:text-base"
            >
              Login?
            </Link>
            <Link to="/signup">
              <button className="bg-red-700 text-white mx-2 px-2 py-1 rounded sm:px-4 sm:py-2">
                signup
              </button>
            </Link>
          </>
        ) : (
          <div>
            <span className="text-red-800 text-xl">{user.name}</span>
          </div>
        )}

        {/* <List
					className="w-8 cursor-pointer ml-4 text-7xl"
					onClick={openSidebarHandler}
				></List> */}
      </div>
      {createPortal(
        <Sidebar
          openSidebar={openSidebar}
          user={user}
          setOpenSidebar={setOpenSidebar}
        />,
        document.getElementById("sidebar")
      )}
    </nav>
  );
}

export default Navbar;
