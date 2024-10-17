"use client";

import Link from "next/link";
import { useState } from "react";
import { ImCross } from "react-icons/im";
import { FaBagShopping, FaSun, FaVideo } from "react-icons/fa6";
import { ThemeSwitcher } from "./ThemesChanger";
import { FaBars } from "react-icons/fa";
import SideBar from "./SideBar";
import { MdOndemandVideo } from "react-icons/md";
import { watchList } from "@/lib";
import Image from "next/image";

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
    link: "/tv",
  },
  {
    name: "People",
    link: "/people",
  },
];

const Header = () => {
  const [searchText, setSearchText] = useState("");
  const [toggle, setToggle] = useState(false);
  const [show, setShow] = useState(false);
  const handleToggle = () => {
    setToggle((pre) => !pre);
  };

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
      </div>
      <div className="flex gap-1 items-center">
        {/* <input
          type="text"
          className="px-3 py-2 rounded-full focus:outline-none shadow-md"
          placeholder="Search movies and tv"
        /> */}
        <ThemeSwitcher />
        <div
          className="size-8 flex justify-center items-center rounded-full shadow-md text-xl relative "
          onMouseEnter={() => setShow(true)}
          onMouseLeave={() => setShow(false)}
        >
          <MdOndemandVideo />
          <div className="bg-red-400 size-1 rounded-full absolute right-0 top-2 z-10 "></div>
        </div>
        {show && (
          <div className="p-4 rounded-lg shadow-md absolute top-16 right-0 w-60 bg-neutral-100 dark:bg-neutral-800 flex flex-col gap-1">
            {watchList.map((item, i) => (
              <div className="flex items-center gap-2 border-b border-gray-100 shadow p-1">
                <Image
                  src={`https://image.tmdb.org/t/p/original${item.image}`}
                  width={60}
                  height={40}
                  alt={item.title}
                  className="rounded-md "
                />
                <h1>{item.title}</h1>
              </div>
            ))}
          </div>
        )}
      </div>
      <div
        className="size-8 md:hidden flex justify-center items-center shadow-lg rounded-full border border-gray-100 cursor-pointer"
        onClick={handleToggle}
      >
        <FaBars />
      </div>
      {toggle && <SideBar handleToggle={handleToggle} />}
    </nav>
  );
};

export default Header;
