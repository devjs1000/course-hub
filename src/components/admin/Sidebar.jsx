import { Children } from "react";
import { Link } from "react-router-dom";
import {
  Speedometer,
  PeopleFill,
  Journal,
  PersonLinesFill,
  BellFill,
  CardList
} from "react-bootstrap-icons";
export const Sidebar = () => {
  const menuItems = [
    {
      href: "/admin/access/dashboard",
      title: "dashboard",
      logo: <Speedometer />,
    },
    {
      href: "/admin/access/courses",
      title: "courses",
      logo: <Journal />,
    },

    {
      href: "/admin/access/teachers",
      title: "teachers",
      logo: <PersonLinesFill />,
    },
    {
      href: "/admin/access/students",
      title: "students",
      logo: <PeopleFill />,
    },
    {
      href: "/admin/access/send-notifications",
      title: "send notifications",
      logo: <BellFill />,
    },
    {
      href: "/admin/access/notifications",
      title: "All notifications",
      logo: <CardList />,
    },
  ];
  return (
    <>
      <div className="w-full  bg-white sticky top-[3.4rem] h-screen shadow-lg">
        {Children.toArray(
          menuItems.map((a) => {
            return (
              <div
                className="flex items-center  py-4
                 px-4 
              hover:bg-gray-200
              lg:text-xl md:text-xl"
              >
                {a.logo}
                <Link
                  to={a.href}
                  className="text-gray-600 hover:text-gray-900 ml-4"
                >
                  {a.title.slice(0, 1).toUpperCase() +
                    a.title.slice(1).toLowerCase()}
                </Link>
              </div>
            );
          })
        )}
      </div>
    </>
  );
};
