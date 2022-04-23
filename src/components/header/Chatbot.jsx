import React from "react";
import { ChatDotsFill, ArrowLeft } from "react-bootstrap-icons";
import useStore from "../../context/useStore";

const Chatbot = () => {
  const { chatbotOn, setChatbotOn } = useStore();
  return (
    <>
      {!chatbotOn && (
        <span
          className="fixed bottom-8 right-16 text-primary-color-light text-7xl z-200"
          onClick={() => setChatbotOn(true)}
        >
          <ChatDotsFill />
        </span>
      )}
      {chatbotOn && (
        <div className="w-[340px] h-[440px] bg-white fixed bottom-0 right-4 lg:right-16 z-[200] shadow-lg shadow-gray-700">
          <div className="bg-primary-color-light text-white  p-4 font-bold flex">
            <ArrowLeft
              className="text-2xl mr-4 cursor-pointer  hover:text-gray-400"
              onClick={() => setChatbotOn(false)}
            />
            <h3>Agents are online...</h3>
            {/* message here */}
          </div>
          <div className="w-[340px] px-4 py-2 fixed bottom-0 bg-gray-100 border-t-4 flex">
            <input
              type="text"
              placeholder="Type a message..."
              className="bg-transparent outline-0 "
            />
            <button className="hidden"></button>
          </div>
        </div>
      )}
    </>
  );
};

export default Chatbot;
