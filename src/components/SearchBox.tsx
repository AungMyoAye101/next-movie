"use client";

import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { FaMagnifyingGlass } from "react-icons/fa6";
const SearchBox = ({ searchToggle }: { searchToggle: () => void }) => {
  const [search, setSearch] = useState("");
  const router = useRouter();

  return (
    <div className="absolute top-14 left-0 right-0 px-4 md:px-12 ">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          router.push(`/search/${search}`);
          searchToggle();
          setSearch("");
        }}
        className=" flex bg-purple-100 rounded-md border border-purple-300 "
      >
        <input
          type="Text"
          placeholder="Search movies and TV show ..."
          value={search}
          className="py-2 px-4 rounded-md    focus:outline-none bg-transparent  text-gray-600 flex-1   "
          onChange={(e) => setSearch(e.target.value)}
        />
      </form>
    </div>
  );
};

export default SearchBox;
