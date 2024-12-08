"use client";

import { useSearchParams } from "next/navigation";
import Link from "next/link";
interface SearchProps {
  title: string;
  param: string;
}

const NavItems = ({ title, param }: SearchProps) => {
  const searchParams = useSearchParams();
  const genre = searchParams.get("genre");
  return (
    <Link
      href={`/?genre=${param}`}
      className={`  text-2xl  font-semibold   ${
        genre === param
          ? "text-purple-600 underline underline-offset-8"
          : "text-gray-800 dark:text-gray-100"
      }`}
    >
      {title}
    </Link>
  );
};

export default NavItems;
