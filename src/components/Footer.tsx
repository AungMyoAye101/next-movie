"use client";

import React from "react";
import {
  FaFacebookF,
  FaGithub,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa6";
import { navLinks } from "./Header";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="flex flex-col justify-center items-center gap-4 bg-gradient-to-br from-purple-100 to-purple-400 rounded-se-lg py-10">
      <div>
        <h1 className="text-4xl font-bold font-serif  text-transparent bg-clip-text bg-gradient-to-br from-purple-600 to-pink-400">
          RARE
        </h1>
      </div>
      <div className="flex flex-wrap items-center  gap-1 justify-center">
        {navLinks.map((l, i) => (
          <Link
            key={i}
            href={l.link}
            className="text-base md:text-lg font-semibold px-4 py-1  bg-pink-400 rounded-full"
          >
            {l.name}
          </Link>
        ))}
      </div>
      <div className="flex items-center justify-center gap-4 text-gray-800">
        <a
          href="https://www.facebook.com/profile.php?id=61556195843942"
          target="_blank"
          className="rounded-full text-2xl cursor-pointer bg-gray-100 hover:bg-pink-400  p-1.5"
        >
          <FaFacebookF />
        </a>
        <a
          href="https://www.instagram.com/aungmyoaye404/"
          target="_blank"
          className="rounded-full text-2xl cursor-pointer bg-gray-100 hover:bg-pink-400  p-1.5"
        >
          <FaInstagram />
        </a>
        <a
          href="https://www.linkedin.com/in/aung-myo-aye-119017311/"
          target="_blank"
          className="rounded-full text-2xl cursor-pointer bg-gray-100 hover:bg-pink-400  p-1.5"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://github.com/AungMyoAye101"
          target="_blank"
          className="rounded-full text-2xl cursor-pointer bg-gray-100 hover:bg-pink-400  p-1.5"
        >
          <FaGithub />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
