"use client";

import Link from "next/link";
import { useState } from "react";
import SearchBox from "./SearchBox";

const Header = () => {
  const [searchText, setSearchText] = useState("");

  return (
    <nav className="drawer drawer-end sticky top-0 z-10">
      <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col">
        {/* Navbar */}
        <div className="navbar bg-base-300 w-full flex justify-between items-center">
          <div className="mx-2  px-2">
            <Link href={"/"} className=" hover:text-warning ">
              <h1 className="text-3xl inline-block  font-serif font-bold">
                Rare
              </h1>
            </Link>
          </div>

          <div className="hidden flex-none lg:block">
            <ul className="menu menu-horizontal text-lg font-bold">
              {/* Navbar menu content here */}
              <li>
                <Link
                  href={"/trending"}
                  className="hover:underline hover:text-warning hover:underline-offset-8"
                >
                  Trending
                </Link>
              </li>
              <li>
                <Link
                  href={"/movieTrend"}
                  className="hover:underline hover:text-warning hover:underline-offset-8"
                >
                  Movie
                </Link>
              </li>
              <li>
                <Link
                  href={"/tvTrend"}
                  className="hover:underline hover:text-warning hover:underline-offset-8"
                >
                  TV Series
                </Link>
              </li>
              <li>
                <Link
                  href={"/topRated"}
                  className="hover:underline hover:text-warning hover:underline-offset-8"
                >
                  Top Rated
                </Link>
              </li>
              <li>
                <Link
                  href={"/people"}
                  className="hover:underline hover:text-warning hover:underline-offset-8"
                >
                  People
                </Link>
              </li>
            </ul>
          </div>
          <SearchBox />
          <div className="flex-none lg:hidden">
            <label
              htmlFor="my-drawer-3"
              aria-label="open sidebar"
              className="text-lg"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block h-6 w-6 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </label>
          </div>
        </div>
      </div>
      <div className="drawer-side z-20">
        <label
          htmlFor="my-drawer-3"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu bg-base-200 min-h-full w-80 p-4">
          {/* Sidebar content here */}
          <li>
            <div className="border-b border-b-slate-100 mb-1 rounded-none flex justify-center">
              <h1 className="text-2xl py-2">Rare Movie</h1>
            </div>
          </li>
          <li>
            <Link
              href={"/"}
              className="  text-xl px-4 py-2 rounded-xl hover:bg-warning hover:text-black"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href={"/trending"}
              className="text-xl px-4 py-2 rounded-xl hover:bg-warning hover:text-black"
            >
              Trending
            </Link>
          </li>
          <li>
            <Link
              href={"/movieTrend"}
              className="text-xl px-4 py-2 rounded-xl hover:bg-warning hover:text-black"
            >
              Movie
            </Link>
          </li>

          <li>
            {" "}
            <Link
              href={"/tvTrend"}
              className="text-xl px-4 py-2 rounded-xl hover:bg-warning hover:text-black"
            >
              TV Series
            </Link>
          </li>
          <li>
            {" "}
            <Link
              href={"/topRated"}
              className="text-xl px-4 py-2 rounded-xl hover:bg-warning hover:text-black"
            >
              Top Rated
            </Link>
          </li>
          <li>
            {" "}
            <Link
              href={"/people"}
              className="text-xl px-4 py-2 rounded-xl hover:bg-warning hover:text-black"
            >
              People
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
