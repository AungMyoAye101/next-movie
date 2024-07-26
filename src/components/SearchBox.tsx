"use client";

import { useRouter } from "next/navigation";
import React, { useState } from "react";

const SearchBox = () => {
  const [search, setSearch] = useState("");
  const router = useRouter();

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        router.push(`search/${search}`);
      }}
      className="flex text-lg "
    >
      <input
        type="Text"
        placeholder="Search for a movie or Tv shows..."
        className="input input-bordered input-info w-full rounded-3xl bg-slate-50 bg-opacity-50 focus:outline-none text-gray-800 placeholder-gray-800"
        onChange={(e) => setSearch(e.target.value)}
      />
      <button className="btn btn-info rounded-3xl px-10 -ml-12 ">Search</button>
    </form>
  );
};

export default SearchBox;
