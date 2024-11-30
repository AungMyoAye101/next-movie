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
import { MdOndemandVideo } from "react-icons/md";
import { watchList } from "@/lib";
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
  const [searchText, setSearchText] = useState("");
  const [toggle, setToggle] = useState(false);
  const [show, setShow] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const path = usePathname();
  const handleToggle = () => {
    setToggle((pre) => !pre);
  };

  return (
    <nav className="flex justify-between items-center px-4 md:px-9 py-2 fixed top-0 left-0 right-0 z-50 dark:bg-neutral-800 bg-neutral-100 backdrop-blur  bg-opacity-90 shadow-md">
      <div
        className="size-8 md:hidden flex justify-center items-center shadow-lg rounded-full border border-gray-100 cursor-pointer"
        onClick={handleToggle}
      >
        <FaBars />
      </div>

      {toggle && <SideBar handleToggle={handleToggle} />}
      <Link href="/">
        <h1 className="text-xl md:text-2xl lg:text-3xl font-serif text-purple-600   font-bold">
          RARE
        </h1>
      </Link>
      <div className="hidden md:flex items-center ">
        {navLinks.map((item, i) => (
          <Link
            key={i}
            href={item.link}
            className={`text-lg lg:text-xl px-3 py-1 font-serif font-semibold hover:text-purple-400 rounded-full ${
              item.link === path ? " text-purple-400" : ""
            }`}
          >
            {item.name}
          </Link>
        ))}
      </div>
      <div className="flex gap-2 items-center">
        <ThemeSwitcher />
        <div
          className="size-8 flex justify-center items-center rounded-full shadow-md text-xl relative "
          onMouseEnter={() => setShow(true)}
          onMouseLeave={() => setShow(false)}
        >
          <MdOndemandVideo />
        </div>
        <div
          className="size-8 flex justify-center items-center rounded-full shadow-md text-lg relative cursor-pointer "
          onClick={() => setShowSearch((pre) => !pre)}
        >
          <FaMagnifyingGlass />
        </div>
        {showSearch && (
          <div
            className="absolute right-1 top-14 "
            onClick={() => setShowSearch(false)}
          >
            <SearchBox />
          </div>
        )}

        {show && (
          <div className="p-4 rounded-lg shadow-md absolute top-16 right-0 w-60 bg-neutral-100 dark:bg-neutral-800 flex flex-col gap-1">
            {watchList.map((item) => (
              <Link
                key={item.id}
                href={`/movie/${item.id}`}
                className="flex items-center gap-2 border-b border-gray-100 shadow p-1"
              >
                <Image
                  src={`https://image.tmdb.org/t/p/original${item.image}`}
                  width={60}
                  height={40}
                  alt={item.title}
                  className="rounded-md "
                />
                <h1>{item.title}</h1>
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Header;
