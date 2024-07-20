"use client";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { use } from "react";

const NavItems = () => {
  const searchParams = useSearchParams();
  const genre = searchParams.get("genre");
  return (
    <div>
      <div className="flex my-4 gap-1 ">
        <Link href={`/?genre=trending`} className="btn text-lg font-bold">
          Trending
        </Link>
        <Link href={`/?genre=top_rated`} className="btn text-lg font-bold">
          Top Rated
        </Link>
      </div>
    </div>
  );
};

export default NavItems;
