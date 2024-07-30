"use client";

import Link from "next/link";

import DarkModeSwitch from "./DarkModeSwiitch";
import { useState } from "react";

const Header = () => {
  const [search, setSearch] = useState(false);
  return (
    <>
      <header className="navbar bg-base-100 border-b border-gray-600 relative z-50 ">
        <div className="navbar-start">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle"
            >
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
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <li>
                <Link href={"/"} className="text-xl hover:text-blue-400">
                  Home
                </Link>
              </li>

              <li>
                <Link href={"/about"} className="text-xl hover:text-blue-400">
                  About
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="navbar-center">
          <Link
            href={"/"}
            className="link no-underline text-xl hover:text-warning "
          >
            Rare
          </Link>
        </div>
        <div className="flex navbar-end gap-4 items-center ">
          <DarkModeSwitch />

          <button
            className="hover:text-warning "
            onClick={() => setSearch((pre) => !pre)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </button>

          <button className="hover:text-warning">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
              />
            </svg>
          </button>
        </div>
      </header>

      <form
        className={`absolute mt-2 right-0 z-10  ${
          search ? "top-16 opacity-100" : "top-0 opacity-0"
        }  transition-all ease-in-out duration-300`}
      >
        <label className="input input-bordered flex items-center gap-2">
          <input
            type="text"
            className="grow bg-slate-100 focus:outine-0  outline-none"
            placeholder="Search"
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="h-4 w-4 opacity-70"
          >
            <path
              fillRule="evenodd"
              d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
              clipRule="evenodd"
            />
          </svg>
        </label>
      </form>
    </>
  );
};

export default Header;
