"use client";

import React from "react";
import { FaFacebookF, FaGithub, FaInstagram } from "react-icons/fa6";
import { navLinks } from "./Header";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="flex flex-col justify-center items-center gap-4 bg-gradient-to-br from-purple-100 to-purple-400 rounded-se-lg py-10">
      <div>
        <h1 className="text-4xl font-bold  text-transparent bg-clip-text bg-gradient-to-br from-purple-400 to-pink-400">
          RARE
        </h1>
      </div>
      <div className="flex items-center gap-1 justify-center">
        {navLinks.map((l, i) => (
          <Link
            key={i}
            href={l.link}
            className="text-lg font-semibold px-4 py-0.5  bg-pink-400 rounded-full"
          >
            {l.name}
          </Link>
        ))}
      </div>
      <div className="flex items-center justify-center gap-4 ">
        <div className="rounded-full text-2xl cursor-pointer bg-gray-100 hover:bg-pink-400  p-1.5">
          <FaFacebookF />
        </div>
        <div className="rounded-full text-2xl cursor-pointer bg-gray-100 hover:bg-pink-400  p-1.5">
          <FaInstagram />
        </div>
        <div className="rounded-full text-2xl cursor-pointer bg-gray-100 hover:bg-pink-400  p-1.5">
          <FaGithub />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
