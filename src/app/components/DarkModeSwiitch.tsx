import React from "react";
import { MdDarkMode } from "react-icons/md";
import { MdLightMode } from "react-icons/md";
const DarkModeSwiitch = () => {
  return (
    <div className="flex">
      <MdDarkMode className="icons" />
      <MdLightMode className="icons" />
    </div>
  );
};

export default DarkModeSwiitch;
