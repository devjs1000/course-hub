import { Children } from "react";
import { Link } from "react-router-dom";
export const Sidebar = () => {
  const menuItems = [
    {
      href: "/admin/access/dashboard",
      title: "dashboard",
    },
    {
      href: "/admin/access/courses",
      title: "courses",
    },

    {
      href: "/admin/access/teachers",
      title: "teachers",
    },
    {
      href: "/admin/access/students",
      title: "students",
    },
  ];
  return (
    <>
      <div className="w-full  bg-white sticky top-[3.4rem] h-screen">
        {Children.toArray(
          menuItems.map((a) => {
            return (
              <div className="flex items-center border-b-[1px] py-2 px-4">
                <Link to={a.href} className="text-gray-600 hover:text-gray-900">
                  {a.title}
                </Link>
              </div>
            );
          })
        )}
      </div>
    </>
  );
};
