import { Outlet } from "react-router-dom";
import { Sidebar } from "./Sidebar";
export function Admin() {
  return (
    <div>
      <nav className="bg-white border-b-[1px] p-3">admin</nav>
      <div className="grid grid-cols-4">
        <div className="relative">
          <Sidebar />
        </div>
        <div className="bg-white flex-grow col-span-3">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
