import { useState, useRef, Children } from "react";
import { createPortal } from "react-dom";
import { List, ListCheck } from "react-bootstrap-icons";
import Button from "../../UI/Button";
import Sidebar from "./Sidebar";
import Overlay from "../../UI/Overlay";
import { Link, useLocation } from "react-router-dom";
import useStore from "../../context/useStore";
import useIntersection from "../../UI/useIntersection";
import Navside from "./Navside";

function Navbar() {
  const [openSidebar, setOpenSidebar] = useState(false);
  const [showNavside, setShowNavside] = useState(false);
  const { user } = useStore();

  // sticky nav start
  const target = useRef(null);
  const isVisible = useIntersection(target, {
    root: null,
    threshold: 1,
    rootMargin: "0px",
  });
  // sticky nav end

  const location = useLocation();
  const path = location.pathname.split("/")[1];

  //add objects in nullpath for hiding object in paths
  const nullPath = ["login", "signup"];
  if (nullPath.includes(path)) return null;

  const openSidebarHandler = () => {
    setOpenSidebar(!openSidebar);
    document.getElementById("root").style.filter = "blur(3px)";
  };

  const commonClasses = `${
    path === "my-profile"
      ? "hidden"
      : "text-white py-2 flex gap-3 items-center px-4 transition-all duration-300 z-50 xsm:gap-5 md:flex-row md:px-16"
  }`;

  const stickyNav = `text-black sticky top-0 left-0 bg-white shadow-md opacity-95`;

  const navClasses = isVisible
    ? `${commonClasses}`
    : `${commonClasses} ${stickyNav}`;

  const navLinkClasses = `text-lg ${
    isVisible ? "text-white" : "text-black"
  } font-medium hover:font-semibold`;

  const targetDivClasses = ` ${
    path === "my-profile" ? "hidden" : "h-1 bg-transparent"
  }`;

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about-us" },
    { name: "Courses", path: "/all-courses" },
    { name: "Blogs", path: "/blog" },
  ];
  const usernameClasses = `text-xl ${isVisible ? "text-white" : "text-black"}`;
  return (
    <>
      <nav className={navClasses}>
        <Link to="/">
          <h2 className="text-3xl font-semibold">XcitEducation</h2>
        </Link>

        {/* navlinks start */}
        <ul className="hidden lg:flex items-center justify-center gap-8 w-[40%] mx-5">
          {Children.toArray(
            navLinks.map((link) => {
              return (
                <li>
                  <Link to={link.path} className={navLinkClasses}>
                    {link.name}
                  </Link>
                </li>
              );
            })
          )}
        </ul>
        {/* navlinks end */}

        <div className="hidden lg:flex items-center gap-2 ml-auto xsm:gap-6">
          {user == undefined || !user._id ? (
            <>
              <Link
                to="/login"
                className="link relative text-lg font-semibold xsm:text-base"
              >
                Login?
              </Link>
              <Link to="/signup">
                <Button isPrimary={true}>Get Started</Button>
              </Link>
            </>
          ) : (
            <Link
              to="/my-profile/dashboard"
              className="flex gap-3 items-center"
            >
              <span className={usernameClasses}>{user.name}</span>
              <img
                src={user.profilePicture}
                className="h-10 w-10 p-1 object-cover rounded-full"
              />
            </Link>
          )}
        </div>
        <div className="lg:hidden text-3xl ml-auto cursor-pointer">
          <ListCheck onClick={() => setShowNavside(true)} />
        </div>

        <Navside
          navLinks={navLinks}
          showNavside={showNavside}
          setShowNavside={setShowNavside}
        />

        {createPortal(
          <Sidebar
            openSidebar={openSidebar}
            user={user}
            setOpenSidebar={setOpenSidebar}
          />,
          document.getElementById("sidebar")
        )}

        {openSidebar &&
          createPortal(
            <Overlay clickHandler={openSidebarHandler} />,
            document.getElementById("overlay")
          )}
      </nav>
      <div className={targetDivClasses} ref={target}></div>
    </>
  );
}

export default Navbar;
