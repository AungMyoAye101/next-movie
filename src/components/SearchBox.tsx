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
      className="relative flex-1 max-w-xs"
    >
      <input
        type="Text"
        placeholder="Search for a movie or Tv shows..."
        value={search}
        className="py-2 px-3 rounded-2xl  bg-gray-300 focus:outline-none  text-sm text-gray-600 w-full"
        onChange={(e) => setSearch(e.target.value)}
      />
      <button>
        <FaSearch className="absolute right-2 top-3 text-lg text-gray-600" />
      </button>
    </form>
  );
};

export default SearchBox;
