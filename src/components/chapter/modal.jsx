import { X } from "react-bootstrap-icons";
export default ({ children, title, close }) => {
  
  return (
    <>
        <div className="fixed top-0 left-0  w-full h-[100vh]  bg-white z-[1000]">
          <div className="flex items-center justify-end mt-4 border-slate-100 ">
            <div className="w-full text-center text-2xl font-semibold text-slate-700">{title}</div>
            <X onClick={close} size={30} />
          </div>
          <div className="px-2 py-1">{children}</div>
        </div>
    </>
  );
};
