import React from "react";
import { FaFacebookF, FaGithub, FaInstagram } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="flex justify-between  flex-wrap px-4 md:px-10 py-4 rounded-tl-md rounded-tr-lg shadow-lg border-t  border-gray-200">
      <div className="text-xl font-bold text-orange-500">Rare-Movie</div>
      <div>
        <ul className="flex flex-col gap-2 ">
          <li>Home</li>
          <li>Movies</li>
          <li>TV Series</li>
          <li>People</li>
        </ul>
      </div>
      <div className="flex flex-col gap-2 ">
        <div className="rounded-full text-lg border border-gray-400 shadow-lg p-2">
          <FaFacebookF />
        </div>
        <div className="rounded-full text-lg border border-gray-400 shadow-lg p-2">
          <FaInstagram />
        </div>
        <div className="rounded-full text-lg border border-gray-400 shadow-lg p-2">
          <FaGithub />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
