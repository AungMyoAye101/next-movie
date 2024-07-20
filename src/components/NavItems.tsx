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
      className={`btn  text-lg font-bold ${
        genre === param ? "btn-outline btn-success" : ""
      }`}
    >
      {title}
    </Link>
  );
};

export default NavItems;
