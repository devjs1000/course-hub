import { useEffect } from "react";
import { Navigate, Outlet, useNavigate } from "react-router-dom";
import { Sidebar } from "./Sidebar";
import useStore from "../../context/useStore";
import PageNotFound from "./PageNotFound";
import { AdminLogin } from "./AdminLogin";
export function Admin() {
  const { user, userLoading } = useStore();
  const navigate = useNavigate();

  useEffect(() => {
    if (user.role !== "admin") {
      navigate("/admin-login");
    }
  }, []);

  return (
    <div className="relative">
      {Boolean(user.role == "admin") ? (
        <div>
          <nav className="bg-white border-b-[2px] text-xl uppercase font-bold p-3">
            admin panel
          </nav>
          <div className="grid sm:grid-cols-5 grid-cols-4 ">
            <div className="relative col-span-0 sm:col-span-1">
              <Sidebar />
            </div>
            <div className="bg-white flex-grow col-span-4 ">
              <Outlet />
            </div>
          </div>
        </div>
      ) : (
        <PageNotFound />
      )}
    </div>
  );
}
