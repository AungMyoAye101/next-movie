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
      <div className="items-center gap-3 flex">
        <Link href={"/"} className="btn btn-circle btn-sm btn-ghost">
          <MdOutlineArrowBackIos />
        </Link>
        <div className="hidden md:flex gap-3">
          <Link
            href={"/people"}
            className="link  text-md no-underline hover:underline px-2 "
          >
            People
          </Link>
          <Link
            href={`/trending`}
            className="link text-md no-underline hover:underline px-2 "
          >
            Trending
          </Link>
          <Link
            href={`/movieTrend`}
            className="link text-md no-underline hover:underline px-2 "
          >
            Movie
          </Link>
          <Link
            href={`/tvTrend`}
            className="link  text-md no-underline hover:underline px-2 "
          >
            TV Shows
          </Link>
        </div>
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
            className="input  input-bordered focus:outline-none"
          />
        </form>
      </div>
    </nav>
  );
};

export default SearchNav;
