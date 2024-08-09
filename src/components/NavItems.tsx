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
      className={`link text-base-400 text-lg font-bold no-underline hover:text-warning ${
        genre === param ? "link-primary underline-offset-4" : ""
      }`}
    >
      {title}
    </Link>
  );
};

export default NavItems;
