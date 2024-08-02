"use client";

import SearchText from "@/app/search/[searchText]/page";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { MdOutlineArrowBackIos } from "react-icons/md";

const SearchNav = () => {
  const [search, setSearch] = useState("");
  const router = useRouter();

  return (
    <nav className=" flex justify-between items-center px-4 py-2 bg-base-200">
      <div className="dropdown relative block md:hidden">
        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h7"
            />
          </svg>
        </div>
        <ul
          tabIndex={0}
          className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow absolute left-0 "
        >
          <li>
            <Link href={"/"} className="text-xl hover:text-blue-400">
              Home
            </Link>
          </li>

          <li>
            <Link href={"/"} className="text-xl hover:text-blue-400">
              About
            </Link>
          </li>
          <li>
            <Link href={"/"} className="text-xl hover:text-blue-400">
              Movie
            </Link>
          </li>
          <li>
            <Link href={`tv/${search}`} className="text-xl hover:text-blue-400">
              TV Shows
            </Link>
          </li>
        </ul>
      </div>

      <div className="items-center gap-3 hidden md:flex">
        <Link href={"/"} className="btn btn-circle btn-sm btn-ghost">
          <MdOutlineArrowBackIos />
        </Link>
        <Link
          href={"/populer"}
          className="link link-neutral text-md no-underline hover:underline px-2 "
        >
          Populer
        </Link>
        <button className="link link-neutral text-md no-underline hover:underline px-2 ">
          Trending
        </button>
        <button className="link link-neutral text-md no-underline hover:underline px-2 ">
          Movie
        </button>
        <Link
          href={`/tvTrend`}
          className="link link-neutral text-md no-underline hover:underline px-2 "
        >
          TV Shows
        </Link>
      </div>

      <div>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            router.push(`${search}`);
          }}
        >
          <input
            type="text"
            placeholder="Enter Search Text..."
            onChange={(e) => setSearch(e.target.value)}
            className="input input-sm input-bordered focus:outline-none"
          />
        </form>
      </div>
    </nav>
  );
};

export default SearchNav;
