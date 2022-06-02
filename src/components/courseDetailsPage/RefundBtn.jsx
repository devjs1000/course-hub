import { Button, Typography } from "@mui/material";
import React, { useState } from "react";
import Modal from "react-modal";

const RefundBtn = () => {
  let [isOpen, setIsOpen] = useState(false);
  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      width: "90%",
      height: "60%",
    },
  };
  let handleSubmit = (e)=>{
    e.preventDefault()
    alert('submitted')
  }
  return (
    <div>
      <button
        className="bg-[#e44474] px-2.5 py-3 rounded-lg mt-4 font-[700] tracking-wider text-white text-center w-full lg:w-[10rem]"
        onClick={() => setIsOpen(true)}
      >
        Refund
      </button>
      <Modal isOpen={isOpen} style={customStyles} contentLabel="Example Modal">
        <form
          className="flex flex-col justify-around h-full"
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <Typography variant="h6" component="h2">
            Are you sure you want to opt-out of this course? You still have 15
            days before you can initial a refund.
          </Typography>
          <div className="flex justify-around">
            <Button variant="contained" type="submit" onClick={(e)=>handleSubmit(e)}>
              Yes I want a refund
            </Button>
            <Button variant="text" onClick={() => setIsOpen(false)}>
              Cancel
            </Button>
          </div>
        </form>
      </Modal>
    </div>
  );
};

export default RefundBtn;
