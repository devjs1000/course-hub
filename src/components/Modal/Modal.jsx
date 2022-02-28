import React, { useState } from "react";
import { BsXLg } from "react-icons/bs";

const Modal = () => {
    const [showModal, setShowModal] = useState(false);
    return (
        <>
            <button
                className="bg-blue-200 text-black active:bg-blue-500 
                font-bold px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
                type="button"
                onClick={() => setShowModal(true)}
            >
                Fill Details
            </button>
            {showModal ? (
                <>
                    <div className="flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                        <div className="relative my-6 mx-auto w-[40%]">
                            <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                                <div className="flex items-center justify-between p-5 border-b border-solid border-gray-300 rounded-t ">
                                    <h3 className="text-3xl font-semibold text-slate-800">General Info</h3>
                                    <button
                                        className="bg-transparent border-0 text-black float-right"
                                        onClick={() => setShowModal(false)}
                                    >
                                        <span className="flex items-center justify-center text-black opacity-7 h-6 w-6 text-xl bg-slate-800 py-0 rounded-full hover:bg-red-500 transition">
                                            <BsXLg className="p-[2px] font-bold text-white" />
                                        </span>
                                    </button>
                                </div>
                                <div className="relative p-6 flex-auto">
                                    <form className="bg-gray-200 shadow-md rounded px-8 pt-6 pb-8 w-full">
                                        <label className="block text-black text-sm font-bold mb-1">
                                            First Name
                                        </label>
                                        <input className="shadow appearance-none border rounded w-full py-2 px-1 text-black my-2" />
                                        <label className="block text-black text-sm font-bold mb-1">
                                            Last Name
                                        </label>
                                        <input className="shadow appearance-none border rounded w-full py-2 px-1 text-black my-2" />
                                        <label className="block text-black text-sm font-bold mb-1">
                                            Address
                                        </label>
                                        <input className="shadow appearance-none border rounded w-full py-2 px-1 text-black my-2" />
                                        <label className="block text-black text-sm font-bold mb-1">
                                            City
                                        </label>
                                        <input className="shadow appearance-none border rounded w-full py-2 px-1 text-black my-2" />
                                    </form>
                                </div>
                                <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                                    <button
                                        className="text-white bg-red-500 active:bg-yellow-700 font-bold uppercase text-sm px-6 py-3 rounded shadow-md hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 hover:bg-red-600 transition"
                                        type="button"
                                        onClick={() => setShowModal(false)}
                                    >
                                        Close
                                    </button>
                                    <button
                                        className="text-white bg-green-500 active:bg-yellow-700 font-bold uppercase text-sm px-6 py-3 rounded shadow-md hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 hover:bg-green-600 transition"
                                        type="button"
                                        onClick={() => setShowModal(false)}
                                    >
                                        Submit
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            ) : null}
        </>
    );
};

export default Modal;