import React from "react";
import { ChatDotsFill, ArrowLeft } from "react-bootstrap-icons";
import useStore from "../../context/useStore";

const Chatbot = () => {
  const { chatbotOn, setChatbotOn } = useStore();
  const messages = [
    {
      self: false,
      msg: "hii",
    },
    {
      self: true,
      msg: "Hello",
    },
    {
      self: false,
      msg: "How are you??",
    },
    {
      self: true,
      msg: "I am good",
    },
    {
      self: true,
      msg: "What about you??",
    },
    {
      self: false,
      msg: "I am doing very well. Thankyou",
    },
    {
      self: false,
      msg: "How are your classes going on? If you have any problem feel free to share",
    },
    {
      self: true,
      msg: "No! classes are going on well",
    },
  ];

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
          <div className="h-[50px] bg-primary-color-light text-white font-bold flex items-center">
            <ArrowLeft
              className="text-2xl mx-4 cursor-pointer  hover:text-gray-400"
              onClick={() => setChatbotOn(false)}
            />
            <h3>Agents are online...</h3>
          </div>
          {/* container for messages */}
          <div className="w-[340px] h-[340px] p-4 overflow-scroll flex flex-col">
            {messages.map((message) => {
              if (message?.self)
                return (
                  <p className="max-w-[200px] bg-gray-100 px-2 py-1 my-1 rounded-md self-end">
                    {message?.msg}
                  </p>
                );
              else
                return (
                  <p className="max-w-[200px] bg-black text-gray-100 primary-color-light px-2 py-1 my-1 rounded-md self-start">
                    {message?.msg}
                  </p>
                );
            })}
          </div>
          <div className="w-[340px] h-[50px] px-4 fixed bottom-0 bg-gray-100 border-t-4 flex items-center">
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
