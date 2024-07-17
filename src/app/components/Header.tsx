import React from "react";
import { AiFillBell } from "react-icons/ai";
import { MdLightMode } from "react-icons/md";
import { MdOutlineDarkMode } from "react-icons/md";
const Header = () => {
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <a className="btn btn-ghost ">
          <span className="text-xl bg-amber-500 px-2 rounded">RARE</span>
          <span className="hidden md:inline text-sm ">movie</span>
        </a>
      </div>

      <div className="navbar-end">
        {/* darkmode switch */}
        <label className="swap swap-rotate">
          {/* this hidden checkbox controls the state */}
          <input
            type="checkbox"
            className="theme-controller"
            value="synthwave"
          />

          {/* sun icon */}
          <MdLightMode />

          {/* moon icon */}
          <MdOutlineDarkMode className="text-lg" />
        </label>

        <div className="indicator">
          <AiFillBell className="text-lg" />
          <span className="badge badge-xs badge-primary indicator-item">1</span>
        </div>

        <div className="avatar">
          <div className="ring-primary ring-offset-base-100 w-8 rounded-full ring ring-offset-2">
            <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
