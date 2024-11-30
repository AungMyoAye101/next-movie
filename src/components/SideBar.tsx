import React from "react";
import { navLinks } from "./Header";
import Link from "next/link";
import { ThemeSwitcher } from "./ThemesChanger";
import { FaX } from "react-icons/fa6";

const SideBar = ({ handleToggle }: { handleToggle: () => void }) => {
  return (
    <section className="absolute left-0 top-0 z-20 h-screen bg-purple-100 dark:bg-neutral-900 rounded-xl  w-[90vw] flex justify-center items-center bg-opacity-95 backdrop-blur-md">
      <div
        className="absolute right-4 top-4 rounded-full p-2 cursor-pointer bg-neutral-50 shadow"
        onClick={handleToggle}
      >
        <FaX />
      </div>
      <div className="flex flex-col gap-2 w-full  px-4 ">
        <h1 className="text-3xl font-semibold font-serif text-purple-500 text-center">
          RARE
        </h1>
        {navLinks.map((l, i) => (
          <Link
            href={l.link}
            key={i}
            className="text-xl font-serif font-medium text-center  border border-purple-600 py-1 hover:bg-purple-400 rounded-full "
            onClick={handleToggle}
          >
            {l.name}
          </Link>
        ))}
      </div>
    </section>
  );
};

export default SideBar;
