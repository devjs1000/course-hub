import { Outlet } from "react-router-dom";
import { Sidebar } from "./Sidebar";
export function Admin() {
  return (
    <div>
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
    </div>
  );
}
