import React from "react";
import { navLinks } from "./Header";
import Link from "next/link";
import { ThemeSwitcher } from "./ThemesChanger";
import { FaX } from "react-icons/fa6";

const SideBar = ({ handleToggle }: { handleToggle: () => void }) => {
  return (
    <section className="absolute top-0 h-screen bg-neutral-100 dark:bg-neutral-900 rounded-xl right-0 w-[90vw] flex justify-center items-center bg-opacity-90 backdrop-blur-md">
      <div
        className="absolute left-4 top-4 rounded-full shadow-lg p-2 cursor-pointer"
        onClick={handleToggle}
      >
        <FaX />
      </div>
      <div className="flex flex-col gap-2 w-full  px-4 ">
        <h1 className="text-3xl font-semibold text-orange-500 text-center">
          Rare Movies
        </h1>
        {navLinks.map((l, i) => (
          <Link
            href={l.link}
            key={i}
            className="text-2xl text-center  border border-orange-600 py-1 "
            onClick={handleToggle}
          >
            {l.name}
          </Link>
        ))}
        <div className="text-2xl  flex justify-center border border-orange-600 py-1 ">
          <ThemeSwitcher />
        </div>
      </div>
    </section>
  );
};

export default SideBar;
