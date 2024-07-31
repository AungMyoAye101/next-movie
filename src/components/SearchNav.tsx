"use client";

import { useRouter } from "next/navigation";
import React, { useState } from "react";

const SearchNav = () => {
  const [search, setSearch] = useState("");
  const router = useRouter();
  return (
    <nav className="flex justify-between items-center px-4 py-2">
      <div>Back</div>
      <div className="flex gap-2">
        <h1>Movie</h1>
        <h1>Tv shows</h1>
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
            placeholder="Search..."
            onChange={(e) => setSearch(e.target.value)}
          />
        </form>
      </div>
    </nav>
  );
};

export default SearchNav;
