import React from "react";
import { useState, useEffect } from "react";
import useStore from "../../context/useStore";
import Button from "./Button";
function Settings() {
  return (
    <div className="p-8">
      {/*content container --cjreads665*/}
      <span className="text-2xl ">Dark Mode:</span>
     
      <Button />
    </div>
  );
}

export default Settings;
