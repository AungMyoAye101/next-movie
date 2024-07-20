"use client";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
interface SearchProps {
  title: string;
  param: string;
}

const NavItems = (props: SearchProps) => {
  const searchParams = useSearchParams();
  const genre = searchParams.get("genre");
  return (
    <Link href={`/?genre=${props.param}`} className="btn text-lg font-bold">
      {props.title}
    </Link>
  );
};

export default NavItems;
