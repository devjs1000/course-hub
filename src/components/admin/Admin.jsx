import { useEffect } from "react";
import { Navigate, Outlet, useNavigate } from "react-router-dom";
import { Sidebar } from "./Sidebar";
import useStore from "../../context/useStore";
import PageNotFound from "./PageNotFound";

export function Admin() {
  const { user, userLoading, adminPanelAccess, setAdminPanelAccess } =
    useStore();
  const navigate = useNavigate();

  useEffect(() => {
    if (userLoading) return "";
    if (user?.role === "admin") setAdminPanelAccess(true);

    // if user is not logged in the it will be redirected to admin-login page
    if (JSON.stringify(user) === JSON.stringify({})) navigate("/admin-login");
  }, [user, userLoading]);

  if (userLoading) return "Loading";
  return (
    <div className="relative">
      <nav className="bg-white border-b-[2px] text-xl uppercase font-bold p-3">
        admin panel
      </nav>
      <div className="grid lg:grid-cols-5 grid-cols-4 ">
        <div className="relative">
          <Sidebar />
        </div>
        <div className="bg-white flex-grow col-span-3 lg:col-span-4">
          <Outlet />
        </div>
      </div>
      {!adminPanelAccess && <PageNotFound />}
    </div>
  );
}
