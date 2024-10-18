"use client";

import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
const SearchBox = () => {
  const [search, setSearch] = useState("");
  const router = useRouter();

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        router.push(`/search/${search}`);
        setSearch("");
      }}
      className="relative w-full "
    >
      <input
        type="Text"
        placeholder="Search movies and TV show ..."
        value={search}
        className="py-2 px-4 rounded-full  bg-gray-300 focus:outline-none   text-gray-600 w-full relative z-10 "
        onChange={(e) => setSearch(e.target.value)}
      />
      <button>
        <FaSearch className="absolute right-2 top-3 text-lg text-gray-600 z-20" />
      </button>
    </form>
  );
};

export default SearchBox;
