"use client";
import { useRouter } from "next/navigation";

import Link from "next/link";
import { useState } from "react";

import { LuMenu } from "react-icons/lu";
import { ImCross } from "react-icons/im";
import SearchBox from "./SearchBox";

const Header = () => {
  const router = useRouter();
  const [toggle, setToggle] = useState(false);
  const [searchText, setSearchText] = useState("");
  const toggleHandler = () => {
    setToggle(!toggle);
  };

  return (
    <>
      <header className="flex items-center justify-between px-6 py-2 gap-4 sticky top-0 bg-base-300 z-10 ">
        <div>
          <Link href={"/"} className=" hover:text-warning ">
            <h1 className="text-3xl inline-block  font-serif font-bold">
              Rare
            </h1>
          </Link>
        </div>
        <div className="hidden lg:flex gap-3 text-lg font-semibold ">
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
            href={"/topRated"}
            className="hover:underline hover:text-warning hover:underline-offset-8"
          >
            Top Rated
          </Link>
          <Link
            href={"/people"}
            className="hover:underline hover:text-warning hover:underline-offset-8"
          >
            People
          </Link>
        </div>
        <SearchBox />
        {/* mobile side bar */}
        <div className="block lg:hidden relative ">
          <button className="btn btn-circle text-2xl " onClick={toggleHandler}>
            <LuMenu className={`${toggle ? "hidden" : "block"}`} />
            <ImCross className={`${toggle ? "block" : "hidden"} text-xl`} />
          </button>

          <div
            className={`absolute top-14  w-80 p-4 bg-gray-800 flex flex-col z-10 ${
              toggle ? " -right-6" : " -right-96"
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
              href={"/topRated"}
              className="text-xl px-4 py-2 rounded-xl hover:bg-warning hover:text-black"
            >
              Top Rated
            </Link>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
