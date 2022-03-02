import { FaUserAlt } from 'react-icons/fa';
import { FaLock } from 'react-icons/fa';

const Modal = ({ status, closeBtnHandler }) => {
    return (
        <div
            className="bg-white rounded-lg shadow-lg outline outline-offset-0 outline-[#9d0000] w-[80%] max-w-[800px] mx-auto mt-[5rem] transition-all duration-500"
            style={{
                transform: status ? 'translateY(-15vh)' : 'translateY(-50vh)',
                opacity: status ? '1' : '0'
            }}
        >
            <div className="modal-header bg-[#9d0000] text-white p-[1rem] text-3xl">
                <p>Welcome To Our Site</p>
            </div>
            <div className="modal-content py-6 px-4">
                <div className="modal-body mb-4">
                    <div className="relative p-6 flex-auto">
                        <form className="bg-gray-200 shadow-md rounded px-8 pt-6 pb-8 w-full">
                            <label className="text-slate-800 text-base tracking-wide font-bold my-1 flex items-center justify-start">
                                <span><FaUserAlt className='inline' /></span>
                                <span className='pl-2'>Username</span>
                            </label>
                            <input
                                className="shadow appearance-none border rounded w-full py-2 px-1 text-black mb-4 outline-none hover:outline-[#9d0000] hover:outline-offset-0 transition-all"
                                type={"email"}
                            />
                            <label className="text-slate-800 text-base tracking-wide font-bold my-1 flex items-center justify-start">
                                <span><FaLock className='inline' /></span>
                                <span className='pl-2'>Password</span>
                            </label>
                            <input
                                className="shadow appearance-none border rounded w-full py-2 px-1 text-black mb-4 outline-none hover:outline-[#9d0000] hover:outline-offset-0 transition-all"
                                type={"password"}
                            />
                        </form>
                    </div>
                </div>
                <div className="flex items-center justify-end p-6 border-t-2 border-solid border-[#9d0000] rounded-b">
                    <button
                        className="text-white bg-[#9d0000] font-bold uppercase text-sm px-8 py-3 rounded shadow-md hover:shadow-lg hover:opacity-80 outline-none focus:outline-none mr-4 mb-1 transition"
                        type="button"
                        onClick={closeBtnHandler}
                    >
                        Submit
                    </button>
                    <button
                        className="text-[#9d0000] bg-transparent border border-[#9d0000] font-bold uppercase text-sm px-8 py-3 rounded shadow-md hover:shadow-lg hover:opacity-80 outline-none focus:outline-none mr-1 mb-1 transition"
                        type="button"
                        onClick={closeBtnHandler}
                    >
                        Close
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Modal;