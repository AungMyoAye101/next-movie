import React from "react";
import Card from "./Card";
import SearchResult from "./SearchResult";
import Footer from "./Footer";
import SearchBox from "./SearchBox";
import Link from "next/link";
import { useRouter } from "next/router";

type resultProps = {
  searchText: string;
};
const Results = async ({ searchText }: resultProps) => {
  const res = await fetch(
    `https://api.themoviedb.org/3/search/multi?api_key=${process.env.API_KEY}&query=${searchText}&language=en-US&page=1&include_adult=false`,
    { next: { revalidate: 3600 } }
  );
  if (!res.ok) {
    throw new Error("Failed to load.");
  }
  const resData = await res.json();
  const data = resData.results;
  return (
    <div>
      {data.length === 0 ? (
        <div className="text-center mt-10">
          <h1 className="text-lg  font-serif">No match search results .</h1>
          <Link href={"/"} className="font-mono hover:text-rose-600">
            Please try again!
          </Link>
        </div>
      ) : (
        <SearchResult data={data} />
      )}
    </div>
  );
};

export default Results;
