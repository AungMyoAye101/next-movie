import Card from "@/components/Card";

import Results from "@/components/Results";
import SearchBox from "@/components/SearchBox";
import Link from "next/link";
import React, { Suspense } from "react";

const SearchText = async ({ params }: { params: { searchText: string } }) => {
  const searchText = params.searchText;
  const res = await fetch(
    `https://api.themoviedb.org/3/search/multi?api_key=${process.env.API_KEY}&query=${searchText}&language=en-US&page=1&include_adult=false`,
    { next: { revalidate: 3600 } }
  );
  if (!res.ok) {
    throw new Error("Failed to load.");
  }
  const data = await res.json();
  const result = data.results;
  return (
    <div className="p-4">
      <Link href={"/"} className="link-primary text-lg my-2">
        &larr; Back to the home
      </Link>

      <Results data={result} />
    </div>
  );
};

export default SearchText;
