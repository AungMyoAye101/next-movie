"use client";

import Link from "next/link";
import { useContext, useState } from "react";
import { ImCross } from "react-icons/im";
import {
  FaBagShopping,
  FaMagnifyingGlass,
  FaSun,
  FaVideo,
} from "react-icons/fa6";
import { ThemeSwitcher } from "./ThemesChanger";
import { FaBars } from "react-icons/fa";
import SideBar from "./SideBar";
import Image from "next/image";
import { usePathname } from "next/navigation";
import SearchBox from "./SearchBox";

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

interface ListProps {
  image?: string;
  title: string;
}

const Header = () => {
  const [toggle, setToggle] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const path = usePathname();
  const handleToggle = () => {
    setToggle((pre) => !pre);
  };
  const searchToggle = () => {
    setShowSearch((pre) => !pre);
  };

  return (
    <nav className="flex justify-between items-center px-4 md:px-12 py-2 fixed top-0 left-0 right-0 z-50 dark:bg-neutral-800 bg-purple-100 backdrop-blur  bg-opacity-70 shadow-md">
      <div
        className="size-8 md:hidden flex justify-center items-center shadow-lg rounded-full bg-purple-100 text-gray-600 cursor-pointer"
        onClick={handleToggle}
      >
        <FaBars />
      </div>

      {toggle && <SideBar handleToggle={handleToggle} />}
      <Link href="/">
        <h1 className="text-xl md:text-2xl lg:text-3xl font-serif bg-clip-text text-transparent bg-gradient-to-br from-pink-300 to-purple-700   font-bold">
          RARE
        </h1>
      </Link>
      <div className="hidden md:flex items-center ">
        {navLinks.map((item, i) => (
          <Link
            key={i}
            href={item.link}
            className={`text-lg lg:text-xl px-3 py-1 font-serif font-semibold hover:text-purple-600 rounded-full ${
              item.link === path ? " text-purple-600" : ""
            }`}
          >
            {item.name}
          </Link>
        ))}
      </div>
      <div className="flex gap-4 items-center">
        <ThemeSwitcher />

        <div
          className="size-8 flex justify-center items-center bg-purple-100 text-gray-700 rounded-full shadow-md text-lg relative cursor-pointer "
          onClick={() => searchToggle()}
        >
          <FaMagnifyingGlass />
        </div>
        {showSearch && <SearchBox searchToggle={searchToggle} />}
      </div>
    </nav>
  );
};

export default Header;
