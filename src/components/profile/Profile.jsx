import { useState, Children, useContext, useEffect } from "react";
import {
  Pen,
  Journal,
  JournalCode,
  Gear,
  Bell,
  Speedometer,
  Search,
  BoxArrowLeft,
  List,
  BookmarkHeart,
  Wallet2,
} from "react-bootstrap-icons";
import { Link, Outlet } from "react-router-dom";
import useStore from "../../context/useStore";
import useAuthHook from "../../hooks/useAuthHook";
import { profileDesign } from "../../styles/styleObjects";
import toast from "react-hot-toast";

const Profile = () => {
  const [openAside, setOpenAside] = useState(false);
  const [showNotificationCard, setShowNotificationCard] = useState(false);
  const { user, myCourses, setUser, theme, setTheme } = useStore();
  const [isTeacher, setIsTeacher] = useState(user.isInstructor);

  useEffect(() => {
    setIsTeacher(user.isInstructor);
  }, [user]);

  const { logout } = useAuthHook();
  const joining = new Date(Date.parse(user.createdAt)).toDateString();
  //added variables here - cjreads665
  const navBarClasses = `relative h-14 ${
    theme ? "bg-slate-800  text-white" : "bg-white text-gray-600"
  } flex items-center justify-between px-4 border-l lg:px-16`;
  const searchBarClasses = `border h-[80%] flex items-center w-[40%] rounded-md overflow-hidden text-black`;
  const containerClasses = `${
    theme ? "bg-slate-800 text-white" : "bg-white text-gray-600"
  } flex`;

  const toggleAsideHandler = () => {
    setOpenAside(!openAside);
  };

  // <<<<<<< cjreads665

  const asideClasses = `sticky top-0  shadow-xl h-screen ${
    openAside ? "px-4 py-2 w-[35vh]" : "w-0"
  }  'bg-white text-gray-600' transition-all duration-300 lg:w-[35vh] lg:px-4 lg:py-2`;
  // =======
  const notificationToggleHandler = () => {
    setShowNotificationCard((val) => !val);
  };

  const sidebarItems = [
    { name: "Dashboard", icon: <Speedometer />, path: "/my-profile/dashboard" },
    { name: "My Courses", icon: <Journal />, path: "/my-profile/courses" },
    {
      name: "My Wishlist",
      icon: <BookmarkHeart />,
      path: "/my-profile/wishlist",
    },
    {
      name: "Assignments",
      icon: <JournalCode />,
      path: "/my-profile/assignments",
    },
    {
      name: "Notifications",
      icon: <Bell />,
      path: "/my-profile/notifications",
    },
    { name: "Settings", icon: <Gear />, path: "/my-profile/settings" },
    { name: "My Refunds", icon: <Wallet2 />, path: "/my-profile/my-refunds" },
  ];
  {
    /*added conditional here - cjreads665*/
  }
  const notificationCardClasses = `absolute overflow-auto max-h-[10rem] right-[5rem] top-[4rem] w-[20rem] rounded-md shadow-xl bg-white 
   z-50 transition-all duration-300`;
  //bg-white flex
  return (
    <>
      {/*the right section with the real content*/}
      <div className={containerClasses}>
        <aside className={asideClasses}>
          <Link to="/">
            <h4 className="text-2xl font-semibold cursor-pointer">
              XcitEducation
            </h4>
          </Link>
          <ul className="mt-10 flex flex-col gap-12">
            {Children.toArray(
              sidebarItems.map((item) => {
                return (
                  <li className="flex items-center gap-3">
                    <span className="text-2xl">{item.icon}</span>
                    <Link to={item.path} className="text-xl">
                      {item.name}
                    </Link>
                  </li>
                );
              })
            )}
            <li className="flex items-center gap-3">
              <span className="text-2xl">
                <BoxArrowLeft />
              </span>
              <button
                onClick={() => {
                  logout();
                  toast.success("You have successfully logged out");
                }}
                className="text-xl"
              >
                Logout?
              </button>
            </li>
          </ul>
        </aside>

        <main className="w-full flex flex-col gap-x-6">
          {/*the navbar --cjreads665 */}
          <nav className={navBarClasses}>
            <List
              className="visible opacity-100 text-4xl cursor-pointer lg:hidden lg:opacity-0"
              onClick={toggleAsideHandler}
            />
            <div className={searchBarClasses}>
              <input
                type="search"
                className="flex-[0.9] h-full px-4 border-r bg-gray-50 hover:bg-white focus:bg-white focus:outline-none"
                placeholder="Search Here"
              />
              <Search className="flex-[0.1] text-2xl w-full px-4 font-semibold cursor-pointer" />
            </div>
            <div className="flex items-center gap-6">
              <Bell
                className="text-xl cursor-pointer"
                onClick={notificationToggleHandler}
              />
              <div
                className="h-10 w-10 rounded-full border cursor-pointer bg-cover bg-center"
                style={{ backgroundImage: `url(${user.image})` }}
              ></div>
            </div>

            <div className={notificationCardClasses}>
              </div>
          </nav>
          <div className="bg-white  lg:m-3 h-full   z-[1000]">
            <Outlet />
          </div>
        </main>
      </div>
      {/*  */}
    </>
  );
};

export default Profile;
