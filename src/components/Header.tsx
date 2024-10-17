"use client";

import Link from "next/link";
import { useState } from "react";
import { ImCross } from "react-icons/im";
import { FaSun } from "react-icons/fa6";
import { ThemeSwitcher } from "./ThemesChanger";
import { FaBars } from "react-icons/fa";
import SideBar from "./SideBar";

export const navLinks = [
  {
    name: "Home",
    link: "/",
  },
  {
    name: "Movie",
    link: "/movie",
  },
  {
    name: "TV Series",
    link: "/tvseries",
  },
  {
    name: "People",
    link: "/people",
  },
];

const Header = () => {
  const [searchText, setSearchText] = useState("");
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="flex justify-between items-center px-4 md:px-9 py-2 fixed top-0 left-0 right-0 z-50 dark:bg-neutral-800 bg-neutral-100 backdrop-blur  bg-opacity-90 shadow-md">
      <a
        href="#"
        className=" font-serif text-orange-500 flex gap-1 items-center"
      >
        <h1 className="text-xl md:text-2xl lg:text-3xl font-bold">Rare</h1>
        <span className="hidden md:block text-lg font-sans font-semibold text-orange-300">
          -movie
        </span>
      </a>
      <div className="hidden md:flex items-center ">
        {navLinks.map((item, i) => (
          <a
            key={i}
            href={item.link}
            className="text-lg lg:text-xl px-3 py-2 font-serif font-semibold"
          >
            {item.name}
          </a>
        ))}
        <div>
          <ThemeSwitcher />
        </div>
      </div>
      <div>
        <input
          type="text"
          className="px-3 py-2 rounded-full focus:outline-none shadow-md"
          placeholder="Search movies and tv"
        />
      </div>
      <div
        className="size-8 md:hidden flex justify-center items-center shadow-lg rounded-full border border-gray-100 cursor-pointer"
        onClick={() => setToggle((pre) => !pre)}
      >
        <FaBars />
      </div>
      {toggle && <SideBar />}
    </nav>
  );
};

export default Header;
