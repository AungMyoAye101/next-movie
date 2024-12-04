import React from "react";
import Card from "./CardGridCon";
import Footer from "./Footer";
import SearchBox from "./SearchBox";
import Link from "next/link";

type SearchProps = {
  searchText: string;
};
const Results = async ({ searchText }: SearchProps) => {
  const res = await fetch(
    `https://api.themoviedb.org/3/search/multi?api_key=${process.env.API_KEY}&query=${searchText}&language=en-US&page=1&include_adult=false`,
    { next: { revalidate: 3600 } }
  );

  const resData = await res.json();

  const data = await resData.results;
  return (
    <section>
      <h1 className="text-xl mb-4">
        Search result of{" "}
        <span className="font-serif text-orange-400 font-semibold">
          {searchText}
        </span>
      </h1>
      {data.length < 1 ? (
        <div className="text-center mt-10">
          <h1 className="text-lg  font-serif">No match search results .</h1>
          <Link href={"/"} className="font-mono hover:text-rose-600">
            Please try again!
          </Link>
        </div>
      ) : (
        <Card data={data} />
      )}
    </section>
  );
};

export default Results;
