"use client";

import Link from "next/link";
import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { LuMenu } from "react-icons/lu";
import { ImCross } from "react-icons/im";

const Header = () => {
  const [toggle, setToggle] = useState(false);
  const toggleHandeler = () => {
    setToggle((pre) => !pre);
  };
  return (
    <header className="flex items-center justify-between px-8 py-2 gap-4 sticky top-0 bg-base-300 z-10 ">
      <div>
        <Link href={"/"} className=" hover:text-warning ">
          <h1 className="text-3xl inline-block pr-2">Rare</h1>
          <span className="text-sm bg-warning px-2 text-gray-800 rounded hidden lg:inline-block ">
            movie
          </span>
        </Link>
      </div>
      <div className="hidden lg:flex gap-3 text-lg font-semibold ">
        <Link
          href={"/"}
          className="hover:underline hover:text-warning hover:underline-offset-8"
        >
          Home
        </Link>
        <Link
          href={"/trending"}
          className="hover:underline hover:text-warning hover:underline-offset-8"
        >
          Trending
        </Link>
        <Link
          href={"/movieTrend"}
          className="hover:underline hover:text-warning hover:underline-offset-8"
        >
          Movie
        </Link>
        <Link
          href={"/tvTrend"}
          className="hover:underline hover:text-warning hover:underline-offset-8"
        >
          TV Series
        </Link>
        <Link
          href={"/people"}
          className="hover:underline hover:text-warning hover:underline-offset-8"
        >
          People
        </Link>
      </div>
      <div className="bg-greem-200 min-w-72 max-w-96 relative">
        <input
          type="text"
          placeholder="Search Movie & Tv Shows.. "
          className="py-2 px-3 rounded-2xl  bg-gray-300 focus:outline-none w-full text-sm text-gray-600"
        />
        <FaSearch className="absolute right-5 top-3 text-lg text-gray-600" />
      </div>
      {/* mobile side bar */}
      <div className="block lg:hidden relative ">
        <div>
          <button className="btn btn-circle text-2xl " onClick={toggleHandeler}>
            <LuMenu className={`${toggle ? "hidden" : "block"}`} />
            <ImCross className={`${toggle ? "block" : "hidden"} text-xl`} />
          </button>
        </div>
        <div
          className={`absolute top-14 z-20 w-80 p-4 bg-gray-800 flex flex-col -right-8 ${
            toggle ? " opacity-100" : " opacity-0"
          } transition-all  duration-200 ease-out`}
        >
          <div className="border-b border-b-slate-100 mb-1">
            <h1 className="text-2xl text-center py-2">Rare Movie</h1>
          </div>
          <Link
            href={"/"}
            className="  text-xl px-4 py-2 rounded-xl hover:bg-warning hover:text-black"
          >
            Home
          </Link>
          <Link
            href={"/trending"}
            className="text-xl px-4 py-2 rounded-xl hover:bg-warning hover:text-black"
          >
            Trending
          </Link>
          <Link
            href={"/movieTrend"}
            className="text-xl px-4 py-2 rounded-xl hover:bg-warning hover:text-black"
          >
            Movie
          </Link>
          <Link
            href={"/tvTrend"}
            className="text-xl px-4 py-2 rounded-xl hover:bg-warning hover:text-black"
          >
            TV Series
          </Link>
          <Link
            href={"/people"}
            className="text-xl px-4 py-2 rounded-xl hover:bg-warning hover:text-black"
          >
            People
          </Link>
          <Link
            href={"/"}
            className="text-xl px-4 py-2 rounded-xl hover:bg-warning hover:text-black"
          >
            Top Rated
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
